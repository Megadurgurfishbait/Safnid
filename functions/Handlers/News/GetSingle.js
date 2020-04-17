const { db } = require("../../Utils/admin");
const { resp } = require("../../Utils/Response");

// Sækja single frétt eftir ID.
// exports.GetSingle = (req, res) => {
//   const document = db.collection("Frettir").doc(req.params.id);

//   document
//     .get()
//     .then((doc) => {
//       if (!doc.exists) {
//         return resp(res, 400, "No Such document");
//       } else {
//         let news = doc.data();
//         return res.status(200).json(news);
//       }
//     })
//     .catch((err) => console.log(err));
// };

const { Hello } = require("../../Utils/FromJSonToDb");

exports.GetSingle = async (req, res) => {
  let { id } = req.params;
  var JUICE = await Hello();

  var found = JUICE.filter((frett) => frett.post_id === id);

  return res.json(found[0]);
};
