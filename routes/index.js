const router=require('express').Router();

const infoRoutes=require('../routes/api/index');
router.use('/GET',infoRoutes);

module.exports=router;