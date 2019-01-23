import { createBudgetEntity } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:budget", () => {
    const validate = ({ budget: t }) => t
    const createUUID = () => 1
    const { budget: budgetE } = createBudgetEntity({ validate, createUUID })

    it('Should return budget object with correct default values and keys', (done) => {
        const budget = budgetE.init({})
        expect(budget._id).to.be.equal(1)
        expect(budget.groups).to.be.eql([])
        done()
    })

    it('Should return budget object with correct keys when passed in', (done) => {
        const budget = budgetE.init({ 
            title: 'test',
            budgetType: 'test-type'
        })

        expect(budget.title).to.be.equal('test')
        expect(budget.budgetType).to.be.equal('test-type')
        expect(budget._id).to.be.equal(1)
        done()
    })
})