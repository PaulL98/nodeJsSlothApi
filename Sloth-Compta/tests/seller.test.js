const seller = require('../routes/seller.js');

describe('seller', ()=>{
    it('getAllSeller', async ()=>{
        await seller.getAllSeller().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Name');
            expect(jsonRes).toHaveProperty('LastName');
            expect(jsonRes).toHaveProperty('Id');

        })
     });

})