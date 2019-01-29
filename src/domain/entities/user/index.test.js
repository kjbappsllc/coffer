import { createUserEntity } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:user", () => {
    const validate = ({ userProfile: up }) => up
    const { user } = createUserEntity({ validate })
   
    it('Should return user profile object with correct default values and keys', (done) => {
        const profile = user.init({ name: 'test' })
        expect(profile.name).to.be.equal('test')
        expect(profile.balance).to.be.equal(0)
        expect(profile.pastLocations).to.be.eql([])
        expect(profile.incomeSources).to.be.eql([])
        expect(profile.$$type).to.be.equal('userProfile')
        done()
    })

    it('Should return user profile object with correct keys when passed in', (done) => {

        const profile = user.init({
            name: 'test',
            balance: 1000,
            pastLocations: ['target'],
            incomeSources: ['incomeSource']
        })

        expect(profile.name).to.be.equal('test')
        expect(profile.balance).to.be.equal(1000)
        expect(profile.pastLocations).to.be.eql(['target'])
        expect(profile.incomeSources).to.be.eql(['incomeSource'])
        expect(profile.$$type).to.be.equal('userProfile')
        done()
    })
})