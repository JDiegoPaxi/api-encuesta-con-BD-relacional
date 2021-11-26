const {allencuestas,getencuesta}=require('../controllers/encuesta');
const {Router}=require('express');
const router=Router();

router.get('/',allencuestas);
router.get('/encuesta/:id',getencuesta);


module.exports=router;




