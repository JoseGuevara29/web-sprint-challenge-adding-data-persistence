// build your `/api/projects` router here
const express = require("express");

const router = express.Router();

const Projects = require("./model");

router.get("/", (req, res, next) => {
  Projects.getProjects()
    .then((pro) => {
      res.json(pro);
    })
    .catch(next);
});
router.post("/", (req, res, next) => {
  const data = req.body;
  Projects.insert(data)
    .then((newPro) => {
      res.json(newPro);
    })
    .catch(next);
});

router.use((err, req, res, next) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
