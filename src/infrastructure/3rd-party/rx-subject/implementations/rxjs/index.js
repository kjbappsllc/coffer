
export const rxjsSubject = ({
    Subject,
    filter: rxjsFilter
}) => ({
    createSubject: () => {
        const sub = new Subject()
        const filter = condition => cb => sub.pipe(rxjsFilter(condition)).subscribe(cb)
        const subscription = cb => sub.subscribe(cb)
        const next = val => sub.next(val)
        return {
            filter,
            subscription,
            next
        }
    }
})