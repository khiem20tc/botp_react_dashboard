import {
  Alert,
  Box,
  Collapse,
  Divider,
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
import { useDispatch } from "react-redux";
import { signUpAction } from "actions/user";
import { useNavigate } from "react-router-dom";
import botpLogo from "assets/images/logos/botp_logo.png";
import landingBg from "assets/images/backgrounds/material_landing_abstract.png";

function SignUp() {
  const dispatch = useDispatch();
  const dispatchSignUp = (username, password) =>
    dispatch(signUpAction(username, password));
  const navigate = useNavigate();

  const [toast, setToast] = useState(null);
  const [username, dispatchUsername] = useInput(usernameValidator);
  const [password, dispatchPassword] = useInput(passwordValidator);
  const [isShowingPassword, setIsShowingPassowrd] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSignUp = async () => {
    if (!username.error && !password.error) {
      setIsSubmitting(true);
      setToast(null);

      const signInResult = await dispatchSignUp(username.value, password.value);
      if (signInResult.success) {
        navigate("/");
      } else {
        setIsSubmitting(false);
        setToast({
          severity: "error",
          description: signInResult.error,
        });
      }
    }
  };

  const onNavigateToSignIn = () => navigate("/auth/signin");

  return SignUpView({
    username,
    dispatchUsername,
    password,
    dispatchPassword,
    isShowingPassword,
    setIsShowingPassowrd,
    isSubmitting,
    onSignUp,
    onNavigateToSignIn,
    toast,
  });
}

function SignUpView({
  username,
  dispatchUsername,
  password,
  dispatchPassword,
  isShowingPassword,
  setIsShowingPassowrd,
  isSubmitting,
  onSignUp,
  onNavigateToSignIn,
  toast,
}) {
  return (
    <Box
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        height: "100vh",
        backgroundImage: `url(${landingBg})`,
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        imageRendering: "-webkit-optimize-contrast",
      }}
    >
      <Box
        sx={{
          width: "480px",
          my: 4,
          px: 4,
          py: 4,
          // border: "1px solid gray",
          borderRadius: "20px",
          boxShadow: "0px 2px 30px 0px rgb(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            mb: 6,
          }}
        >
          <img src={botpLogo} alt="botp logo" width="30" height="30" />
          <Typography
            variant="h6"
            component="h6"
            sx={{ ml: 2, color: "#034266", fontWeight: "bold" }}
          >
            BOTP Dashboard
          </Typography>
        </Box>
        <Typography
          variant="h4"
          component="h4"
          sx={{ mb: 4, fontWeight: "bold" }}
        >
          Sign Up
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Collapse in={toast !== null}>
            {toast && (
              <Alert severity={toast.severity} sx={{ mb: 1 }}>
                {String(toast.description)}
              </Alert>
            )}
          </Collapse>
          <FormControl
            error={username.showError && username.error !== null}
            sx={{ my: 1, width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-username" size="small">
              Username
            </InputLabel>
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
              disabled={isSubmitting}
              label="Username"
              size="small"
            />
            <FormHelperText id="outlined-adornment-username-text">
              {username.showError ? username.error : ""}
            </FormHelperText>
          </FormControl>
          <FormControl
            error={password.showError && password.error !== null}
            sx={{ my: 1, width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password" size="small">
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
              disabled={isSubmitting}
              label="Password"
              size="small"
              fullWidth
            />
            <FormHelperText id="outlined-adornment-password-text">
              {password.showError ? password.error : ""}
            </FormHelperText>
          </FormControl>
          <LoadingButton
            sx={{ width: "100%", mt: 1 }}
            variant="contained"
            size="large"
            loading={isSubmitting}
            disabled={isSubmitting}
            onClick={onSignUp}
          >
            Sign Up
          </LoadingButton>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Divider sx={{ mb: 2 }}>
            <Typography variant="body2" component="div">
              Already had an account?
            </Typography>
          </Divider>
          <LoadingButton
            sx={{ width: "100%" }}
            variant="outlined"
            size="large"
            onClick={onNavigateToSignIn}
          >
            Sign In
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SignUp;
