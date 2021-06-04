//admin이후 url요청을 받았을때의 기본적인 골격

const { Router } = require("express");
const router = Router();
const ctrl = require("./admin.ctrl");

//실질적인 기능구현과 함수는 또 따로 생성!
router.get("/products", ctrl.get_products);

router.get("/products/write", ctrl.get_products_write);

//사용자가 입력한 실질적인 data가 post 요청을 통해 받아와진다
//index.js는 함수만 기재(실질 기능은 controller에서 구현)
router.post("/products/write", ctrl.post_products_write);

module.exports = router;
