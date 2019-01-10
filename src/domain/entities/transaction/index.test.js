import { createTransactionEntity } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:transaction", () => {
    const validate = ({ transaction: t }) => t
    const { transaction: transactionE } = createTransactionEntity({ validate })

    it('Should return transaction object with correct default values and keys', (done) => {
        const transaction = transactionE.init({})
        expect(transaction.$$type).to.be.equal('transaction')
        done()
    })

    it('Should return transaction object with correct keys when passed in', (done) => {
        const date = new Date()
        const transaction = transactionE.init({ 
            date,
            amount: 1000,
            fund: 'Test',
            location: 'target',
            id: 1
        })

        expect(transaction.date).to.be.equal(date)
        expect(transaction.amount).to.be.equal(1000)
        expect(transaction.fund).to.be.equal('Test')
        expect(transaction.id).to.be.eql(1)
        expect(transaction.$$type).to.be.equal('transaction')
        done()
    })
})