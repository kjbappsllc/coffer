
export const rxjsSubject = ({
    Subject,
    ReplaySubject,
    filter: rxjsFilter,
    map: rxjsMap
}) => {
    const createProperties = ({
        subjectType: sub
    }) => {
        const filter = condition => cb => sub.pipe(rxjsFilter(condition)).subscribe(cb)
        const subscription = cb => sub.subscribe(cb)
        const next = val => sub.next(val)
        const map = props => cb => sub.pipe(rxjsMap(props)).subscribe(cb)
        return {
            filter,
            subscription,
            next,
            map
        }
    }
    return {
        standard: () => {
            const subjectType = new Subject()
            return createProperties({ subjectType })
        },
        replay: ({ replays }) => {
            const subjectType = new ReplaySubject(replays)
            return createProperties({ subjectType })
        }
    }
}