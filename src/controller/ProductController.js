const ProductModel = require('../model/ProductModel');

class ProductController {

    async create(req, res){
        const task = new ProductModel(req.body);
        await task
                .save()
                .then(response =>{
                    return res.status(201).json(response);
                })
                .catch(error => {
                    return res.status(500).json(error);
                });
    };

    async update (req, res){
        await ProductModel.findOneAndUpdate(
            {'_id': req.params.id}, req.body, { new: true }
        ).then( response => {
            return res.status(200).json(response);
        }).catch(error => {
            return res.status(500).json(error);
        });
    };

    async all (req, res){
        await ProductModel.find(
            { 'done': {'$ne': true}}
            ).sort('when')
            .then( response => {
                return res.status(200).json(response);
            }).catch(error => {
                return res.status(500).json(error);
            });
    };

    async show(req, res){
        await ProductModel.findById(req.params.id)
        .then(response =>{
            if(response)
                return res.status(200).json(response);
            else
                return res.status(404).json('Tarefa não encontrada.');
        }).catch(error =>{
            return res.status(500).json(error);
        });
    };

    async delete(req, res){
        await ProductModel.deleteOne({'_id' : req.params.id})
        .then(response =>{
            return res.status(200).json(response);
        }).catch(error =>{
            return res.status(500).json(error);
        });
    };

    async done(req, res){
        await ProductModel.findByIdAndUpdate(
            {'_id' : req.params.id}
            ,{'done' : req.params.done}
            ,{new : true}
        ).then(response =>{
            return res.status(200).json(response);   
        }).catch(error =>{
            return res.status(500).json(error);
        });
    };

    async list(req, res){
        await ProductModel
        .find({
            'type' : {'$eq' : req.params.type}
            ,'done' : {'$eq' : false}
        }).sort('description')
        .then(response =>{
            return res.status(200).json(response);
        }).catch(error =>{
            return res.status(500).json(error);
        });
    };

};

module.exports = new ProductController();