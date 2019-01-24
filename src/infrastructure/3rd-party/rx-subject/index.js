import { Subject } from 'rxjs'
import { filter } from 'rxjs/operators'
import { rxjsSubject } from './implementations'

const { createSubject } = rxjsSubject({ Subject, filter })

export {
    createSubject
}