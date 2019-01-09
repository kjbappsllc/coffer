import { buildTransactionObj } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:transaction", () => {
    const validate = ({ transaction: t }) => t
    const createTransaction = buildTransactionObj({ validate })

    it('Should return user profile object with correct default values and keys', (done) => {
        const transaction = createTransaction({})
        expect(transaction.$$type).to.be.equal('transaction')
        done()
    })

    it('Should return user profile object with correct keys when passed in', (done) => {
        const date = new Date()
        const transaction = createTransaction({ 
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