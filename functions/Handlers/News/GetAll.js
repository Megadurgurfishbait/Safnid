const { db } = require("../../Utils/admin");

// Sækir fréttir úr gagnagrunni á formatinu:
// [
//   [
//     "Málþingið að Fitjum í Skorradal - Dagskrárauki!",
//     "2011-09-06 16:17:35"
// ],
// ...
// ]

// Sækja allar fréttir.

// exports.GetAll = (req, res) => {
//   db.collection("Frettir")
//     .get()
//     .then((data) => {
//       let news = [];
//       data.forEach((doc) => {
//         news.push({
//           title: doc.data().title,
//           post_date: doc.data().post_date,
//           id: doc.id,
//           text: doc.data().text
//         });
//       });
//       return res.json(news);
//     })
//     .catch((err) => console.log(err));
// };

const { Hello } = require("../../Utils/FromJSonToDb");

exports.GetAll = async (req, res) => {
  var JUICE = await Hello();

  return res.json(JUICE);
};
