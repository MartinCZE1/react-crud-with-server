var express = require("express");
var router = express.Router();

const phonesController = require("../controllers/phones");

router.get("/", phonesController.getAllPhones);

//localhost:3000/phones/5sa4d949qw86d5sa4d6sa
//req.params.id

router.get("/:id", phonesController.getPhoneById);

router.delete("/:id", phonesController.deletePhone);

router.put("/:id", phonesController.updatePhone);

router.post("/", phonesController.createPhone);

module.exports = router;
