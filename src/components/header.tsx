import PropTypes from "prop-types"
import React from "react"

import AppBar from "@mui/material/AppBar"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import Button from "@mui/material/Button"
import { styled } from "@mui/material/styles"
import IconButton from "@mui/material/IconButton"
import MenuIcon from "@mui/icons-material/Menu"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTheme } from "@mui/material/styles"
import Drawer from "@mui/material/Drawer"
import ListItem from "@mui/material/ListItem"
import ListItemText from "@mui/material/ListItemText"
import List from "@mui/material/List"

interface Props {
  companyName: string
}

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  color: "#233348",
  backgroundColor: "#FFF",
}))

const StyledToolbar = styled(Toolbar)({
  flexWrap: "wrap",
})

const ToolbarTitle = styled(Typography)({
  flexGrow: 1,
})

const StyledDrawerList = styled(List)({
  width: 250,
})

const DrawerToggle = styled(IconButton)({
  padding: 20,
})

const Header = ({ companyName }: Props) => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))

  const handleDrawerOpen = () => {
    setOpen(true)
  }
  const handleDrawerClose = () => {
    setOpen(false)
  }

  const handleNavigation = (link: string) => {
    console.log(`Navigating to: ${link}`)
    // Close drawer if open
    setOpen(false)

    // Handle navigation logic
    if (link === "#" || link === "") {
      // Scroll to top for home link
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else if (link.startsWith("#")) {
      // Remove the # for querySelector
      const selector = link.substring(1)
      if (selector) {
        const element = document.getElementById(selector)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
        } else {
          console.warn(`Element with id "${selector}" not found`)
        }
      }
    }
  }

  const navLinks = [
    { displayText: "Home", link: "#" },
    { displayText: "Services", link: "#services" },
    { displayText: "Apps", link: "#apps" },
    { displayText: "Testimonials", link: "#testimonials" },
    { displayText: "Blog", link: "#blog" },
  ]

  return (
    <React.Fragment>
      <StyledAppBar position="static" elevation={0}>
        <StyledToolbar>
          {isMobile && (
            <DrawerToggle
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
            >
              <MenuIcon />
            </DrawerToggle>
          )}
          <ToolbarTitle variant="h6" color="inherit">
            vHealth
          </ToolbarTitle>

          {!isMobile && (
            <>
              {navLinks.map(item => (
                <Button
                  color="inherit"
                  key={item.displayText}
                  onClick={() => handleNavigation(item.link)}
                >
                  {item.displayText}
                </Button>
              ))}
            </>
          )}
        </StyledToolbar>
      </StyledAppBar>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={handleDrawerClose}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <StyledDrawerList>
          {navLinks.map((item, index) => (
            <ListItem
              button
              key={item.displayText}
              onClick={() => handleNavigation(item.link)}
            >
              <ListItemText primary={item.displayText} />
            </ListItem>
          ))}
        </StyledDrawerList>
      </Drawer>
    </React.Fragment>
  )
}

Header.propTypes = {
  companyName: PropTypes.string,
}

Header.defaultProps = {
  companyName: `vHealth`,
}

export default Header
