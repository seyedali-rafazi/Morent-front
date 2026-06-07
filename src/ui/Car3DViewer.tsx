import { Suspense, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  useGLTF,
  Html,
  useProgress,
} from "@react-three/drei";
import { Box3, Mesh, Object3D, Vector3 } from "three";
import { Box, Typography, LinearProgress, type SxProps, type Theme } from "@mui/material";
import ThreeSixtyIcon from "@mui/icons-material/ThreeSixty";

const BMW_MODEL = "/models/bmw-m4.glb";

const HIDDEN_MESH_KEYWORDS = [
  "ground",
  "plane",
  "shadow",
  "platform",
  "base",
  "circle",
  "square",
  "turntable",
  "backdrop",
  "floor",
  "stage",
  "pedestal",
  "disk",
  "plate",
];

function isPlatformMesh(mesh: Mesh): boolean {
  const name = mesh.name.toLowerCase();
  if (HIDDEN_MESH_KEYWORDS.some((keyword) => name.includes(keyword))) {
    return true;
  }

  if (!mesh.geometry) return false;

  mesh.geometry.computeBoundingBox();
  const geoBox = mesh.geometry.boundingBox;
  if (!geoBox) return false;

  const size = new Vector3();
  geoBox.getSize(size);
  const maxHorizontal = Math.max(size.x, size.z);

  return size.y < 0.2 && maxHorizontal > 1.2;
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <Box
        sx={{
          width: 220,
          bgcolor: "rgba(255,255,255,0.95)",
          p: 2.5,
          borderRadius: "16px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
          textAlign: "center",
        }}
      >
        <Typography sx={{ fontWeight: 700, mb: 1.5, color: "primary.main" }}>
          Loading BMW 360° model…
        </Typography>
        <LinearProgress
          variant="determinate"
          value={progress}
          sx={{ borderRadius: 4, height: 6 }}
        />
        <Typography variant="caption" sx={{ color: "secondary.400", mt: 1, display: "block" }}>
          {Math.round(progress)}%
        </Typography>
      </Box>
    </Html>
  );
}

function BMWCarModel() {
  const { scene } = useGLTF(BMW_MODEL);

  const model = useMemo(() => {
    const clone = scene.clone(true);

    clone.traverse((child: Object3D) => {
      if (!(child instanceof Mesh)) return;

      if (isPlatformMesh(child)) {
        child.visible = false;
        return;
      }

      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material) {
        const materials = Array.isArray(child.material)
          ? child.material
          : [child.material];
        materials.forEach((mat) => {
          if ("envMapIntensity" in mat) {
            (mat as { envMapIntensity: number }).envMapIntensity = 1.2;
          }
          mat.needsUpdate = true;
        });
      }
    });

    const visibleBox = new Box3();
    clone.traverse((child: Object3D) => {
      if (child instanceof Mesh && child.visible) {
        visibleBox.expandByObject(child);
      }
    });

    if (!visibleBox.isEmpty()) {
      const center = visibleBox.getCenter(new Vector3());
      clone.position.set(-center.x, -visibleBox.min.y, -center.z);
    }

    return clone;
  }, [scene]);

  return (
    <group rotation={[0, Math.PI / 4, 0]}>
      <primitive object={model} scale={0.72} />
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#E8EEF8"]} />
      <fog attach="fog" args={["#E8EEF8", 14, 32]} />
      <ambientLight intensity={0.45} />
      <directionalLight position={[8, 12, 6]} intensity={1.3} castShadow />
      <directionalLight position={[-6, 4, -4]} intensity={0.45} color="#B8C9FF" />
      <directionalLight position={[0, 6, -8]} intensity={0.25} />
      <BMWCarModel />
      <Environment preset="studio" />
      <OrbitControls
        enablePan={false}
        enableZoom
        minDistance={7.5}
        maxDistance={20}
        minPolarAngle={Math.PI / 8}
        maxPolarAngle={Math.PI / 2.05}
        target={[0, 0.55, 0]}
        autoRotate={false}
      />
    </>
  );
}

useGLTF.preload(BMW_MODEL);

interface Car3DViewerProps {
  height?: string | number | Record<string, string | number>;
}

function Car3DViewer({
  height = { xs: 340, sm: 420, md: 480 },
}: Car3DViewerProps) {
  return (
    <Box
      sx={{
        width: "100%",
        height,
        borderRadius: "24px",
        overflow: "hidden",
        position: "relative",
        border: "1px solid",
        borderColor: "primary.200",
        boxShadow: "0 20px 60px rgba(53, 99, 233, 0.15)",
        bgcolor: "#E8EEF8",
      }}
    >
      <Canvas
        camera={{ position: [8.5, 4.2, 8.5], fov: 42 }}
        style={{ width: "100%", height: "100%" }}
        gl={{ antialias: true, alpha: false }}
        dpr={[1, 2]}
      >
        <Suspense fallback={<Loader />}>
          <Scene />
        </Suspense>
      </Canvas>

      <Box
        sx={{
          position: "absolute",
          top: 16,
          left: 16,
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(12px)",
          px: 1.8,
          py: 1,
          borderRadius: "14px",
          boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        }}
      >
        <ThreeSixtyIcon sx={{ color: "primary.600", fontSize: 22 }} />
        <Box>
          <Typography sx={{ fontWeight: 800, fontSize: "13px", color: "primary.main", lineHeight: 1.2 }}>
            BMW M4 — 360° View
          </Typography>
          <Typography sx={{ fontSize: "10px", color: "secondary.300" }}>
            Real 3D model
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          position: "absolute",
          bottom: 16,
          left: "50%",
          transform: "translateX(-50%)",
          bgcolor: "rgba(10, 25, 111, 0.82)",
          backdropFilter: "blur(8px)",
          px: 2.5,
          py: 1,
          borderRadius: "24px",
        }}
      >
        <Typography sx={{ color: "#fff", fontSize: "12px", fontWeight: 600, whiteSpace: "nowrap" }}>
          Drag to rotate 360° • Scroll to zoom
        </Typography>
      </Box>
    </Box>
  );
}

export default Car3DViewer;
