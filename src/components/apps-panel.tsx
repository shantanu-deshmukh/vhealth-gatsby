import React from "react"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward"
import Image from "./image"
import Hidden from "@mui/material/Hidden"
import Bar from "./bar"
import { useTheme } from "@mui/material/styles"
import { useMediaQuery } from "@mui/material"

const AppsPanel = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"))

  const handleDownloadClick = () => {
    console.log("Download button clicked")
    alert("Download feature coming soon!")
  }

  return (
    <div id="apps">
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
              fontSize: isMobile ? "1.75rem" : "2.125rem",
              marginBottom: 10,
            }}
          >
            Download our mobile apps
          </Typography>
          <Bar />
          <Typography
            variant="subtitle1"
            style={{
              marginBottom: 30,
              marginTop: 20,
              fontSize: isMobile ? "1rem" : "1.25rem",
            }}
          >
            Our dedicated patient engagement app and web portal allow you to
            access information instantaneously (no tedious form, long calls, or
            administrative hassle) and securely
          </Typography>
          <Button
            variant="outlined"
            color="primary"
            size={isMobile ? "medium" : "large"}
            endIcon={<ArrowDownwardIcon />}
            onClick={handleDownloadClick}
          >
            Download
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
              <Image
                alt="Virtual Healthcare for you"
                filename="apps-panel-image.png"
              />
            </div>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  )
}

export default AppsPanel
