import { createBudgetEntity } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:budget", () => {
    const validate = ({ budget: t }) => t
    const { budget: budgetE } = createBudgetEntity({ validate })

    it('Should return budget object with correct default values and keys', (done) => {
        const budget = budgetE.init({})
        expect(budget.$$type).to.be.equal('budget')
        expect(budget.groups).to.be.eql([])
        done()
    })

    it('Should return budget object with correct keys when passed in', (done) => {
        const budget = budgetE.init({ 
            title: 'test',
            budgetType: 'test-type',
            id: 1
        })

        expect(budget.title).to.be.equal('test')
        expect(budget.budgetType).to.be.equal('test-type')
        expect(budget.id).to.be.eql(1)
        expect(budget.$$type).to.be.equal('budget')
        done()
    })
})