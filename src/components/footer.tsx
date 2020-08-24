import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Link from "@material-ui/core/Link"

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      items: [
        { displayText: "About", link: "" },
        { displayText: "Testimonials", link: "" },
        { displayText: "Find a Doctor", link: "" },
        { displayText: "Apps", link: "" },
      ],
    },
    {
      title: "Region",
      items: [
        { displayText: "India", link: "" },
        { displayText: "Indonesia", link: "" },
        { displayText: "Singapore", link: "" },
        { displayText: "Canada", link: "" },
      ],
    },
    {
      title: "Help",
      items: [
        { displayText: "Help Center", link: "" },
        { displayText: "Contact Support", link: "" },
        { displayText: "Instructions", link: "" },
        { displayText: "How it works", link: "" },
      ],
    },
  ]

  return (
    <React.Fragment>
      <Box className="footer">
        <Grid
          container
          spacing={4}
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

          {footerLinks.map(footerMenu => (
            <Grid
              item
              xs={12}
              sm={2}
              container
              direction="column"
              justify="space-evenly"
            >
              <Typography variant="subtitle1" color="inherit">
                {footerMenu.title}
              </Typography>
              {footerMenu.items.map(link => (
                <Link color="inherit" variant="body2">
                  {link.displayText}
                </Link>
              ))}
            </Grid>
          ))}
        </Grid>
      </Box>
      <Box className="attribution">
        <Grid
          container
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            color: "#FFF",
          }}
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Typography variant="body2" color="inherit">
            Created by Shantanu Deshmukh
          </Typography>
          <Typography variant="body2" color="inherit">
            Designed by Slab Studio
          </Typography>
        </Grid>
      </Box>
    </React.Fragment>
  )
}
export default Footer
