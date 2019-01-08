
export const buildGroupObj = ({ validate }) => ({
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