import React from "react"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward"
import Image from "./image"
import Hidden from "@material-ui/core/Hidden"

const AppsPanel = () => {
  return (
    <Grid container spacing={3} style={{ minHeight: 500 }}>
      <Grid
        item={true}
        xs={12}
        sm={6}
        container
        direction="column"
        justify="center"
        alignItems="flex-start"
        style={{ padding: 10 }}
      >
        <Typography variant="h4" color="inherit" style={{ marginBottom: 20 }}>
          Download our mobile apps
        </Typography>

        <Typography variant="subtitle1" style={{ marginBottom: 30 }}>
          Our dedicated patient engagement app and web portal allow you to
          access information instantaneously (no tedious form, long calls, or
          administrative hassle) and securely
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          endIcon={<ArrowDownwardIcon />}
        >
          Download
        </Button>
      </Grid>

      <Hidden xsDown>
        <Grid
          item={true}
          sm={6}
          container
          direction="column"
          justify="center"
          alignItems="flex-start"
          style={{ padding: 10 }}
        >
          <div style={{ width: "100%" }}>
            <Image
              alt="Virtual Healthcare for you"
              filename="apps-panel-image.png"
            />
          </div>
        </Grid>
      </Hidden>
    </Grid>
  )
}
export default AppsPanel
