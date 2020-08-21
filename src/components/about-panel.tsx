import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Image from "./image"

const AboutPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 200 }}>
      <Grid item xs={6}>
        {/* <Image /> */}
      </Grid>
      <Grid xs={6} item>
        <Typography variant="h4" color="inherit" noWrap>
          Leading healthcare providers
        </Typography>

        <Typography color="inherit">
          Trafalgar provides progressive, and affordable healthcare, accessible
          on mobile and online for everyone. To us, it’s not just work. We take
          pride in the solutions we deliver
        </Typography>
        <Button variant="outlined" color="primary" size="large">
          Learn More
        </Button>
      </Grid>
    </Grid>
  )
}
export default AboutPanel
