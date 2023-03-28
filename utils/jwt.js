const TOKEN = require('jsonwebtoken')
function sign(option){
    return TOKEN.sign(option,'666',{
        expiresIn: 600
    })
}

module.exports={
    sign,
}