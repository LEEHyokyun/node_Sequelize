const models = require("../../models");

//실질적인 기능을 구현하기 위한 js파일
exports.get_products = (_, res) => {
  //받은 데이터로 Products database 조회하기
  //data 조건에 맞춘 조회(Query의 where절)
  //변수를 productsList로 정하고 여기에 data들이 저장됨
  models.Products.findAll({}).then((productList) => {
    res.render("admin/products.html", { productList: productList });
  });
};

exports.get_products_write = (_, res) => {
  res.render("admin/write.html");
};

//받은 데이터로 db table 생성하기
//이전 페이지에서 작성을 눌러 post 메소드를 통해 data를 받음
//그 data를 받고 Products table에 data를 기재해주는것 = create(생성)
exports.post_products_write = (req, res) => {
  //data field 맞추기
  //넘어오는 data는 bodyParser형태!(req.body 형태)
  //Query = insert , Sequelize = create
  models.Products.create(
    req.body
    //저장하고 main page로 간다
    //redirect (call back)
  ).then(() => {
    res.redirect("/admin/products");
  });
};

exports.get_products_detail = (req, res) => {
  //req.params.id
  models.Products.findByPk(req.params.id).then((product) => {
    res.render("admin/detail.html", { product: product });
  });
};
