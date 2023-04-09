const Router = require("express");
const router = new Router();
const controller = require("./authController");
const { check } = require("express-validator");
const authMiddleware = require("./middleware/authMiddleware");
const roleMiddleawre = require("./middleware/roleMiddleawre");

router.post(
  "/registration",
  [
    check("username", "Имя пользователя не может быть пустым").notEmpty(),
    check(
      "username",
      "Пароль должен быть больше 4 и короче 15 символов"
    ).isLength({ min: 4, max: 15 }),
  ],
  controller.registration
);
router.post("/login", controller.login);
router.get(
  "/users",
  authMiddleware,
  roleMiddleawre(["ADMIN"]),
  controller.getUsers
);

module.exports = router;
