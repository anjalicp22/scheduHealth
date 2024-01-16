const express = require("express");

const {
  getAllUsersController,
  getAllDoctorsController,
  changeAccountsStatusController,
} = require("../controllers/adminCtrl");

const authMiddleware = require("../middlewares/authMiddleware");

//router onject
const router = express.Router();

//GET METHOD || USERS
router.get("/getAllUsers", authMiddleware, getAllUsersController);

//GET METHOD || DOCTORS
router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);

//POST ACCOUNT STATUS
router.post(
  "/changeAccountsStatus",
  authMiddleware,
  changeAccountsStatusController
);

module.exports = router;
