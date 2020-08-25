import React from "react"
import useScrollTrigger from "@material-ui/core/useScrollTrigger"
import makeStyles from "@material-ui/core/styles/makeStyles"
import Zoom from "@material-ui/core/Zoom"
import Fab from "@material-ui/core/Fab"
import GetAppIcon from "@material-ui/icons/GetApp"

const useStyles = makeStyles(theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}))

const FabDownload = () => {
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })

  return (
    <Zoom in={trigger}>
      <Fab
        className={classes.fab}
        color="secondary"
        size="small"
        href="https://github.com/shantanu-deshmukh/vhealth-gatsby"
        target="_blank"
      >
        <GetAppIcon />
      </Fab>
    </Zoom>
  )
}
export default FabDownload
