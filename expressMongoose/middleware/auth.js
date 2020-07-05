
const jwt = require('jsonwebtoken')

function auth(req, res ,next){
    const jwtToken = req.header('authorization')
    if(!jwtToken) return res.status(401).send(' . Token is empty')

    try{
        const payload = jwt.verify(jwtToken, process.env.SECRET_JWT)
        req.user = payload
        next()

    }catch(e){
        res.status(400).send('Access Denied. Invalid Token')
    }
}



module.exports = auth