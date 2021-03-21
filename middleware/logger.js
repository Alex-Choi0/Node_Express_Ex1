// const moment = require("moment");
// : ${moment().format()}

const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${req.originalUrl}`);
    // res.send({message : "sending complete"})
    next();
}

module.exports = logger;