const Database = require('./db');
const saveOrphanage = require('./saveOrphanage');

Database.then( async (db) => {
// Inserir dados na tabela 
    // await saveOrphanage(db, {
    //     id: 1,
    //     lat: "-27.222633", 
    //     lng: "-49.6555874",
    //     name: "Lar de amor",
    //     about: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
    //     whatsapp: "11948251122",
    //     images: [
    //         "https://source.unsplash.com/random?id=3",
    //         "https://source.unsplash.com/random?id=4"
    //     ].toString(),
    //     instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
    //     opening_hours : "Horarios de visitas das 18hrs até as 8hrs",
    //     open_on_weekends : "0"
    // });

    // Fazer Select na tabela
    const selectedOrphanages = await db.all(" SELECT * FROM orphanages ")
    console.log(selectedOrphanages)


    // // CONSULTAR UM ORFANATO PELO ID
    // const orphanage = await db.all(' SELECT * FROM orphanages WHERE id = "1" ')
    // console.log(orphanage)
    
    // // APAGAR UM DADO
    // await db.run("DELETE FROM orphanages WHERE id = '2' ")
})