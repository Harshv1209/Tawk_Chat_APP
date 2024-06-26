import { Box, Stack } from "@mui/material"
import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import Message from "./Message"

const Conversation = () => {
  return (
    <Stack sx={{ width: "auto", height: "100%", maxHeight: "100vh" }}>
      {/* chat header */}
      <Header />
      {/* msg */}
      <Box
        width={"100%"}
        sx={{ flexGrow: 1, height: "100%", overflow: "scroll" }}
      >
        <Message menu={true} />
      </Box>
      {/* chat footer */}
      <Footer />
    </Stack>
  )
}

export default Conversation
