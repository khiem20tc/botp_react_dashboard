const qrImageContent =
  "https://your-service-website.com/api/2fa?address=YOUR_BC_ADDRESS&username=USERNAME";
const registerUserContent = "...?address=USER_BC_ADDRESS&username=USERNAME";

const sendMessageApiUrl =
  "POST https://botp-backend-logic-api.herokuapp.com/api/v1/message/sendMessage";
const agentValidateOtpApiUrl =
  "POST https://botp-backend-logic-api.herokuapp.com/api/v1/otp/agentValidateOTP";

const sendMessageApiBodyObj = {
  APIKey: "aa8ea422-49c9-42b6-b645-b5654aa56639",
  ObjectListParams: [
    {
      userAddress: "0xDB026e60C1083375167094ae3531352f47f05b0F",
      message: "keythinh1",
      notifyMessage: "[khiem-2] Test analyser1",
    },
    {
      userAddress: "0xC0c0b84907b5b93aAF37936eC5d9D1fDF7A60aD5",
      message: "keythinh2",
      notifyMessage: "[khiem-2] Test analyser2",
    },
  ],
};

const agentValidateOtpApiBodyObj = {
  APIKey: "2c6b9e65-4018-44bf-b130-aa3e3ce7d937",
  ObjectListParams: [
    {
      userAddr: "0xf0465189F703fAb578e2A040C6906460463115d9",
      OTP: "3982995",
      message: "agennenwgwj",
    },
  ],
  period: 120,
  digits: 7,
  algorithm: "SHA-512",
};

export {
  qrImageContent,
  registerUserContent,
  sendMessageApiUrl,
  agentValidateOtpApiUrl,
  sendMessageApiBodyObj,
  agentValidateOtpApiBodyObj,
};
