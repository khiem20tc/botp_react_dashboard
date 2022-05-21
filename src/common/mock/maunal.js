const qrImageContent =
  "https://your-service-website.com/api/2fa?address=YOUR_BC_ADDRESS&username=USERNAME";
const registerUserContent = "...?address=USER_BC_ADDRESS&username=USERNAME";

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
export { qrImageContent, registerUserContent, sendMessageApiBodyObj };
