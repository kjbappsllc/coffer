import * as Entities from '.'
import { expect } from 'chai'

describe("DOMAIN:ENTITIES", () => {
    it('Should export entity objects with the init key', (done) => {
        for( let e of Object.keys(Entities)) {
            expect(Entities[e].hasOwnProperty('init')).to.be.true
        }
        done()
    })

    it('Should export an income entity object with payperiod types', (done) => {
        expect(Entities.incomeSource.payPeriodTypes).to.exist
        expect(Entities.incomeSource.payPeriodTypes).to.be.frozen
        done()
    })

    it('Should export a budget entity object with budget types', (done) => {
        expect(Entities.budget.budgetTypes).to.exist
        expect(Entities.budget.budgetTypes).to.be.frozen
        done()
    })
})