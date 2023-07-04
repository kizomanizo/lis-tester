const basicAuth = require("express-basic-auth");
const invalidLoginResponse = {
  status: 401,
  success: false,
  message: "Wrong username or password",
};

const checkLogin = basicAuth({
  users: { tester: process.env.DEMO_PASS },
  unauthorizedResponse: invalidLoginResponse,
});

module.exports = checkLogin;
