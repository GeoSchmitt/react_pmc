const UserModel = require('../model/UserModel');

class UserController {

    async create(req, res){
        const user = new UserModel(req.body);
        await user.save().then(response =>{
            return res.status(200).json(response);
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

    async delete(req, res){
        await UserModel.deleteOne({'_id': req.params.id}).then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'User não encontrado'});
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

    async update(req, res){
        await UserModel.findByIdAndUpdate({'_id':req.params.id}, req.body, {new:true}).then(response => {
            return res.status(200).json(response);
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

    async findOne(req, res){
        await UserModel.findById(req.params.id).then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'User não encontrado'});
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

    async all(req, res){
        await UserModel.find({}).then(response =>{
            return res.status(200).json(response);
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

}

module.exports = new UserController();