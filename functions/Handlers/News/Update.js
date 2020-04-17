let { db } = require("../../Utils/admin");
const { resp } = require("../../Utils/Response");

exports.Update = (req, res) => {
  const document = db.collection("Frettir").doc(req.params.id);
  const { title, text, images, post_date } = req.body;
  let news = document.get().then((doc) => {
    if (!doc.exists) return resp(res, 400, "Frétt fannst ekki");
    else return doc.data();
  });

  // TODO:Implement'a Check ef að updated news fær sömu hluti
  //      og eru í news nú þegar.
  //      Gera það líka á client.

  let updatedNews = document.update({
    title: title || news.title,
    text: text || news.text,
    images,
    post_date
  });

  return Promise.all([updatedNews])
    .then(() => {
      return resp(res, 200, "Update Successfull");
    })
    .catch((err) => {
      console.log(err);
      return resp(res, 400, "Updated Unsuccessufull");
    });
};
