import {
  Alert,
  Box,
  Button,
  Collapse,
  Divider,
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { VisibilityOff, Visibility, ArrowForward } from "@mui/icons-material";
import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SquareAvatar from "components/Common/Avatar";
import { UserInputAction } from "constants/hooks";
import useInput from "hooks/useInput";
import {
  passwordValidator,
  usernameValidator,
} from "common/validators/authentication";
import {
  setupKycAction,
  signUpAction,
  uploadAvatarFileAction,
  changeAvatarUrlAction,
} from "actions/user";
import { useNavigate } from "react-router-dom";
import { botpLogoImg, landingBg, statusSuccessImg } from "assets/images";
import { descriptionValidator, nameValidator } from "common/validators/kyc";

function SignUp() {
  const dispatch = useDispatch();
  const dispatchSignUp = (username, password) =>
    dispatch(signUpAction(username, password));
  const dispatchSetupKYC = (bcAddress, password, name, description) =>
    dispatch(setupKycAction(bcAddress, password, name, description));
  const dispatchUploadAvatarFile = (avatarFile) =>
    dispatch(uploadAvatarFileAction(avatarFile));

  const bcAddress = useSelector((state) => state.user.kyc?.bcAddress);
  const navigate = useNavigate();

  const [toast, setToast] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // Stepper
  const [activeStep, setActiveStep] = useState(2);

  const onStepBack = () => setActiveStep((previousStep) => previousStep - 1);
  const onStepNext = () => setActiveStep((previousStep) => previousStep + 1);
  // Stepper list
  // 1. Create account
  const [username, dispatchUsername] = useInput(usernameValidator);
  const [password, dispatchPassword] = useInput(passwordValidator);
  const [isShowingPassword, setIsShowingPassowrd] = useState(false);
  // 2. Setup KYC
  const [name, dispatchName] = useInput(nameValidator);
  const [description, dispatchDescription] = useInput(descriptionValidator);
  // 3. Set Avatar
  const [avatarFile, setAvatarFile] = useState(null);
  const inputFile = useRef(null);

  const onSignUp = async () => {
    if (!(username.error || password.error)) {
      setIsSubmitting(true);
      setToast(null);

      const signInResult = await dispatchSignUp(username.value, password.value);
      setIsSubmitting(false);
      if (signInResult.success) {
        onStepNext(); // Set to next step
      } else {
        setToast({
          severity: "error",
          description: signInResult.error,
        });
      }
    } else {
      dispatchUsername({ type: UserInputAction.ON_VALIDATE });
      dispatchPassword({ type: UserInputAction.ON_VALIDATE });
    }
  };

  const onSetupKYC = async () => {
    if (
      !(bcAddress === null || password.error || name.error || description.error)
    ) {
      setIsSubmitting(true);
      setToast(null);

      const setupKYCResult = await dispatchSetupKYC(
        bcAddress,
        password.value,
        name.value,
        description.value
      );
      if (setupKYCResult.success) {
        onStepNext(); // Set to next step
      } else {
        setToast({
          severity: "error",
          description: setupKYCResult.error,
        });
      }
    } else {
      dispatchName({ type: UserInputAction.ON_VALIDATE });
      dispatchDescription({ type: UserInputAction.ON_VALIDATE });
    }
  };

  const onUpdateAvatar = async () => {
    if (avatarFile) {
      setIsSubmitting(true);
      setToast(null);
      console.log(avatarFile);
      const onUploadAvatarResult = await dispatchUploadAvatarFile(avatarFile);
      console.log(onUploadAvatarResult);
      if (onUploadAvatarResult.success) {
        onStepNext(); // Set to next step
      } else {
        setToast({
          severity: "error",
          description: onUploadAvatarResult.error.error?.message,
        });
      }
    }
    setIsSubmitting(false);
  };

  const onNavigateToSignIn = () => navigate("/auth/signin");
  const onNavigateToHome = () => navigate("/");

  // Stepper list
  const stepperList = [
    {
      label: "Setup account",
      component: () =>
        CreateAccountSectionView({
          username,
          dispatchUsername,
          password,
          dispatchPassword,
          isSubmitting,
          isShowingPassword,
          setIsShowingPassowrd,
          onStepBack,
          onNavigateToSignIn,
          onSignUp,
        }),
    },
    {
      label: "Setup KYC",
      component: () =>
        SetupKYCSectionView({
          name,
          dispatchName,
          description,
          dispatchDescription,
          isSubmitting,
          onStepBack,
          onSetupKYC,
        }),
    },
    {
      label: "Setup Avatar",
      component: () =>
        UpdateAvatarSectionView({
          name,
          avatarFile,
          setAvatarFile,
          inputFile,
          isSubmitting,
          onStepBack,
          onUpdateAvatar,
        }),
    },
  ];

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
          width: "540px",
          my: 4,
          px: 4,
          py: 4,
          // border: "1px solid gray",
          borderRadius: "20px",
          boxShadow: "0px 2px 30px 0px rgb(0, 0, 0, 0.2)",
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
          <img src={botpLogoImg} alt="botp logo" width="28" height="28" />
          <Typography
            variant="body2"
            component="div"
            sx={{ ml: 1.5, color: "#034266", fontWeight: "bold" }}
          >
            BOTP Dashboard
          </Typography>
        </Box>
        <Divider sx={{ mb: 4 }} />
        {activeStep === stepperList.length ? (
          SignUpSuccessfullySectionView({ onNavigateToHome })
        ) : (
          <>
            <Typography
              variant="h4"
              component="div"
              gutterBottom
              sx={{
                textAlign: "center",
              }}
            >
              Sign Up
            </Typography>
            <Typography
              variant="subtitle1"
              component="div"
              sx={{ mb: 4, textAlign: "center" }}
            >
              Create a new BOTP Dashboard account
            </Typography>
            <Box sx={{ mb: 4 }}>
              <Stepper activeStep={activeStep}>
                {stepperList.map((ele, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  // if (isOptionalStep(index)) {
                  //   labelProps.optional = (
                  //     <Typography variant={"caption"}>Optional</Typography>
                  //   );
                  // }
                  return (
                    <Step key={ele.label} {...stepProps}>
                      <StepLabel {...labelProps}>{ele.label}</StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
            </Box>
            <Box sx={{ mb: 1 }}>
              <Collapse in={toast !== null}>
                {toast && (
                  <Alert severity={toast.severity} sx={{ mb: 1 }}>
                    {String(toast.description)}
                  </Alert>
                )}
              </Collapse>
            </Box>
            {stepperList[activeStep].component()}
          </>
        )}
      </Box>
    </Box>
  );
}

function SignUpSuccessfullySectionView({ onNavigateToHome }) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
          mb: 4,
        }}
      >
        <img
          src={statusSuccessImg}
          alt="success status"
          width="80"
          height="80"
        />
        <Typography variant="h5" component="h5" sx={{ mt: 3 }}>
          Sign up successfully!
        </Typography>
        <Typography variant="body2" component="div" sx={{ mt: 1 }}>
          Your BOTP Dashboard account is ready to go
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <LoadingButton
          variant="contained"
          size="large"
          onClick={onNavigateToHome}
          endIcon={<ArrowForward />}
        >
          Get started
        </LoadingButton>
      </Box>
    </Box>
  );
}

