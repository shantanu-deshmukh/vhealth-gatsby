import React from "react"
import Box from "@material-ui/core/Box"
import { Divider } from "@material-ui/core"
import makeStyles from "@material-ui/styles/makeStyles"

const useStyles = makeStyles(theme => ({
  divider: {
    background: "#000",
    height: 2,
    marginTop: 10,
    marginBottom: 10,
  },
}))

const Bar = () => {
  const classes = useStyles()

  return (
    <Box style={{ width: 80 }}>
      <Divider
        classes={{ root: classes.divider }}
        // style={{ height: 3, margin: 10, color: "#000" }}
      />
    </Box>
  )
}

export default Bar
