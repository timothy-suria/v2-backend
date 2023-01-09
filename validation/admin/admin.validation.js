const Schema = require('./admin.schema');

module.exports = {
    createAdmin: async (req, res, next) => {
        const {error, value} = Schema.create.validate(req.body);
        if(error){
            res.status(422).send({
                code: 422,
                success: false,
                message: error.details[0].message
            })
        }else {
            next()
        }
    }
}