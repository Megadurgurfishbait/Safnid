const { admin } = require("../../Utils/admin");
const { resp } = require("../../Utils/Response");
// eslint-disable-next-line consistent-return
exports.Auth = (req, res, next) => {
  let idToken;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    return resp(res, 403, "Not Authorized");
  }
  admin
    .auth()
    .verifyIdToken(idToken)
    .then(() => {
      return next();
    })
    .catch((err) => {
      if (err.code === "auth/argument-error") {
        return resp(res, 403, "Token Verification Unsuccessful");
      }
      return res.json(err);
    });
};
