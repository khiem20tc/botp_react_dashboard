import { Avatar as MUIAvatar, Box } from "@mui/material";
import { default as TextAvatar } from "react-avatar";

function SquareAvatar({ name, size, url }) {
  return (
    <Box sx={{ height: size, width: size }}>
      {url ? (
        <MUIAvatar
          variant="square"
          src={url} // Display image from blob
          alt={name}
          sx={{ height: size, width: size }}
        />
      ) : (
        <TextAvatar name={`${name.split(" ")[0][0]}$`} size={size} />
      )}
    </Box>
  );
}

export default SquareAvatar;
