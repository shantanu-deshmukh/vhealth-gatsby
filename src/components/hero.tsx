import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"

const Hero = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 200 }}>
      <Grid xs={6} item>
        <Typography variant="h4" color="inherit">
          Virtual Healthcare for you
        </Typography>

        <Typography variant="subtitle1">
          We provide progressive, and affordable healthcare, accessible on
          mobile and online for everyone
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Consult Today
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Image />
      </Grid>
    </Grid>
  )
}
export default Hero
