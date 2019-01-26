import { Subject } from 'rxjs'
import { filter, map, distinct } from 'rxjs/operators'
import { rxjsSubject } from './implementations'

const { createSubject } = rxjsSubject({ Subject, filter, map, distinct })

export {
    createSubject
}