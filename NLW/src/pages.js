const Database = require('./database/db');
const saveOrphanage = require('./database/saveOrphanage');

module.exports = {

    index( req , res ) {
        return res.render('index' )
    },

    async orphanage(req, res){
        const id = req.query.id;

        try {
            const db = await Database;
            const results = await db.all(` SELECT * FROM orphanages WHERE id = "${id}" `)
            const orphanage = results[0]

            orphanage.images = orphanage.images.split(",")
            orphanage.firstImage = orphanage.images[0]

            if(orphanage.open_on_weekends == "0"){
                orphanage.open_on_weekends = false
            }else{
                orphanage.open_on_weekends = true
            }

            return res.render('orphanage', { orphanage })
            
        } catch(error){
            console.log(error)
            return res.send('Erro no banco de dados')

        }
    },

    async orphanages(req, res){
        try {
            // O SELECT E O DB FORAM TODOS PEGOS NO TEST.JS
            // QUALQUER ERRO ELE IRÁ CAIR NO CATCH E POSSIVELMENTE APARECER NO TERMINAL QUANDO O SERVER TIVER LIGADO
            const db = await Database;
            const orphanages = await db.all(" SELECT * FROM orphanages ")
            console.log(orphanages)
            return res.render('orphanages', { orphanages })

        }  catch ( error ) {
            // QUALQUER ERRO ELE IRÁ APARECER NO CONSOLE.LOG POIS A ATRIBUIÇÃO " ERROR "  DELE TEM ESSA FUNÇÃO
            console.log(error)
            return res.send('Erro no banco de dados')

        }
    },

    createOrphanage(req, res){
        return res.render('create-orphanage' )
    }

}