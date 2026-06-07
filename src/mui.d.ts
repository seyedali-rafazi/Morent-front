import type { CSSProperties } from "react";
import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteColor {
    [shade: number]: string | undefined;
  }
  interface SimplePaletteColorOptions {
    [shade: number]: string | undefined;
  }
}

type SimpleSx = CSSProperties | Record<string, unknown> | Record<string, unknown>[];

declare module "@mui/material/Box" {
  interface BoxOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Typography" {
  interface TypographyOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Button" {
  interface ButtonOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Paper" {
  interface PaperOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Grid" {
  interface GridOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/AppBar" {
  interface AppBarOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/IconButton" {
  interface IconButtonOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Container" {
  interface ContainerOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Chip" {
  interface ChipOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Avatar" {
  interface AvatarOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Divider" {
  interface DividerOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/LinearProgress" {
  interface LinearProgressProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Skeleton" {
  interface SkeletonOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/TextField" {
  interface TextFieldProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Drawer" {
  interface DrawerProps {
    sx?: SimpleSx | SimpleSx[];
  }
}

declare module "@mui/material/Badge" {
  interface BadgeOwnProps {
    sx?: SimpleSx | SimpleSx[];
  }
}
