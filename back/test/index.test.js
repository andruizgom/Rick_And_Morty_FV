const app = require('../src/app');
const session = require('supertest');
const request = session(app);

describe('Test de RUTAS', () => {

    describe('GET /rickandmorty/character/:id', () => {

        it('Responde con status: 200', async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        })

        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"' , async () => {
            const response = await request.get('/rickandmorty/character/1');
            expect(response.body).toHaveProperty("id");
            expect(response.body).toHaveProperty("name");
            expect(response.body).toHaveProperty("species");
            expect(response.body).toHaveProperty("gender");
            expect(response.body).toHaveProperty("status");
            expect(response.body).toHaveProperty("origin");
            expect(response.body).toHaveProperty("image");
        })

        it('Si hay un error responde con status: 500' , async () => {
            const response = await request.get('/rickandmorty/character/9999');
            expect(response.statusCode).toBe(500);
        })
    })

    describe('GET /rickandmorty/login', () => {

        it('Responde con un objeto {access: true} si la información de login (email y password) son correctas', async () => {
            const response = await request.get('/rickandmorty/login?email=ejemplo@gmail.com&password=unaPassword41');
            const access = { access: true };
            expect(response.body).toEqual(access)

        })

        it('Responde con un objeto {access: false} si la información de login (email y password) son incorrectas', async () => {
            const response = await request.get('/rickandmorty/login?email=incorrecto@gmail.com&password=unaPassword88');
            const access = { access: false };
            expect(response.body).toEqual(access)

        })

    })

    describe('POST /rickandmorty/fav', () => {

        it('Agrega un personaje a favoritos', async () => {
            const character = {
                id: 1,
                name: 'Rick Sanchez',
                status: 'Alive',
                species: 'Human',
                gender: 'Male',
                origin: {
                   name: 'Earth (C-137)',
                   url: 'https://rickandmortyapi.com/api/location/1',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
             }

            const response = await request.post('/rickandmorty/fav')
            .send(character);  
            expect(response.body).toContainEqual(character)

        })

        it('Agrega otro personaje a favoritos y mantiene el/los que estaban', async () => {
            const character2 =  {
                id: 2,
                name: 'Morty Smith',
                status: 'Alive',
                species: 'Human',
                gender: 'Male',
                origin: {
                   name: 'unknown',
                   url: '',
                },
                image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
             }

            const response = await request.post('/rickandmorty/fav')
            .send(character2);  
            expect(response.body.length).toBe(2)

        })


    })

    // describe('DELETE /rickandmorty/fav/:id', () => {

    //     xit('En el caso de que no haya ningún personaje con el id enviado retorna un arreglo con los elementos previos sin modificar', async () => {
    //         const response = await request.delete('/rickandmorty/fav/999')
    //         expect(response.body.length).toBe(2)

    //     })

    //     xit('Cuando se envía un id válido se elimina correctamente al personaje', async () => {

    //         const response = await request.delete('/rickandmorty/fav/1')
    //         console.log(response.body);
    //         expect(response.body.length).toBe(1)
    //     })

    // })

})