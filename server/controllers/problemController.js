const {Problem} = require('../models/models')

class ProblemController {
    async getAll(req, res){
        const problems = await Problem.findAll();
        return res.json(problems);
    }

    async getById(req, res){

    }

    async create(req, res){
        const {name, desc, difficulty, tag } = req.body;
        const problem = await Problem.create({name, desc, difficulty, tag});
        return res.json(problem);
    }
}

module.exports = new ProblemController();