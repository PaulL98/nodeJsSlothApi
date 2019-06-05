const model = require('../routes/model.js');

describe('model', ()=>{
    it('getAllModel', async ()=>{
        await model.getAllModel().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Name');
            expect(jsonRes).toHaveProperty('TotalProduction');
            expect(jsonRes).toHaveProperty('TotalPrice');

        })
     });

})