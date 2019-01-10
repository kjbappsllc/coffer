import { createIncomeSourceEntity } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:incomeSource", () => {
    const validate = ({ incomeSource: is, payPeriodTypes: {} }) => is
    const { incomeSource: incomeSourceE } = createIncomeSourceEntity({ validate })

    it('Should return income source object with correct default values and keys', (done) => {
        const incomeSource = incomeSourceE.init({})
        expect(incomeSource.$$type).to.be.equal('incomeSource')
        expect(incomeSource.isManual).to.be.true
        expect(incomeSource.payPeriodType).to.be.null
        expect(incomeSource.nextPayDate).to.be.null
        done()
    })

    it('Should return income source object with correct keys when passed in', (done) => {
        const incomeSource = incomeSourceE.init({ 
            label: 'test',
            amount: 1000,
            id: 1
        })

        expect(incomeSource.label).to.be.equal('test')
        expect(incomeSource.amount).to.be.equal(1000)
        expect(incomeSource.id).to.be.eql(1)
        expect(incomeSource.$$type).to.be.equal('incomeSource')
        done()
    })
})