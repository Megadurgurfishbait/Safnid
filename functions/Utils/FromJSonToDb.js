// Function sem að setti inn allt data í firebase
const fs = require("fs");
const path = require("path");
console.log(__dirname);
let rawdata = fs.readFileSync(
  path.join(__dirname, "/gagngrunnurLandbunadarsafnsins.json")
);
let student = JSON.parse(rawdata);

exports.Hello = () => {
  return student;
};

/*
function writeToDbJson(student) {
  for (let i = 0; i < student.length; i++) {
    const newNews = {
      title: student[i].title,
      post_date: student[i].post_date,
      text: student[i].text,
      images: student[i].images
    };
    write(student[i].post_id, newNews);
  }
}

function write(id, newNews){
  db.collection("Frettir")
  .doc(id)
  .set(newNews)
  .then(doc => {
    return res.json({
      message: `News updates with title: ${newNews.title}`
    });
  })
  .catch(err => {
    console.log(err);
    return res.status(500).json({ error: "something went wrong" });
  });
}

writeToDbJson(student);
*/
