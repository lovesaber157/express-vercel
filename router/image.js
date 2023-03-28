const EXPRESS=require("express")
const router=EXPRESS.Router()
const path=require("path")
const fs=require("fs")

router.get("/image/:photo",(req, res)=>{
    //获取地址
    console.log(req.params.photo)
    let photoSrc=path.resolve(__dirname,`../static/photos/${req.params.photo}`)
    let stream=fs.createReadStream(photoSrc)
    res.set( 'content-type', {"png": "image/png","jpg": "image/jpeg"} )
    if (stream){
        let responseData=[]
        stream.on( 'data', function( chunk ) {
            responseData.push( chunk );
        });
        stream.on( 'end', function() {
            var finalData = Buffer.concat( responseData );
            res.write( finalData );
            res.end();
            // res.send(finalData)
        });
    }
})
module.exports=router