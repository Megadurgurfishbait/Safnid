let { db } = require("../../Utils/admin");
const { resp } = require("../../Utils/Response");
// Búa til frétt.
// TODO: Bæta við CHECK hvort að ekkert sé tómt.
// Má ekki vera tómt: Title, Post_Date, Text.
// Senda betra response en það sem að ég er með hér.
exports.Create = (req, res) => {
  const { title, post_date, text, images, id } = req.body;
  const newNews = {
    title,
    post_date,
    text,
    images
  };

  db.collection("Frettir")
    .doc(id)
    .set(newNews)
    .then(() => {
      return resp(res, 290, `News updates with title: ${id}`);
    })
    .catch((err) => {
      console.log(err);
      return resp(res, 500, "something went wrong");
    });
};
