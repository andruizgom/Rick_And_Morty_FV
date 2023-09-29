const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;
        const {data} = await axios.get(`${URL}/${id}`)
        const {name, gender, species, origin, image, status } = data;

        if(!name) throw new Error ('Character not found');

        const character = {
            id, 
            name,
            gender,
            species,
            origin,
            image,
            status
        }
        
        return res.status(200).json(character)
        
        
    } catch (error) {  
        return error.message.includes('Character')?
        res.status(404).send('Character not found') : res.status(500).send(error.message)
    }

  

}

module.exports = {
    getCharById
}
