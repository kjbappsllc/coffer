import { createGroupEntity } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:group", () => {
    const validate = ({ group: t }) => t
    const { group: groupE } = createGroupEntity({ validate })

    it('Should return group object with correct default values and keys', (done) => {
        const group = groupE.init({})
        expect(group.$$type).to.be.equal('group')
        expect(group.funds).to.be.eql([])
        done()
    })

    it('Should return group object with correct keys when passed in', (done) => {
        const group = groupE.init({ 
            label: 'test',
            funds: ['test'],
            id: 1
        })

        expect(group.label).to.be.equal('test')
        expect(group.funds).to.be.eql(['test'])
        expect(group.$$type).to.be.equal('group')
        done()
    })
})