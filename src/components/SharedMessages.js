import { Box, Grid, IconButton, Stack, Typography } from "@mui/material"
import React from "react"
import { useTheme } from "@mui/material/styles"
import { useDispatch } from "react-redux"
import { UpdateSidebarType } from "../redux/slices/app"
import { CaretLeft } from "phosphor-react"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import { faker } from "@faker-js/faker"
import { SHARED_DOCS, SHARED_LINKS } from "../data"
import { DocMsg, LinkMsg } from "./Conversation/MsgTypes"

const SharedMessages = () => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

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
          <Typography variant="subtitle2">Shared Messages</Typography>
        </Stack>
      </Box>
      <Tabs
        sx={{ px: 2, pt: 2 }}
        value={value}
        onChange={handleChange}
        centered
      >
        <Tab label="Media" />
        <Tab label="Links" />
        <Tab label="Docs" />
      </Tabs>

      {/* body */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: value === 1 ? 1 : 3,
        }}
      >
        {(() => {
          switch (value) {
            case 0:
              // images
              return (
                <Grid container spacing={2}>
                  {[0, 1, 2, 3, 4, 5, 6].map((el, index) => (
                    <Grid item xs={4} key={index}>
                      <img
                        src={faker.image.avatar()}
                        alt={faker.name.fullName()}
                        style={{ width: "100%" }}
                      />
                    </Grid>
                  ))}
                </Grid>
              )

            case 1:
              //links
              return SHARED_LINKS.map((el) => <LinkMsg el={el} />)
            case 2:
              //docs
              return SHARED_DOCS.map((el) => <DocMsg el={el} />)

            default:
              break
          }
        })()}
      </Box>
    </Box>
  )
}

export default SharedMessages
