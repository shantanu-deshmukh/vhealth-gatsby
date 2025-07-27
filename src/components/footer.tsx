import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Hidden from "@mui/material/Hidden"
import Link from "@mui/material/Link"
import FabDownload from "./fab-download"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"

const Footer = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const footerLinks = [
    {
      title: "Company",
      items: [
        { displayText: "About", url: "" },
        {
          displayText: "Testimonials",
          url: "",
        },
        { displayText: "Find a Doctor", url: "" },
        { displayText: "Apps", url: "" },
      ],
    },
    {
      title: "Region",
      items: [
        { displayText: "India", url: "" },
        { displayText: "Indonesia", url: "" },
        { displayText: "Singapore", url: "" },
        { displayText: "Canada", url: "" },
      ],
    },
    {
      title: "Help",
      items: [
        { displayText: "Help Center", url: "" },
        { displayText: "Contact Support", url: "" },
        { displayText: "Instructions", url: "" },
        { displayText: "How it works", url: "" },
      ],
    },
  ]

  return (
    <React.Fragment>
      <Box className="footer">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            minHeight: isMobile ? 200 : 250,
            color: "#FFF",
            padding: isMobile ? "20px 10px" : "40px 20px",
          }}
        >
          <Grid
            xs={12}
            sm={6}
            item
            container
            flexDirection="column"
            justifyContent="space-evenly"
            style={{
              padding: isMobile ? 10 : 20,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            <Typography
              variant="h4"
              color="inherit"
              style={{
                fontSize: isMobile ? "1.75rem" : "2.125rem",
                marginBottom: isMobile ? 10 : 20,
              }}
            >
              vHealth
            </Typography>
            <Typography
              variant="body2"
              color="inherit"
              style={{
                fontSize: isMobile ? "0.875rem" : "1rem",
                marginBottom: isMobile ? 10 : 20,
              }}
            >
              vHealth provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Typography>
            <Typography
              variant="body2"
              color="inherit"
              style={{
                fontSize: isMobile ? "0.75rem" : "0.875rem",
              }}
            >
              ©vHealth PTY LTD 2020. All rights reserved
            </Typography>
          </Grid>

          <Hidden xsDown>
            {footerLinks.map(footerMenu => (
              <Grid
                item
                xs={12}
                sm={2}
                container
                flexDirection="column"
                justifyContent="space-evenly"
                key={footerMenu.title}
              >
                <Typography variant="subtitle1" color="inherit">
                  {footerMenu.title}
                </Typography>
                {footerMenu.items.map(link => (
                  <Link color="inherit" variant="body2" key={link.displayText}>
                    {link.displayText}
                  </Link>
                ))}
              </Grid>
            ))}
          </Hidden>
        </Grid>
      </Box>
      <Box className="attribution">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: "#FFF",
            paddingLeft: isMobile ? 10 : 20,
            paddingRight: isMobile ? 10 : 20,
          }}
          flexDirection={isMobile ? "column" : "row"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body2"
            color="inherit"
            style={{
              fontSize: isMobile ? "0.75rem" : "0.875rem",
              marginBottom: isMobile ? 5 : 0,
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Created by{" "}
            <a
              href="https://shantanudeshmukh.com/"
              target="_blank"
              style={{ color: "#FFF" }}
            >
              Shantanu Deshmukh
            </a>
          </Typography>
          <Typography
            variant="body2"
            color="inherit"
            style={{
              fontSize: isMobile ? "0.75rem" : "0.875rem",
              textAlign: isMobile ? "center" : "left",
            }}
          >
            Designed by
            <a
              href="https://dribbble.com/slabdsgn"
              target="_blank"
              style={{ color: "#FFF", margin: 5 }}
            >
              SLAB Design Studio
            </a>
          </Typography>
        </Grid>
        <FabDownload />
      </Box>
    </React.Fragment>
  )
}

export default Footer
