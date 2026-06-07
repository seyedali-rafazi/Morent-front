import { Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";
import generateUniqueId from "generate-unique-id";

interface SkeletonCardProps {
  cards: number;
}

const Card = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "100%",
  maxWidth: "300px",
  backgroundColor: "#FFFFFF",
  padding: "20px",
  minHeight: "330px",
  borderRadius: "10px",
  [theme.breakpoints.up("sm")]: {
    maxWidth: "330px",
  },
  [theme.breakpoints.up("md")]: {
    maxWidth: "250px",
  },
  [theme.breakpoints.up("lg")]: {
    maxWidth: "270px",
  },
}));

const Row = styled("div")({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const ImageSkeletonWrap = styled("div")({
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

function SkeletonCard({ cards }: SkeletonCardProps) {
  return Array.from({ length: cards }).map(() => (
    <Card key={generateUniqueId()}>
      <Row>
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "10%" }} />
        </Skeleton>
      </Row>

      <ImageSkeletonWrap>
        <Skeleton variant="rectangular" width="100%">
          <div style={{ paddingTop: "57%" }} />
        </Skeleton>
      </ImageSkeletonWrap>

      <Skeleton variant="rectangular" width="100%">
        <div style={{ paddingTop: "10%" }} />
      </Skeleton>

      <Row>
        <Skeleton variant="rectangular" width="20%">
          <div style={{ paddingTop: "50%" }} />
        </Skeleton>
        <Skeleton variant="rectangular" width="20%">
          <div style={{ paddingTop: "50%" }} />
        </Skeleton>
      </Row>
    </Card>
  ));
}

export default SkeletonCard;
