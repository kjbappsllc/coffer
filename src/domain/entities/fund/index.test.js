import { createFundEntity } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:fund", () => {
    const validate = ({ fund: t }) => t
    const { fund: fundE } = createFundEntity({ validate })

    it('Should return fund object with correct default values and keys', (done) => {
        const fund = fundE.init({})
        expect(fund.$$type).to.be.equal('fund')
        expect(fund.allocAmount).to.be.equal(0)
        expect(fund.isRecurrent).to.be.false
        expect(fund.balance).to.be.equal(0)
        done()
    })

    it('Should return fund object with correct keys when passed in', (done) => {
        const fund = fundE.init({ 
            label: 'test',
            allocAmount: 100,
            isRecurrent: true,
            id: 1
        })

        expect(fund.label).to.be.equal('test')
        expect(fund.allocAmount).to.be.equal(100)
        expect(fund.isRecurrent).to.be.true
        expect(fund.id).to.be.eql(1)
        expect(fund.$$type).to.be.equal('fund')
        done()
    })
})