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
import { setupKycAction } from "actions/user";
import { useNavigate } from "react-router-dom";
import botpLogo from "assets/images/logos/botp_logo.png";
import landingBg from "assets/images/backgrounds/material_landing_abstract.png";
import { descriptionValidator, nameValidator } from "common/validators/kyc";

function SetupKYC() {
  const dispatch = useDispatch();
  const dispatchSetupKyc = (bcAddress, password, name, description) =>
    dispatch(setupKycAction(bcAddress, password, name, description));
  const navigate = useNavigate();

  const [toast, setToast] = useState(null);
  const [agentname, dispatchAgentname] = useInput(nameValidator);
  const [description, dispatchDescription] = useInput(descriptionValidator);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSetupKyc = async () => {
    if (!agentname.error && !description.error) {
      setIsSubmitting(true);
      setToast(null);

      const setupKycResult = await dispatchSetupKyc(); // TODO
      if (setupKycResult.success) {
        // Now agent can use the dashboard
        navigate("/");
      } else {
        setIsSubmitting(false);
        setToast({
          severity: "error",
          description: String(setupKycResult.error),
        });
      }
    }
  };

  return SetupKYCView({
    agentname,
    dispatchAgentname,
    description,
    dispatchDescription,
    isSubmitting,
    onSetupKyc,
    toast,
  });
}

function SetupKYCView({
  agentname,
  dispatchAgentname,
  description,
  dispatchDescription,
  isSubmitting,
  onSetupKyc,
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
          gutterBottom
          sx={{ textAlign: "center" }}
        >
          Setup KYC
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          sx={{ mb: 4, textAlign: "center" }}
        >
          Update your agent's information to use our dashboard
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
            error={agentname.showError && agentname.error !== null}
            sx={{ my: 1, width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-username" size="small">
              Agent name
            </InputLabel>
            <OutlinedInput
              id="outlined-username"
              type={"text"}
              value={agentname.value}
              onChange={(e) =>
                dispatchAgentname({
                  type: UserInputAction.ON_CHANGE,
                  value: e.target.value,
                })
              }
              disabled={isSubmitting}
              label="Agentname"
              size="small"
            />
            <FormHelperText id="outlined-adornment-username-text">
              {agentname.showError ? agentname.error : ""}
            </FormHelperText>
          </FormControl>
          <FormControl
            error={description.showError && description.error !== null}
            sx={{ my: 1, width: "100%" }}
            variant="outlined"
          >
            <InputLabel htmlFor="outlined-adornment-password" size="small">
              Description
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type="text"
              value={description.value}
              onChange={(e) =>
                dispatchDescription({
                  type: UserInputAction.ON_CHANGE,
                  value: e.target.value,
                })
              }
              disabled={isSubmitting}
              label="Description"
              size="small"
              fullWidth
              multiline
              minRows={2}
            />
            <FormHelperText id="outlined-adornment-password-text">
              {description.showError ? description.error : ""}
            </FormHelperText>
          </FormControl>
          <LoadingButton
            sx={{ width: "100%", mt: 1 }}
            variant="contained"
            size="large"
            loading={isSubmitting}
            disabled={isSubmitting}
            onClick={onSetupKyc}
          >
            Setup KYC
          </LoadingButton>
        </Box>
      </Box>
    </Box>
  );
}

export default SetupKYC;
