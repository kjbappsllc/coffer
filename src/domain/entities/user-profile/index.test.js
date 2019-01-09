import { buildUserProfileObj } from "."
import { expect } from 'chai'


describe("DOMAIN:ENTITY:user-profile", () => {
    const validate = ({ userProfile: up }) => up
    const createUserProfile = buildUserProfileObj({ validate })

    it('Should return user profile object with correct default values and keys', (done) => {
        const userProfile = createUserProfile({ name: 'test' })
        expect(userProfile.name).to.be.equal('test')
        expect(userProfile.balance).to.be.equal(0)
        expect(userProfile.pastLocations).to.be.eql([])
        expect(userProfile.incomeSources).to.be.eql([])
        expect(userProfile.$$type).to.be.equal('userProfile')
        done()
    })

    it('Should return user profile object with correct keys when passed in', (done) => {

        const userProfile = createUserProfile({ 
            name: 'test',
            balance: 1000,
            pastLocations: ['target'],
            incomeSources: ['incomeSource']
        })

        expect(userProfile.name).to.be.equal('test')
        expect(userProfile.balance).to.be.equal(1000)
        expect(userProfile.pastLocations).to.be.eql(['target'])
        expect(userProfile.incomeSources).to.be.eql(['incomeSource'])
        expect(userProfile.$$type).to.be.equal('userProfile')
        done()
    })
})