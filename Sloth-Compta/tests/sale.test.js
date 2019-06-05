const sale = require('../routes/sale.js');

describe('model', ()=>{
    it('getAllModel', async ()=>{
        await sale.getAllSale().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Seller');
            expect(jsonRes).toHaveProperty('LastName');
            expect(jsonRes).toHaveProperty('Name');
            expect(jsonRes).toHaveProperty('Model');
            expect(jsonRes).toHaveProperty('Size');
            expect(jsonRes).toHaveProperty('Quantity');
            expect(jsonRes).toHaveProperty('Price');
        })
     });

})