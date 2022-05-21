import { Box, Typography } from "@mui/material";

function Identity() {
  return IdentityView();
}

function IdentityView() {
  return (
    <Box sx={{ py: 4, pl: 4 }}>
      <Typography variant="h5" sx={{ mb: 2 }}>
        Lookup User Identity
      </Typography>
      <Box sx={{ display: "flex" }}></Box>
    </Box>
  );
}

export default Identity;
