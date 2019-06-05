const compta = require('../routes/compta.js');

describe('comtpa', ()=>{
    it('getSellerCompta', async ()=>{
        await compta.getSellerCompta().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Name');
            expect(jsonRes).toHaveProperty('LastName');
            expect(jsonRes).toHaveProperty('SumPayment');
            expect(jsonRes).toHaveProperty('SumExpense');
            expect(jsonRes).toHaveProperty('SumSale');

        })
     });

     it('getModelCompta', async  ()=>{
        await compta.getModelCompta().then(result =>{
          const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
             expect(jsonRes).toHaveProperty('Name');
             expect(jsonRes).toHaveProperty('Income');
        });
          
     });

     it('getCompta',  async ()=>{
        await compta.getCompta().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('SaleIncome');
             expect(jsonRes).toHaveProperty('Expense');
             expect(jsonRes).toHaveProperty('MarchandisePrice');
             expect(jsonRes).toHaveProperty('Payment');
        })
     });

})