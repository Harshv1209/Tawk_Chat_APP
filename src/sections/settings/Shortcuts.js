import React from "react"
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Stack,
  Typography,
} from "@mui/material"
import Slide from "@mui/material/Slide"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})
const list = [
  {
    key: 0,
    title: "Mark as Unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 1,
    title: "Mute",
    combination: ["Cmd", "Shift", "M"],
  },
  {
    key: 2,
    title: "Archive Chat",
    combination: ["Cmd", "Shift", "E"],
  },
  {
    key: 3,
    title: "Delete Chat",
    combination: ["Cmd", "Shift", "D"],
  },
  {
    key: 4,
    title: "Pin Chat",
    combination: ["Cmd", "Shift", "P"],
  },
  {
    key: 0,
    title: "Mark as Unread",
    combination: ["Cmd", "Shift", "U"],
  },
  {
    key: 5,
    title: "Search",
    combination: ["Cmd", "F"],
  },
  {
    key: 6,
    title: "Search Chat",
    combination: ["Cmd", "Shift", "F"],
  },
  {
    key: 7,
    title: "New Chat",
    combination: ["Cmd", "N"],
  },
  {
    key: 8,
    title: "Next Chat",
    combination: ["Cmd", "Tab"],
  },
  {
    key: 9,
    title: "Previous Chat",
    combination: ["Cmd", "Shift", "Tab"],
  },
  {
    key: 10,
    title: "New Group",
    combination: ["Cmd", "Shift", "N"],
  },
  {
    key: 11,
    title: "Profile & About",
    combination: ["Cmd", "P"],
  },
  {
    key: 12,
    title: "Increase Speed of Voice Message",
    combination: ["Shift", "."],
  },
  {
    key: 13,
    title: "Decrease Speed of Voice Message",
    combination: ["Shift", "."],
  },
  {
    key: 14,
    title: "Settings",
    combination: ["Shift", "S"],
  },
  {
    key: 15,
    title: "Emoji Panel",
    combination: ["Cmd", "E"],
  },
  {
    key: 14,
    title: "Sticker Panel",
    combination: ["Cmd", "S"],
  },
]

const Shortcuts = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="md"
        open={open}
        handleClose={handleClose}
        keepMounted
        TransitionComponent={Transition}
        sx={{ p: 4 }}
      >
        <DialogTitle>Keyboard Shortcuts</DialogTitle>
        <DialogContent sx={{ mt: 4 }}>
          <Grid container spacing={3}>
            {list.map(({ key, title, combination }) => (
              <Grid key={key} container item xs={6}>
                <Stack
                  sx={{ width: "100%" }}
                  justifyContent={"space-between"}
                  spacing={3}
                  alignItems={"center"}
                  direction={"row"}
                >
                  <Typography variant="caption" sx={{ fontSize: 14 }}>
                    {title}
                  </Typography>
                  <Stack spacing={2} direction={"row"}>
                    {combination.map((el) => {
                      return (
                        <Button
                          disabled
                          variant="contained"
                          sx={{ color: "#212121" }}
                        >
                          {el}
                        </Button>
                      )
                    })}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default Shortcuts
