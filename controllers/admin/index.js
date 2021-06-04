//admin이후 url요청을 받았을때의 기본적인 골격

const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");

//실질적인 기능구현과 함수는 또 따로 생성!
router.get("/products", ctrl.get_products);

router.get("/products/write", ctrl.get_products_write);

router.post("/products/write", ctrl.post_products_write);

module.exports = router;
