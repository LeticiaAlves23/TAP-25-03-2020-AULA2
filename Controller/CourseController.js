const categoriaModel = require("../models/course-model")

class CourseController {

    static async course(req, res) {
        let orders = await courseModel.find({})
        res.json(ordens)
    } 
}
module.exports = courseController