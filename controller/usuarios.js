const {response}= require('express');
const usuariosGet = (req, res = response) => {
    // const query = req.query;
    const {q,nombre = 'no envia',apikey} = req.query;
    res.json({
        msg: 'get API - controller',
        // query
        q,
        nombre,
        apikey
    });
}

const usuariosPut =(req, res= response) => {
    const {id } = req.params; // params puede traer muchos datos.
    res.json({
        msg: 'put API - controller',
        id
    });
}

const usuariosPost = (req, res = response) => {
    // const body = req.body;
    const {nombre, edad} = req.body;
    res.json({
        msg: 'post API - controller',
        // body
        nombre,
        edad
    });
}


const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}
const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - controller'
    });
}

//se exporta un objeto pues van haber muchos
module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}
