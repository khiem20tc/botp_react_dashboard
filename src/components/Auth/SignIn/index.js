import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import {
  passwordValidator,
  usernameValidator,
} from "common/validators/authentication";
import { UserInputAction } from "constants/hooks";
import useInput from "hooks/useInput";
import { useState } from "react";
import "./index.css";
import { useDispatch } from "react-redux";
import { signInAction } from "actions/user";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const dispatchSignIn = (username, password) =>
    dispatch(signInAction(username, password));
  const navigate = useNavigate();

  const [username, dispatchUsername] = useInput(usernameValidator);
  const [password, dispatchPassword] = useInput(passwordValidator);
  const [isShowingPassword, setIsShowingPassowrd] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSignIn = async () => {
    if (!username.error && !password.error) {
      setIsSubmitting(true);
      const signInResult = await dispatchSignIn(username.value, password.value);
      console.log(signInResult);
      if (signInResult.success) {
        navigate("/");
      } else {
        setIsSubmitting(false);
      }
    }
  };

  return SignInView({
    username,
    dispatchUsername,
    password,
    dispatchPassword,
    isShowingPassword,
    setIsShowingPassowrd,
    isSubmitting,
    onSignIn,
  });
}

function SignInView({
  username,
  dispatchUsername,
  password,
  dispatchPassword,
  isShowingPassword,
  setIsShowingPassowrd,
  isSubmitting,
  onSignIn,
}) {
  return (
    <div className="signIn">
      <div className="signInWrapper">
        <Typography variant="subtitle1" gutterBottom component="div">
          BOTP Dashboard
        </Typography>
        <Typography variant="h4" gutterBottom component="div">
          Sign In
        </Typography>
        <FormControl
          error={username.showError ? username.error : ""}
          sx={{ m: 1, width: "100%" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-username">Username</InputLabel>
          <OutlinedInput
            id="outlined-username"
            type={"text"}
            value={username.value}
            onChange={(e) =>
              dispatchUsername({
                type: UserInputAction.ON_CHANGE,
                value: e.target.value,
              })
            }
            onBlur={(e) =>
              dispatchUsername({ type: UserInputAction.ON_VALIDATE })
            }
            label="Username"
          />
          <FormHelperText id="outlined-adornment-username-text">
            {username.showError ? username.error : ""}
          </FormHelperText>
        </FormControl>
        <FormControl
          error={password.showError ? password.error : ""}
          sx={{ m: 1, width: "100%" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
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
            onBlur={(e) =>
              dispatchPassword({ type: UserInputAction.ON_VALIDATE })
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
            {password.showError ? password.error : ""}
          </FormHelperText>
        </FormControl>
        <div>
          <LoadingButton
            variant="contained"
            size="large"
            loading={isSubmitting}
            disabled={isSubmitting}
            onClick={onSignIn}
          >
            Sign in
          </LoadingButton>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
