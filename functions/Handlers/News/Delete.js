let { db } = require("../../Utils/admin");
const { resp } = require("../../Utils/Response");
exports.Delete = (req, res) => {
  const document = db.collection("Frettir").doc(req.params.id);

  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return resp(res, 404, "Frétt fannst ekki");
      }
      return document.delete();
    })
    .then(() => {
      return resp(res, 200, "Frétt Eytt");
    })
    .catch((err) => {
      resp(res, 500, err.code);
    });
};
