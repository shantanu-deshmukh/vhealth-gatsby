import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { makeStyles } from "@material-ui/core/styles"

interface Props {
  companyName: string
}

const useStyles = makeStyles(theme => ({
  appBar: {
    color: "#233348",
    backgroundColor: "#FFF",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
}))

const Header = ({ companyName }: Props) => {
  const classes = useStyles()
  return (
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          vHealth
        </Typography>
        <Button color="inherit">Home</Button>
        <Button color="inherit">Services</Button>
        <Button color="inherit">Apps</Button>
        <Button color="inherit">Testimonials</Button>
        <Button color="inherit">Blog</Button>
      </Toolbar>
    </AppBar>

    // <header
    //   style={{
    //     background: `rebeccapurple`,
    //     marginBottom: `1.45rem`,
    //   }}
    // >
    //   <div
    //     style={{
    //       margin: `0 auto`,
    //       maxWidth: 960,
    //       padding: `1.45rem 1.0875rem`,
    //     }}
    //   >
    //     <h1 style={{ margin: 0 }}>
    //       <Link
    //         to="/"
    //         style={{
    //           color: `white`,
    //           textDecoration: `none`,
    //         }}
    //       >
    //
    //       </Link>
    //     </h1>
    //   </div>
    // </header>
  )
}

Header.propTypes = {
  companyName: PropTypes.string,
}

Header.defaultProps = {
  companyName: `vHealth`,
}

export default Header
