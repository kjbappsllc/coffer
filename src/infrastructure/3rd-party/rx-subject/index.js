import { Subject, ReplaySubject } from 'rxjs'
import { filter, map } from 'rxjs/operators'
import { rxjsSubject } from './implementations'

const { createSubject } = rxjsSubject({ Subject, ReplaySubject, filter, map })

export {
    createSubject
}