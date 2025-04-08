const router=require('express').Router();

const weatherRoutes=require('../api/weather.route')
router.use('/weather',weatherRoutes);

module.exports=router;