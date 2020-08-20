const jwt = require('jsonwebtoken');

const authentication = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decode = jwt.verify(token, 'secretValue'); // change the secretValue to a complex string

        req.user = decode;
        next();

    } catch (error) {
        res.json({
            message: "Authentication faild"
        })
    }
}

module.exports = authentication