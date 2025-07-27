import React from "react"
import useScrollTrigger from "@mui/material/useScrollTrigger"
import { styled } from "@mui/material/styles"
import Zoom from "@mui/material/Zoom"
import Fab from "@mui/material/Fab"
import GetAppIcon from "@mui/icons-material/GetApp"
import Link from "@mui/material/Link"

const StyledFab = styled(Fab)(({ theme }) => ({
  position: "fixed",
  bottom: theme.spacing(2),
  right: theme.spacing(2),
}))

const FabDownload = () => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <Link
        href="https://github.com/shantanu-deshmukh/vhealth-gatsby"
        target="_blank"
        rel="noopener noreferrer"
        sx={{ textDecoration: "none" }}
      >
        <StyledFab color="secondary" size="small">
          <GetAppIcon />
        </StyledFab>
      </Link>
    </Zoom>
  )
}
export default FabDownload
