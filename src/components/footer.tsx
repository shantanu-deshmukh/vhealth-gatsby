import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"

const Footer = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 200 }}>
      <Grid xs={12} sm={4} item>
        <Typography variant="h4" color="inherit" noWrap>
          Attribution
        </Typography>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Typography color="inherit">FOOTER MENUES</Typography>
      </Grid>
    </Grid>
  )
}
export default Footer
