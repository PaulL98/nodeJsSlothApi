const expense = require('../routes/expense.js');

describe('expense', ()=>{
    it('getAllExpense', async ()=>{
        await expense.getAllExpense().then(result =>{
            const jsonRes = JSON.parse('{'+result.split('{').pop().split('}')[0]+'}');
            expect(jsonRes).toHaveProperty('Sum');
            expect(jsonRes).toHaveProperty('LastName');
            expect(jsonRes).toHaveProperty('Description');

        })
     });

})