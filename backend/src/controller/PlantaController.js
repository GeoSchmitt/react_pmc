const PlantaModel = require('../model/PlantaModel');

class PlantaController {

    async create(req, res){
        const planta = new PlantaModel(req.body);
        await planta.save().then(response =>{
            return res.status(200).json(response);
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }


    async all(req, res){
        await PlantaModel.find({}).then(response =>{
            return res.status(200).json(response);
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

    async findOne(req, res){
        await PlantaModel.findById(req.params.id).then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'Planta não encontrado'});
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

}

module.exports = new PlantaController();