import * as Entities from '.'
import { expect } from 'chai'

describe("DOMAIN:ENTITIES", () => {
    it('Should export entity objects with the init key', (done) => {
        for( let e of Object.keys(Entities)) {
            expect(Entities[e].hasOwnProperty('init'))
        }
        done()
    })
})