function CreateAccountSectionView({
  username,
  dispatchUsername,
  password,
  dispatchPassword,
  isSubmitting,
  isShowingPassword,
  setIsShowingPassowrd,
  onSignUp,
  onNavigateToSignIn,
}) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <FormControl
          error={username.showError && username.error !== null}
          sx={{ mb: 1, width: "100%" }}
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
          sx={{ mb: 1, width: "100%" }}
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
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <LoadingButton variant="text" size="large" onClick={onNavigateToSignIn}>
          Sign in
        </LoadingButton>
        <LoadingButton
          variant="contained"
          size="large"
          loading={isSubmitting}
          disabled={isSubmitting}
          onClick={onSignUp}
        >
          Next
        </LoadingButton>
      </Box>
    </Box>
  );
}

function SetupKYCSectionView({
  name,
  dispatchName,
  description,
  dispatchDescription,
  isSubmitting,
  onStepBack,
  onSetupKYC,
}) {
  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <FormControl
          error={name.showError && name.error !== null}
          sx={{ mb: 1, width: "100%" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-username" size="small">
            Agent name
          </InputLabel>
          <OutlinedInput
            id="outlined-agentname"
            type={"text"}
            value={name.value}
            onChange={(e) =>
              dispatchName({
                type: UserInputAction.ON_CHANGE,
                value: e.target.value,
              })
            }
            disabled={isSubmitting}
            label="Agent name"
            size="small"
          />
          <FormHelperText id="outlined-adornment-agentname-text">
            {name.showError ? name.error : ""}
          </FormHelperText>
        </FormControl>
        <FormControl
          error={description.showError && description.error !== null}
          sx={{ mb: 1, width: "100%" }}
          variant="outlined"
        >
          <InputLabel htmlFor="outlined-adornment-password" size="small">
            Description
          </InputLabel>
          <OutlinedInput
            id="outlined-description"
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
          />
          <FormHelperText id="outlined-adornment-description-text">
            {description.showError ? description.error : ""}
          </FormHelperText>
        </FormControl>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <LoadingButton variant="text" size="large" onClick={onStepBack}>
          Back
        </LoadingButton>
        <LoadingButton
          variant="contained"
          size="large"
          loading={isSubmitting}
          disabled={isSubmitting}
          onClick={onSetupKYC}
        >
          Next
        </LoadingButton>
      </Box>
    </Box>
  );
}

function UpdateAvatarSectionView({
  name,
  onStepBack,
  isSubmitting,
  avatarFile,
  setAvatarFile,
  inputFile,
  onUpdateAvatar,
}) {
  const avatarName = name.value.length ? name.value : "Guest";

  const onSelectAvatarFile = () => {
    inputFile.current.click();
  };

  const onFileChange = (event) => {
    if (event.target.files?.[0] !== null) {
      setAvatarFile(event.target.files[0]);
    } else {
      setAvatarFile(null);
    }
  };

  return (
    <Box sx={{ mb: 4 }}>
      <Box sx={{ mb: 4 }}>
        <Box
          sx={{
            mb: 2,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box onClick={onSelectAvatarFile} sx={{ mb: 2 }}>
            <SquareAvatar
              size={160}
              name={avatarName}
              url={avatarFile ? URL.createObjectURL(avatarFile) : null}
            />
          </Box>
          <Box sx={{ width: 250 }}>
            <Typography
              variant="caption"
              component="div"
              sx={{ textAlign: "center" }}
            >
              This avatar would be displayed in both{" "}
              <Box
                sx={{
                  display: "inline",
                  color: "#034266",
                  fontWeight: "bold",
                }}
              >
                BOTP Dashboard
              </Box>{" "}
              and{" "}
              <Box
                sx={{
                  display: "inline",
                  color: "#034266",
                  fontWeight: "bold",
                }}
              >
                BOTP Authenticator
              </Box>
            </Typography>
          </Box>
          <input
            type="file"
            accept="image/*"
            ref={inputFile}
            onChange={onFileChange}
            style={{ display: "none" }}
          ></input>
        </Box>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <LoadingButton variant="text" size="large" onClick={onStepBack}>
          Back
        </LoadingButton>
        <LoadingButton
          variant="contained"
          size="large"
          loading={isSubmitting}
          disabled={isSubmitting}
          onClick={onUpdateAvatar}
        >
          Finish setup
        </LoadingButton>
      </Box>
    </Box>
  );
}

export default SignUp;
