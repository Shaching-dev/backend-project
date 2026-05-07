import { asyncHandler } from "../utils/asyncHandler.js";

const registerUser = asyncHandler(async (req, res) => {
  console.log("request came");

  res.status(200).json({
    message: "OK",
  });
});

const loginUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    success: true,
    message: "My server is running good and ",
  });
});

export { registerUser, loginUser };
