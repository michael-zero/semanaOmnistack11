const request = require('supertest');
const app = require('../../src/app');

const connection = require('../../src/database/connection');



describe('ONG', () =>{
    beforeEach(async ()=>{
        // await connection.migrate.rollback();
        await connection.migrate.latest();
    });


    afterAll(async ()=>{
        await connection.destroy();
    });


    it('should be able to create new ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
            name: "MLM",
            email: "zeromichael98@gmail.com",
            whatsapp:"1234567891",
            city: "Timon",
            uf: "MA"
        });

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });
});