// build your `/api/resources` router here
const express = require("express");

const router = express.Router();

const Resources = require("./model");

router.get("/", (req, res, next) => {
  Resources.getResources()
    .then((resours) => {
      res.json(resours);
    })
    .catch(next);
});
router.post("/", (req, res, next) => {
  const data = req.body;
  Resources.insert(data)
    .then((newResource) => {
      res.json(newResource);
    })
    .catch(next);
});

router.use((err, req, res) => {
  // eslint-disable-line
  res.status(err.status || 500).json({
    sageAdvice: "Finding the real error is 90% of the bug fix",
    message: err.message,
    stack: err.stack,
  });
});

module.exports = router;
