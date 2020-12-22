const MacaddresValidation = async (req, res, next) =>{
    if (!req.body.macaddress)
        return res.status(400).json({ error: 'MacAdress é obrigatório'});
    next();
};

module.exports = MacaddresValidation;