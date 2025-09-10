const express = require("express");
const { getUsers, loginUser, registerUser, updateUserRole, deleteUser } = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.post("/login", loginUser);
router.post("/register", registerUser);
router.put("/:id", updateUserRole);
router.delete("/:id", deleteUser);

module.exports = router;
