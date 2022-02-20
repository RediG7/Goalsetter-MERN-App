const express = require("express");
const { route } = require("express/lib/application");
const router = express.Router();
const {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
} = require("../controller/goalController");

router.route("/").get(getGoals).post(setGoal);

// replaced by line 10
// router.get("/", getGoals);
// router.post("/", setGoal);

router.route("/:id").put(updateGoal).delete(deleteGoal);

// replaced by line 17
// :id is the param
// router.put("/:id", updateGoal);
//router.delete("/:id", deleteGoal);

module.exports = router;
