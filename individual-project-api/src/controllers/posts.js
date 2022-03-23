const { postDB } = require("../database");

const postControllers = {
  getAllPosts: (req, res) => {
    if (!postDB.length) {
      res.status(404).json({
        message: "No Posts found",
      });
      return;
    }

    res.status(200).json({
      message: "Get Posts",
      result: postDB,
    });
  },
};

module.exports = postControllers;
