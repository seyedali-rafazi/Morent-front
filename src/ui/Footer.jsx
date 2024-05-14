import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";

const footerContents = [
  {
    id: 1,
    section: "About",
    subSections: [
      "How it works",
      "Featured",
      "Partnership",
      "Bussiness Relation",
    ],
  },
  {
    id: 2,
    section: "Community",
    subSections: ["Events", "Blog", "Podcast", "Invite a friend"],
  },
  {
    id: 3,
    section: "Socials",
    subSections: ["Discord", "Instagram", "Twitter", "Facebook"],
  },
];

function Footer() {
  return (
    <Box sx={{ bgcolor: "primary.100", py: "50px", px: "20px" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: "25px",
          py: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            px: "16px",
            gap: "15px",
          }}
        >
          <Box
            sx={{ width: "150px" }}
            component="img"
            src="/photos/logo.svg"
          ></Box>
          <Typography
            sx={{
              width: { xs: "100%", md: "300px" },
              textAlign: "justify",
              color: "secondary.400",
              fontSize: { xs: "13px", md: "15px" },
            }}
          >
            Our vision is to provide convenience and help increase your sales
            business.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            width: { xs: "100%", md: "55%", lg: "50%" },
          }}
        >
          {footerContents.map((footerContent) => (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                justifyContent: "flex-start",
                gap: "5px",
                minWidth: "140px",
              }}
              key={footerContent.id}
            >
              <Typography sx={{ px: "16px", fontWeight: "700" }}>
                {footerContent.section}
              </Typography>
              <List>
                {footerContent.subSections.map((subSection) => (
                  <ListItem
                    key={subSection}
                    sx={{
                      color: "secondary.400",
                      fontSize: { xs: "12px", md: "15px" },
                    }}
                  >
                    {subSection}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          py: "30px",
          borderTop: "2px solid",
          borderColor: "secondary.200",
          gap: "20px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            width: { xs: "100%", md: "40%" },
            px: "16px",
          }}
        >
          <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
            ©2024 MORENT. All rights reserved
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: { xs: "space-between", md: "space-evenly" },
            width: { xs: "100%", md: "40%" },
            px: "16px",
          }}
        >
          <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
            Privacy & Policy
          </Typography>
          <Typography sx={{ fontSize: { xs: "12px", md: "15px" } }}>
            Terms & Condition
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
