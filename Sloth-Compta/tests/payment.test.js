const payment = require('../routes/payment.js');

describe('payment', ()=>{
    it('getAllPayment', async ()=>{
        await payment.getAllPayment().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Sum');
            expect(jsonRes).toHaveProperty('LastName');
            expect(jsonRes).toHaveProperty('Description');

        })
     });

})