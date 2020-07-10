const Viaje = require('../models/Viajes');

//ASYNG

exports.viajesController = async (req, res) => {

    const viajes = await Viaje.findAll();

    res.render('viajes',{
        pagina : 'Proximos viajes',
        viajes : viajes
   });


};

exports.viajeController = async (req, res) => {


    const viaje = await Viaje.findByPk(req.params.id);
    res.render('viaje',{
        pagina : 'Viaje',
        viaje : viaje
    })


};



//PROMISE

// exports.viajesController = (req, res) => {

//     Viaje.findAll()
//         .then(viajes => res.render('viajes',{
//             pagina : 'Proximos viajes',
//             viajes : viajes
//        }) )
//         .catch(error => console.log(error))

// };

// exports.viajeController = (req, res) => {


//     Viaje.findByPk(req.params.id)   
//         .then(viaje => res.render('viaje',{
//             pagina : 'Viaje',
//             viaje : viaje
//         }) )
//         .catch(error => console.log(error))

// };