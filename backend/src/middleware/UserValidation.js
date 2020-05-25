const UserModel = require('../model/UserModel');

const UserValidation = async (req, res, next) =>{

    const {type, active, name, password} = req.body;


    //date-fns para validação de data
    if(!type)
        return res.status(400).json({ error: 'type é obrigatório'});
    else if(!name)
        return res.status(400).json({ error: 'name é obrigatório'});
    else if(!password)
        return res.status(400).json({ error: 'password é obrigatório'});
    else{
        let exists;

        // if(req.params.id){
        //     exists = await UserModel.findOne({'name':{'$in':name}})
        // }

        exists = await UserModel.findOne({'name':{'$in':name}})
        
        if(exists)
            return res.status(400).json({ error: 'User já cadastrado'});
        else
            next();
    }
        

}

module.exports = UserValidation;