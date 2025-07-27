import React from "react"
import Box from "@mui/material/Box"
import { Divider } from "@mui/material"
import { styled } from "@mui/material/styles"

const StyledDivider = styled(Divider)({
  background: "#000",
  height: 2,
  marginTop: 10,
  marginBottom: 10,
})

const Bar = () => {
  return (
    <Box style={{ width: 80 }}>
      <StyledDivider />
    </Box>
  )
}

export default Bar
