import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import Image from "./image"
import Hidden from "@mui/material/Hidden"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"

const Hero = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleConsultClick = () => {
    console.log("Consult Today button clicked")
    alert("Consultation feature coming soon!")
  }

  return (
    <Grid
      container
      spacing={isMobile ? 2 : 3}
      style={{
        minHeight: isMobile ? 400 : 500,
        padding: isMobile ? "20px 10px" : "40px 20px",
      }}
    >
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        flexDirection="column"
        justifyContent="center"
        alignItems={isMobile ? "center" : "flex-start"}
        style={{
          paddingLeft: isMobile ? 20 : 40,
          paddingRight: isMobile ? 20 : 40,
          textAlign: isMobile ? "center" : "left",
        }}
      >
        <Typography
          variant="h4"
          color="inherit"
          style={{
            marginBottom: 20,
            fontSize: isMobile ? "1.75rem" : "2.125rem",
          }}
        >
          Virtual Healthcare for you
        </Typography>

        <Typography
          variant="subtitle1"
          style={{
            marginBottom: 30,
            fontSize: isMobile ? "1rem" : "1.25rem",
          }}
        >
          We provide progressive, and affordable healthcare, accessible on
          mobile and online for everyone
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size={isMobile ? "medium" : "large"}
          onClick={handleConsultClick}
        >
          Consult Today
        </Button>
      </Grid>
      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          flexDirection="column"
          justifyContent="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            <Image alt="Virtual Healthcare for you" filename="hero-image.png" />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}

export default Hero
