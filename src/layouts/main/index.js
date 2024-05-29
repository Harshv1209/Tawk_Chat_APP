import { Container, Stack } from "@mui/material"
import React from "react"
import { Outlet } from "react-router-dom"
import Logo from "../../assets/Images/logo.ico"

const MainLayout = () => {
  return (
    <>
      <Container sx={{ mt: 5 }} maxWidth="sm">
        <Stack spacing={5}>
          <Stack sx={{ width: "100%" }} alignItems={"center"}>
            <img style={{ width: 120, height: 120 }} src={Logo} alt="logo" />
          </Stack>
        </Stack>
        {/* <div>Main Layout</div> */}

        <Outlet />
      </Container>
    </>
  )
}

export default MainLayout
