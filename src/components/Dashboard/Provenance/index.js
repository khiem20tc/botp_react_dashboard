import { Launch, Search } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Alert,
  Box,
  Collapse,
  Divider,
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

function Provenance() {
  return ProvenanceView();
}

function ProvenanceView() {
  const [agentBcAddress, dispatchAgentBcAddress] = useInput(
    (_) => null,
    "0x7762F8119d401067C60ce2BEbf03F78f78860abB"
  );
  const [userBcAddress, dispatchUserBcAddress] = useInput(
    (_) => null,
    "0x970D38FB11B204a071E238436530019Fb97087FB"
  );
  const [secretId, dispatchSecretId] = useInput(
    (_) => null,
    "62870963a6b74a00168dcfc2"
  );
  const [transactionId, dispatchTransactionId] = useInput(
    (_) => null,
    "0xf7797dbfceb8bd7a07761c28fa789084c87f2b1a1bb874290d33e660c40cc652"
  );
  const [encryptedMessage, dispatchEncryptedMessage] = useInput(
    (_) => null,
    "eyJpdiI6ImMzNDVlODEyMTlmMWU3YmE3MjQ0Mzc0NzZmZjdhM2ZiIiwiZXBoZW1QdWJsaWNLZXkiOiIwNGVkZGNhZTFjNDIxZjZmMWMxMzMzNWViMmI5MzBiNzU1MDg5ZjFhOGIyOGY1NTg5OWI3NmJjMzBiYWQ2MzMxODVhMzcxYTU0NDdlNjEyYzZiYWFjNGJmZWI2ZWVhYjQ2ZTM5ZDI4OGJhMTE1YzdkOWI4ZjNkMGY1OWYyZGU5YTJiIiwiY2lwaGVydGV4dCI6IjA4NTA2NmM1Mjg1MjAyMDg4MTg5YjU4YjEwNjNjMmI1IiwibWFjIjoiMjlmZTFlNmY2YTQ2YjgzYzIxMTY3MTE0YzQ0ZTAzOGJmODhhM2QwNjg0OWZlZmFhZmVhZDljOWZmMGJjNTEzYiJ9"
  );
  const [signature, dispatchSignature] = useInput(
    (_) => null,
    "0x4c1e8808c84e0680c7d7d7276c62a1659509bd3fcd45b073b316e06369501a976e85433bb297546e91a26f6bd4018548873cacdae4422df95717186df716e57c1b"
  );
  const [explorerId1] = useInput(
    (_) => null,
    "0x0026951a2c1dbe69713d8bfe40e6c749ad58c33512196834b69d366928618dce"
  );
  const [explorerId2] = useInput(
    (_) => null,
    "0x8e9b2ec73b95e09db7a13c64bd30beb7b38faba3bfc8ca96f82aa3d3d343a054"
  );
  const [toast] = useState(null);
  const [provenanceStatus, setProvenanceStatus] = useState(true);

  const onClickProvenanceStatus = () => setProvenanceStatus((state) => !state);
  const provenanceStatusSection = (isMatched, onClickProvenanceStatus) => (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        mb: 4,
      }}
      onClick={onClickProvenanceStatus}
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
        {isMatched ? "Matched events" : "Unmatched events"}
      </Typography>
      <Typography variant="body2">
        {isMatched
          ? "All information between two events is matched."
          : "Exists unmatched information between two events."}
      </Typography>
    </Box>
  );
  const onScanExplorer = (explorerId) => {
    window.open(`https://explorer.vbchain.vn/mbc/tx/${explorerId}`, "_blank");
  };

  return (
    <Box sx={{ py: 4, pl: 4 }}>
      <Box sx={{ display: "flex" }}>
        <Box sx={{ flex: 2, mr: 4, mb: 4 }}>
          <Box sx={{ mb: 6 }}>
            <Typography variant="h4" sx={{ mb: 2 }}>
              Lookup Provenance
            </Typography>
            <Typography variant="body1">
              Check your transaction provenance right in Blockchain Explorer.
            </Typography>
          </Box>
          <Box sx={{ mb: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              Transaction information
            </Typography>
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
              error={agentBcAddress.showError && agentBcAddress.error !== null}
              sx={{ mb: 1, width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-agent-bc-address" size="small">
                Agent blockchain address
              </InputLabel>
              <OutlinedInput
                id="outlined-agent-bc-address"
                type={"text"}
                value={agentBcAddress.value}
                onChange={(e) =>
                  dispatchAgentBcAddress({
                    type: UserInputAction.ON_CHANGE,
                    value: e.target.value,
                  })
                }
                label="Agent blockchain address"
                size="small"
              />
              <FormHelperText id="outlined-adornment-agent-bc-address-text">
                {agentBcAddress.showError ? agentBcAddress.error : ""}
              </FormHelperText>
            </FormControl>
            <FormControl
              error={userBcAddress.showError && userBcAddress.error !== null}
              sx={{ mb: 1, width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-user-bc-address" size="small">
                User blockchain address
              </InputLabel>
              <OutlinedInput
                id="outlined-user-bc-address"
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
            <FormControl
              error={secretId.showError && secretId.error !== null}
              sx={{ mb: 1, width: "100%" }}
              variant="outlined"
            >
              <InputLabel htmlFor="outlined-secret-id-address" size="small">
                Secret Id
              </InputLabel>
              <OutlinedInput
                id="outlined-secret-id"
                type={"text"}
                value={secretId.value}
                onChange={(e) =>
                  dispatchSecretId({
                    type: UserInputAction.ON_CHANGE,
                    value: e.target.value,
                  })
                }
                label="Secret Id"
                size="small"
              />
              <FormHelperText id="outlined-adornment-secret-id-text">
                {secretId.showError ? secretId.error : ""}
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
            Lookup Provenance
          </LoadingButton>
        </Box>
        <Divider orientation="vertical" flexItem />
        <Box
          component="div"
          sx={{ flex: 3, mx: 4, overflow: "auto", height: "100%" }}
        >
          {provenanceStatusSection(provenanceStatus, onClickProvenanceStatus)}
          <Box sx={{ flex: 1, mb: 4 }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 2 }}>
                Broadcast event
              </Typography>
              <FormControl
                error={
                  agentBcAddress.showError && agentBcAddress.error !== null
                }
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-agent-bc-address" size="small">
                  Agent blockchain address
                </InputLabel>
                <OutlinedInput
                  id="outlined-agent-bc-address"
                  type={"text"}
                  value={agentBcAddress.value}
                  onChange={(e) =>
                    dispatchAgentBcAddress({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Agent blockchain address"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-agent-bc-address-text">
                  {agentBcAddress.showError ? agentBcAddress.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={userBcAddress.showError && userBcAddress.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-user-bc-address" size="small">
                  User blockchain address
                </InputLabel>
                <OutlinedInput
                  id="outlined-user-bc-address"
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
              <FormControl
                error={transactionId.showError && transactionId.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-transaction-id-address"
                  size="small"
                >
                  Transaction Id
                </InputLabel>
                <OutlinedInput
                  id="outlined-transaction-id"
                  type={"text"}
                  value={transactionId.value}
                  onChange={(e) =>
                    dispatchTransactionId({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Transaction Id"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-transaction-id-text">
                  {transactionId.showError ? transactionId.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={
                  encryptedMessage.showError && encryptedMessage.error !== null
                }
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-encrypted-message-address"
                  size="small"
                >
                  Encrypted Message
                </InputLabel>
                <OutlinedInput
                  id="outlined-encrypted-message"
                  type={"text"}
                  value={encryptedMessage.value}
                  onChange={(e) =>
                    dispatchEncryptedMessage({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Encrypted Message"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-encrypted-message-text">
                  {encryptedMessage.showError ? encryptedMessage.error : ""}
                </FormHelperText>
              </FormControl>
              <LoadingButton
                variant="contained"
                size="small"
                onClick={() => onScanExplorer(explorerId1.value)}
                endIcon={<Launch />}
              >
                Scan on Blockchain Explorer
              </LoadingButton>
            </Box>

            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" sx={{ mb: 2 }}>
                History event
              </Typography>
              <FormControl
                error={
                  agentBcAddress.showError && agentBcAddress.error !== null
                }
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-agent-bc-address" size="small">
                  Agent blockchain address
                </InputLabel>
                <OutlinedInput
                  id="outlined-agent-bc-address"
                  type={"text"}
                  value={agentBcAddress.value}
                  onChange={(e) =>
                    dispatchAgentBcAddress({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Agent blockchain address"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-agent-bc-address-text">
                  {agentBcAddress.showError ? agentBcAddress.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={userBcAddress.showError && userBcAddress.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-user-bc-address" size="small">
                  User blockchain address
                </InputLabel>
                <OutlinedInput
                  id="outlined-user-bc-address"
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
              <FormControl
                error={transactionId.showError && transactionId.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-transaction-id-address"
                  size="small"
                >
                  Transaction Id
                </InputLabel>
                <OutlinedInput
                  id="outlined-transaction-id"
                  type={"text"}
                  value={transactionId.value}
                  onChange={(e) =>
                    dispatchTransactionId({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Transaction Id"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-transaction-id-text">
                  {transactionId.showError ? transactionId.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={
                  encryptedMessage.showError && encryptedMessage.error !== null
                }
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel
                  htmlFor="outlined-encrypted-message-address"
                  size="small"
                >
                  Encrypted Message
                </InputLabel>
                <OutlinedInput
                  id="outlined-encrypted-message"
                  type={"text"}
                  value={encryptedMessage.value}
                  onChange={(e) =>
                    dispatchEncryptedMessage({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Encrypted Message"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-encrypted-message-text">
                  {encryptedMessage.showError ? encryptedMessage.error : ""}
                </FormHelperText>
              </FormControl>
              <FormControl
                error={signature.showError && signature.error !== null}
                sx={{ mb: 1, width: "100%" }}
                variant="outlined"
              >
                <InputLabel htmlFor="outlined-signature-address" size="small">
                  Signature
                </InputLabel>
                <OutlinedInput
                  id="outlined-signature"
                  type={"text"}
                  value={signature.value}
                  onChange={(e) =>
                    dispatchSignature({
                      type: UserInputAction.ON_CHANGE,
                      value: e.target.value,
                    })
                  }
                  label="Signature"
                  size="small"
                />
                <FormHelperText id="outlined-adornment-signature-text">
                  {signature.showError ? signature.error : ""}
                </FormHelperText>
              </FormControl>
              <LoadingButton
                variant="contained"
                size="small"
                onClick={() => onScanExplorer(explorerId2.value)}
                endIcon={<Launch />}
              >
                Scan on Blockchain Explorer
              </LoadingButton>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Provenance;
