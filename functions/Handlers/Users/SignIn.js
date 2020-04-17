const { firebase } = require("../../Utils/admin");
const { resp } = require("../../Utils/Response");

exports.SignIn = (req, res) => {
  const { email, password } = req.body;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((error) => {
      // Handle Errors here.
      if (error.code === "auth/wrong-password")
        return resp(res, 400, "Wrong password");
      else if (error.code === "auth/user-not-found")
        return resp(res, 400, "User not found");

      return resp(res, 400, error.code);
    });
};
