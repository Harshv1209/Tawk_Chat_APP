import { Box, IconButton, Stack, Typography } from "@mui/material"
import React from "react"
import { useTheme } from "@mui/material/styles"
import { useDispatch } from "react-redux"
import { UpdateSidebarType } from "../redux/slices/app"
import { CaretLeft } from "phosphor-react"
import Message from "./Conversation/Message"

const StarredMessages = () => {
  const theme = useTheme()
  const dispatch = useDispatch()

  return (
    <Box
      sx={{
        width: 320,
        height: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F8FAFF"
              : theme.palette.background.default,
        }}
      >
        <Stack
          sx={{ p: 2 }}
          direction={"row"}
          alignItems={"center"}
          spacing={3}
        >
          <IconButton
            onClick={() => {
              dispatch(UpdateSidebarType("CONTACT"))
            }}
          >
            <CaretLeft />
          </IconButton>
          <Typography variant="subtitle2">Starred Messages</Typography>
        </Stack>
      </Box>

      {/* body */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 3,
        }}
        spacing={3}
      >
        <Message menu={false} />
      </Box>
    </Box>
  )
}

export default StarredMessages
