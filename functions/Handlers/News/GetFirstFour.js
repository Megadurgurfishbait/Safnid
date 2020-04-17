const { db } = require("../../Utils/admin");
const { resp } = require("../../Utils/Response");

// Sækja single frétt eftir ID.
exports.GetFirstFour = (req, res) => {
  const document = db.collection("Frettir");

  document
    .orderBy("post_date", "desc")
    .limit(4)
    .get()
    .then((data) => {
      let news = [];
      data.forEach((doc) => {
        news.push({
          title: doc.data().title,
          post_data: doc.data().post_date,
          id: doc.id
        });
      });
      return res.json(news);
    })
    .catch((err) => {
      console.log(err);
    });
};
