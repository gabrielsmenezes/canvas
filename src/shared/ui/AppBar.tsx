"use client"

import {Avatar, Box, Button, Stack, Typography, useTheme} from "@mui/material";

export default function AppBar() {

  const theme = useTheme()

  return (
    <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        height="70px"
        borderBottom="1px solid"
        borderColor={theme.palette.primary.main}
        paddingX={4}
        sx={{
          backgroundColor: theme.palette.background.paper,
        }}
    >
      <Stack direction="row" spacing={1} alignItems={"center"}>
        <Box
            component="img"
            src="/bee-logo.png"
            alt="Example"
            sx={{
              width: 50,
              height: 50,
              borderRadius: 0,
              boxShadow: 0,
              objectFit: "cover",
            }}
        />
        <Box>
          <Typography variant="h5" color={theme.palette.primary.main}>
            Bee Experience
          </Typography>
        </Box>
        <Box
            component="img"
            src="/bee-logo.png"
            alt="Example"
            sx={{
              width: 50,
              height: 50,
              borderRadius: 0,
              boxShadow: 0,
              objectFit: "cover",
            }}
        />
      </Stack>
      <Stack direction="row" alignItems={"center"} gap={2}>
        <Button>
          <Typography variant="h6">Experiences Dashboard</Typography>
          </Button>
        <Button>
          <Typography variant="h6">Profile</Typography>
        </Button>
        <Button variant="contained">
          <Typography variant="h6">Add New Experience</Typography>
        </Button>
        <Avatar  sx={{width: 50, height: 50, bgcolor: theme.palette.primary.main}}/>
      </Stack>
    </Stack>
  )
}