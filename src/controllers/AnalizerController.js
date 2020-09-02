const imageAnalizer = require('../robots/analizer');

module.exports = {

    get: async (req, resp) => {
        try{

            const data = await imageAnalizer();

            return resp.json(data)
        }catch(err){
            return resp.json({ message: 'Falha na análise da imagem' })
        }
    }
}

