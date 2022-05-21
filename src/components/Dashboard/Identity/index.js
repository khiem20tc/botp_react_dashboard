import { Search } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Box,
  Collapse,
  FormControl,
  FormHelperText,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { statusFailedImg, statusSuccessImg } from "assets/images";
import { UserInputAction } from "constants/hooks";
import useInput from "hooks/useInput";
import { useState } from "react";

function Identity() {
  return IdentityView();
}

function IdentityView() {
  const [userBcAddress, dispatchUserBcAddress] = useInput(
    (_) => null,
    "0x970D38FB11B204a071E238436530019Fb97087FB"
  );
  const [fullname, dispatchFullname] = useInput((_) => null, "Thinh Doan");
  const [address, dispatchAddress] = useInput(
    (_) => null,
    "District 10, Ho Chi Minh City"
  );
  const [age, dispatchAge] = useInput((_) => null, "22");
  const [gender, dispatchGender] = useInput((_) => null, "Male");
  const [debitor, dispatchDebitor] = useInput((_) => null, "0912345678");
  const [toast, setToast] = useState(null);
  const [identityStatus, setIdentityStatus] = useState(true);

  const onClickIdentityStatus = () => setIdentityStatus((state) => !state);
  const identityStatusSection = (isMatched, onClickIdentityStatus) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: 4,
      }}
      onClick={onClickIdentityStatus}
    >
      <Box sx={{ mb: 2 }}>
        <img
          src={isMatched ? statusSuccessImg : statusFailedImg}
          alt="success"
          width="80"
          height="80"
        />
      </Box>
      <Typography
        variant="h5"
        sx={{
          mb: 1,
          fontWeight: "bold",
          color: (theme) =>
            isMatched ? theme.palette.success.main : theme.palette.error.main,
        }}
      >
        {isMatched ? "User found" : "User not found"}
      </Typography>
      <Typography variant="body2">
        {isMatched
          ? "Found user information."
          : "Cound not find your user information."}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ py: 4, pl: 4 }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 2, mr: 4, mb: 4 }}>
          <Box sx={{ mb: 4 }}>
            <Typography variant="h5" sx={{ mb: 1 }}>
              Lookup User Identity
            </Typography>
            <Typography variant="body2">Find your user identity.</Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Box sx={{ mb: 1 }}>
              <Collapse in={toast !== null}>
                {toast && (
                  <Alert severity={toast.severity} sx={{ mb: 1 }}>
                    {String(toast.description)}
                  </Alert>
                )}
              </Collapse>
            </Box>
            <FormControl
              error={userBcAddress.showError && userBcAddress.error !== null}
              sx={{ mb: 1, width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-agent-bc-address" size="small">
                User blockchain address
              </InputLabel>
              <OutlinedInput
                id="outlined-agent-bc-address"
                type={"text"}
                value={userBcAddress.value}
                onChange={(e) =>
                  dispatchUserBcAddress({
                    type: UserInputAction.ON_CHANGE,
                    value: e.target.value,
                  })
                }
                label="User blockchain address"
                size="small"
              />
              <FormHelperText id="outlined-adornment-user-bc-address-text">
                {userBcAddress.showError ? userBcAddress.error : ""}
              </FormHelperText>
            </FormControl>
          </Box>
          <LoadingButton
            sx={{ width: "100%" }}
            variant="contained"
            size="large"
            onClick={() => {}}
            endIcon={<Search />}
          >
            Lookup Identity
          </LoadingButton>
        </Box>
        <Box
          component="div"
          sx={{ flex: 3, mr: 4, overflow: "auto", height: "100%" }}
        >
          {identityStatusSection(identityStatus, onClickIdentityStatus)}
          <Box sx={{ flex: 1, mb: 4 }}>
            <Box sx={{ mb: 2 }}>
              <Typography variant="body2" sx={{ mb: 2 }}>
                User information
              </Typography>
              <FormControl
                error={fullname.showError && fullname.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-fullname-address" size="small">
                  Fullname
                </InputLabel>
                <OutlinedInput
                  id="outlined-fullname-address"
                  type={"text"}
                  value={fullname.value}
                  onChange={(e) =>
                    dispatchFullname({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Fullname"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-fullname-address-text">
                  {fullname.showError ? fullname.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={address.showError && address.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-address-address" size="small">
                  Address
                </InputLabel>
                <OutlinedInput
                  id="outlined-address-address"
                  type={"text"}
                  value={address.value}
                  onChange={(e) =>
                    dispatchAddress({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Address"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-address-address-text">
                  {address.showError ? address.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={age.showError && age.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-age-address" size="small">
                  Age
                </InputLabel>
                <OutlinedInput
                  id="outlined-age"
                  type={"text"}
                  value={age.value}
                  onChange={(e) =>
                    dispatchAge({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Age"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-age-text">
                  {age.showError ? age.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={gender.showError && gender.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-gender-address" size="small">
                  Gender
                </InputLabel>
                <OutlinedInput
                  id="outlined-gender"
                  type={"text"}
                  value={gender.value}
                  onChange={(e) =>
                    dispatchGender({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Gender"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-gender-text">
                  {gender.showError ? gender.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={debitor.showError && debitor.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-debitor-address" size="small">
                  Phone number
                </InputLabel>
                <OutlinedInput
                  id="outlined-debitor"
                  type={"text"}
                  value={gender.value}
                  onChange={(e) =>
                    dispatchDebitor({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Phone number"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-debitor-text">
                  {gender.showError ? gender.error : ""}
                </FormHelperText>
              </FormControl>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Identity;
