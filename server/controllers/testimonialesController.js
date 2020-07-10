const Testimonial = require('../models/Testimoniales');

exports.obtenerController = async (req, res) => {

   const testimoniales = await Testimonial.findAll();
    res.render('testimoniales',{
            pagina : 'Testimoniales',
            testimoniales : testimoniales
            })
};

exports.agregarController = async (req, res) => {

    let {nombre, correo, mensaje} = req.body;

    let errores = [];

    if(!nombre){errores.push({'mensaje': "Falta ingresar el nombre" })}
    if(!correo){errores.push({'mensaje': "Falta ingresar el correo" })}
    if(!mensaje){errores.push({'mensaje': "Falta ingresar el mensaje" })}

    if(errores.length > 0)
    {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales',{
            errores,
            nombre,
            correo,
            mensaje,
            pagina : 'Testimoniales',
            testimoniales
        });
    }
    else
    {
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
        .catch(errores => console.log(errores))

        // no hay errores
    }


};