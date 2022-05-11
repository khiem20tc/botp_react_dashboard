import {
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  passwordValidator,
  usernameValidator,
} from "common/validators/authentication";
import { UserInputAction } from "constants/hooks";
import useInput from "hooks/useInput";
import { useState } from "react";

function SignIn() {
  return SignInView();
}

function SignInView() {
  const [password, dispatchPassword] = useInput(passwordValidator);
  const [isShowingPassword, setIsShowingPassowrd] = useState(false);

  return (
    <>
      <FormControl sx={{ m: 1, width: "25ch" }} variant="filled">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={isShowingPassword ? "text" : "password"}
          value={password.value}
          onChange={(e) =>
            dispatchPassword({
              type: UserInputAction.ON_CHANGE,
              value: e.target.value,
            })
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setIsShowingPassowrd(!isShowingPassword)}
                onMouseDown={(e) => e.preventDefault()}
                edge="end"
              >
                {isShowingPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        <FormHelperText id="outlined-adornment-password-text">
          {password.error}
        </FormHelperText>
      </FormControl>
    </>
  );
}

export default SignIn;
