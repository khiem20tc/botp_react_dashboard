import { Box, Typography } from "@mui/material";
import {
  agentValidateOtpApiBodyObj,
  agentValidateOtpApiUrl,
  qrImageContent,
  registerUserContent,
  sendMessageApiBodyObj,
  sendMessageApiUrl,
} from "common/mock/maunal";
import { CodeBlock, dracula } from "react-code-blocks";
import QRCode from "react-qr-code";

function Manual() {
  const formatBoldText = (text) => (
    <Box component="span" sx={{ fontWeight: "bold" }} children={text} />
  );
  const formatCodeText = (text) => (
    <Box
      component="span"
      sx={{
        fontFamily: "Roboto Mono",
        px: "4px",
        py: "2px",
        color: "#24292e",
        bgcolor: "rgba(27,31,35,0.07)",
        borderRadius: "4px",
        lineHeight: "20px",
      }}
      children={text}
    />
  );

  return (
    <Box sx={{ py: 4, px: 4 }}>
      <Box sx={{ mb: 5 }}>
        <Typography variant="h4" sx={{ mb: 2 }}>
          BOTP Manual
        </Typography>
        <Typography variant="body1">
          We will describe {formatBoldText("step by step")} how setup and
          implement your system to integrated with BOTP APIs in order to use the
          BOTP services.
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          1. Implement your APIs to setup QR
        </Typography>
        <Typography variant="body2">
          First, you have to implement{" "}
          {formatBoldText("an API for generating QR image")}. In particular,
          your users would initially scan a QR image to register the BOTP
          Authenticator to your service as an authenticator app. The content of
          the QR image must be the following URL
        </Typography>
        <Typography variant="body2">
          <Box sx={{ my: 1 }}>
            <CodeBlock text={qrImageContent} theme={dracula} />
          </Box>
        </Typography>
        <Typography variant="body2">
          Here is the generated QR image. We recommended that the QR image has
          both {formatBoldText("small size")} and{" "}
          {formatBoldText("low correction level")} to reduce the shoulder
          surfing attack.
        </Typography>
        <Box sx={{ my: 1, display: "flex", justifyContent: "center" }}>
          <QRCode size={140} value={qrImageContent} level="L" />
        </Box>
        <Typography variant="body2">
          After a successful QR scan, BOTP system would receive this URL from
          the user. We would change nothing except the{" "}
          {formatCodeText("address")} parameter from{" "}
          {formatCodeText("YOUR_BC_ADDRESS")} to{" "}
          {formatCodeText("USER_BC_ADDRESS")}, and call that new URL. This is
          also the second API your system must implement,{" "}
          {formatBoldText(
            "to receive the information of user who registered BOTP Authenticator."
          )}
        </Typography>
        <Typography variant="body2">
          <Box sx={{ my: 1 }}>
            <CodeBlock text={registerUserContent} theme={dracula} />
          </Box>
        </Typography>
      </Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h6" sx={{ mb: 0.5 }}>
          2. Integrate with BOTP APIs to validate OTP
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Next, you have to integrate with our APIs to authenticate the 2FA
          process. But in advance, you have to{" "}
          {formatBoldText("get your API-Key")} in{" "}
          {formatCodeText("BOTP Dashboard > Settings > Profile")}
        </Typography>
        <Typography variant="body2">
          When the second factor authentication is needed, your system call the{" "}
          {formatCodeText("sendMessage")} API first to{" "}
          {formatBoldText("send transaction message to the users")}. In
          particular, each message contains {formatCodeText("userAddress")}{" "}
          (user blockchain address), {formatCodeText("notifyMessage")}{" "}
          (transaction message that shown up to the user), and{" "}
          {formatCodeText("message")} (private message to generate OTP code, and
          is not shown up)
        </Typography>
        <Typography variant="body2">
          <Box sx={{ my: 1 }}>
            <CodeBlock
              text={sendMessageApiUrl}
              theme={dracula}
              language="javascript"
            />
          </Box>
        </Typography>
        <Typography variant="body2">
          <Box sx={{ my: 1 }}>
            <CodeBlock
              text={JSON.stringify(sendMessageApiBodyObj, null, 2)}
              theme={dracula}
              language="javascript"
            />
          </Box>
        </Typography>
        <Typography variant="body2" sx={{ mb: 0.5 }}>
          Finally, when the user entered the OTP received from BOTP app, your
          system don't need to verify it by hand, but by calling our{" "}
          {formatCodeText("agentValidateOTP")} API.
          {formatBoldText("get your API-Key")} in{" "}
          {formatCodeText("BOTP Dashboard > Settings > Profile")}
        </Typography>
        <Typography variant="body2">
          <Box sx={{ my: 1 }}>
            <CodeBlock text={agentValidateOtpApiUrl} theme={dracula} />
          </Box>
        </Typography>
        <Typography variant="body2">
          <Box sx={{ my: 1 }}>
            <CodeBlock
              text={JSON.stringify(agentValidateOtpApiBodyObj, null, 2)}
              theme={dracula}
              language="javascript"
            />
          </Box>
        </Typography>
      </Box>
    </Box>
  );
}

export default Manual;
