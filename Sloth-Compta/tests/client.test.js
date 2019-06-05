const client = require('../routes/client.js');

describe('client', ()=>{
    it('getAllClient', async ()=>{
        await client.getAllClient().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Name');
            expect(jsonRes).toHaveProperty('LastName');
            expect(jsonRes).toHaveProperty('Id');

        })
     });

})