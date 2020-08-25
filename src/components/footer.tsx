import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Hidden from "@material-ui/core/Hidden"
import Link from "@material-ui/core/Link"
import FabDownload from "./fab-download"

const Footer = () => {
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
            minHeight: 250,
            color: "#FFF",
          }}
        >
          <Grid
            xs={12}
            sm={6}
            item
            container
            direction="column"
            justify="space-evenly"
            style={{ padding: 10 }}
          >
            <Typography variant="h4" color="inherit">
              vHealth
            </Typography>
            <Typography variant="body2" color="inherit">
              vHealth provides progressive, and affordable healthcare,
              accessible on mobile and online for everyone
            </Typography>
            <Typography variant="body2" color="inherit">
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
                direction="column"
                justify="space-evenly"
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
            paddingLeft: 5,
            paddingRight: 5,
          }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="inherit">
            Created by{" "}
            <a
              href="https://shantanudeshmukh.com/"
              target="_blank"
              style={{ color: "#FFF" }}
            >
              Shantanu Deshmukh
            </a>
          </Typography>
          <Typography variant="body2" color="inherit">
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
