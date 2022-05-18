import { Avatar as MUIAvatar, Box, Typography } from "@mui/material";
import { default as TextAvatar } from "react-avatar";
import CameraAlt from "@mui/icons-material/CameraAlt";
import "./index.css";

function SquareAvatar({ onClick, name, size, url, updatable }) {
  const isUpdatable = updatable === undefined ? true : updatable;

  return (
    <Box
      onClick={onClick}
      sx={{
        height: size,
        width: size,
        cursor: onClick ? "pointer" : "default",
      }}
      className="squareAvatar"
    >
      {isUpdatable && (
        <div className="squareAvatarHover">
          <CameraAlt sx={{ color: "#ffffff" }} />
          <Typography
            variant="body2"
            component="div"
            sx={{ mt: 1, color: "#ffffff" }}
          >
            Choose Image
          </Typography>
        </div>
      )}
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
