const { isPast } = require('date-fns')

const ProductModel = require('../model/ProductModel');

const ProductValidation = async (req, res, next) => {

    const { type, title, description, price, amount } = req.body;
    
    if(!type)
        return res.status(400).json({ error: 'Tipo é obrigatório'});
    if(!title)
        return res.status(400).json({ error: 'Título é obrigatório'});
    if(!description)
        return res.status(400).json({ error: 'Descrição é obrigatória'});
    if(!price)
        return res.status(400).json({ error: 'Preço é obrigatório'});
    if(price < 0)
        return res.status(400).json({ error: 'Preço não pode ser menor que R$ 0.00'});
    if(amount < 0)
        return res.status(400).json({ error: 'Quantidade não pode ser menor que 0'});
    
    let exists;

    if(req.params.id){
        exists = await ProductModel.findOne(
            {
                'description' : {'$eq' : req.params.description}
                ,'_id' : {'$ne' : req.params.id}
            })
    }else{
        exists = await ProductModel.findOne(
            {
                'description' : {'$eq' : req.params.description}
            })
    }
    
    if(exists)
        return res.status(400).json({ error: 'Já existe um produto com o mesmo nome'});

    next();
}

module.exports = ProductValidation;