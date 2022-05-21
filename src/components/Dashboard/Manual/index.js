import { Box, Typography } from "@mui/material";

function Manual() {
  return ManualView();
}

function ManualView() {
  return (
    <Box sx={{ py: 4, pl: 4 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h5" sx={{ mb: 1 }}>
          BOTP Manual
        </Typography>
        <Typography variant="body2">
          This manual would describe how setup and implement a system that can
          interact with BOTP APIs and also use our services.
        </Typography>
      </Box>
      <Typography variant="h6">1. Setup QR</Typography>
      <Box sx={{ display: "flex" }}></Box>
    </Box>
  );
}

export default Manual;
