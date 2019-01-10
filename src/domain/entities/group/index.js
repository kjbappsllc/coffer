
export const createGroupEntity = ({ validate }) => ({
    group: {
        init: ({
            label,
            id,
            funds = []
        }) => validate({
            group: {
                label,
                funds,
                id,
                $$type: 'group'
            }
        })
    }
})