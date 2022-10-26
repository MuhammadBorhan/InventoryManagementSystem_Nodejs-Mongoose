const brandController = require("../controllers/Brand.controller");

const router=require("express").Router();

router.route('/')
.get(brandController.getBrand)
.post(brandController.createBrand)

router.route('/:id')
.get(brandController.getBrandById)
.patch(brandController.updateBrandById)
.delete(brandController.deleteBrand)

module.exports=router;