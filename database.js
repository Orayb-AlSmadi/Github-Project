const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/Repos", { useNewUrlParser: true });
const db = mongoose.connection;

db.on("error", function() {
  console.log("mongoose connection error");
  console.log("____________________________");
});

db.once("open", function() {
  console.log("mongoose connected successfully");
  console.log("____________________________");
});

let ReposSchema = new mongoose.Schema({
  name: String,
  state: Boolean,
  language: String
});

let Repos = mongoose.model("repos", ReposSchema);

let getIniRepos = cb => {
  // console.log(cb);
  Repos.insertMany(arr, function(error, docs) {});
  getRepos(cb);
};

let getRepos = async cb => {
  try {
    // console.log("1");
    let allRepos = await Repos.find({});
    // console.log("2");
    cb(allRepos);
    // console.log("3");
  } catch (error) {
    cb(error);
  }
};

let postRepo = (repo, cb) => {
  Repos.insertMany(repo, function(error, docs) {});
  getRepos(cb);
};

let postOneRepo = (repo, cb) => {
  let newrepo = new Repos(repo);
  newrepo.save(function(error, docs) {
    getRepos(cb);
  });
};

let deleteRepo = (repoId, cb) => {
  Repos.deleteOne({ _id: repoId }, function(err) {
    if (err) return handleError(err);
  });
  getRepos(cb);
};

let updateRepo = async (repoId, cb) => {
  const upd = await Repos.findOne({ _id: repoId });
  upd.state = !upd.state;
  const saved = await upd.save();
  getRepos(cb);
};
// Repos.findOneAndUpdate(repoId, update, {
//   state = !state
// });

let arr = [
  {
    name: "Array",
    state: false,
    language: "JavaScript"
  },
  {
    name: "DOM",
    state: false,
    language: "HTML"
  },
  {
    name: "Github-Project",
    state: false,
    language: "JavaScript"
  }
];

module.exports = {
  getRepos,
  getIniRepos,
  postRepo,
  postOneRepo,
  deleteRepo,
  updateRepo
};

// Start your code below
