const stock = require('../routes/stock.js');

describe('stock', ()=>{
    it('getAllStock', async ()=>{
        await stock.getAllStock().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Name');
            expect(jsonRes).toHaveProperty('LastName');
            expect(jsonRes).toHaveProperty('Size');
            expect(jsonRes).toHaveProperty('Quantity');
        })
     });

     it('getAllCurrentStock', async ()=>{
        await stock.getAllCurrentStock().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Name');
            expect(jsonRes).toHaveProperty('LastName');
            expect(jsonRes).toHaveProperty('Size');
            expect(jsonRes).toHaveProperty('Quantity');
        })
     });

})