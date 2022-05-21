import { Box, Typography } from "@mui/material";

function Manual() {
  return ManualView();
}

function ManualView() {
  return (
    <Box sx={{ py: 4, pl: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Your Manual
      </Typography>
      <Box sx={{ display: "flex" }}></Box>
    </Box>
  );
}

export default Manual;
