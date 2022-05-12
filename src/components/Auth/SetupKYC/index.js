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
import { signInAction } from "actions/user";
import { useNavigate } from "react-router-dom";
import botpLogo from "assets/images/logos/botp_logo.png";
import landingBg from "assets/images/backgrounds/material_landing_abstract.png";
import { descriptionValidator, nameValidator } from "common/validators/kyc";

function SetupKYC() {
  const dispatch = useDispatch();
  const dispatchSetupKyc = (bcAddress, password, name, description) =>
    dispatch(setupKycAction(username, password));
  const navigate = useNavigate();

  const [toast, setToast] = useState(null);
  const [agentName, dispatchAgentName] = useInput(nameValidator);
  const [description, dispatchDescription] = useInput(descriptionValidator);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSetupKyc = async () => {
    if (!agentName.error && !description.error) {
      setIsSubmitting(true);
      setToast(null);

      const setupKycResult = await dispatchSignIn(
        agentName.value,
        description.value
      );
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

  const onNavigateToSignUp = () => navigate("/auth/signup");

  return SetupKYCView({
    agentName, dispatchAgentName,
    description, dispatchDescription,
    isSubmitting,
    onSetupKyc,
    toast,
  });
}

function SetupKYCView({
  username,
  dispatchUsername,
  password,
  dispatchPassword,
  isShowingPassword,
  setIsShowingPassowrd,
  isSubmitting,
  onSignIn,
  onNavigateToSignUp,
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
            justifyContent: "center",
            mb: 2,
          }}
        >
          <img src={botpLogo} alt="botp logo" width="28" height="28" />
          <Typography
            variant="subtitle1"
            component="div"
            sx={{ ml: 1.5, color: "#034266", fontWeight: "bold" }}
          >
            BOTP Dashboard
          </Typography>
        </Box>
        <Divider sx={{ mb: 4 }} />
        <Typography
          variant="h4"
          component="div"
          sx={{ mb: 4, textAlign: "center" }}
        >
          Sign In
        </Typography>
        <Box sx={{ mb: 4 }}>
          <Collapse in={toast !== null}>
            {toast && (
              <Alert severity={toast.severity} sx={{ mb: 1 }}>
                {toast.description}
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
            onClick={onSignIn}
          >
            Sign in
          </LoadingButton>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Divider sx={{ mb: 2 }}>
            <Typography variant="body2" component="div">
              Don't have an account?
            </Typography>
          </Divider>
          <LoadingButton
            sx={{ width: "100%" }}
            variant="outlined"
            size="large"
            onClick={onNavigateToSignUp}
          >
            Sign Up
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SetupKYC;
