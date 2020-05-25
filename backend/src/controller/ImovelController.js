const ImovelModel = require('../model/ImovelModel');

class ImovelController {

    async create(req, res){
        const imovel = new ImovelModel(req.body);
        await imovel.save().then(response =>{
            return res.status(200).json(response);
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

    async casa(req, res){
        await ImovelModel.find({'property':1}).then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'Nenhum registro encontrado'});
        })
    }

    async apartamento(req, res){
        await ImovelModel.find({'property':2}).then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'Nenhum registro encontrado'});
        })
    }

    async all(req, res){
        await ImovelModel.find({}).then(response =>{
            return res.status(200).json(response);
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

    async findOne(req, res){
        await ImovelModel.findById(req.params.id).then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json({error: 'Imóvel não encontrado'});
        }).catch(err =>{
            return res.status(500).json(err);
        });
    }

}

module.exports = new ImovelController();