
export const rxjsSubject = ({
    Subject,
    filter: rxjsFilter,
    map: rxjsMap,
    distinct
}) => ({
    createSubject: () => {
        const sub = new Subject()
        const filter = condition => cb => sub.pipe(rxjsFilter(condition)).subscribe(cb)
        const subscription = cb => sub.subscribe(cb)
        const next = val => sub.next(val)
        const map = cb => sub.pipe( rxjsMap(cb), distinct() )
        return {
            filter,
            subscription,
            next,
            map
        }
    }
})