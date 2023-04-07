const Locations=require('../Models/Locations');

exports.getAllLocations=(req,res,next)=>{
    Locations.find().then(success => {
     res.status(200).json({
        message:"successfully fetched",
        locations:success
     })
}).catch((error)=>{
   res.status(500).json({
      message:"something wrong",
      Error:err
   })
})
}