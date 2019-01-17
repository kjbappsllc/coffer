export const createGuid = () => ('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
    let dt = new Date().getTime();
    const r = (dt + Math.random() * 16) % 16 | 0;
    dt = Math.floor(dt / 16);
    const v = c === 'x' ? r : ((r & 0x3) | 0x8);
    return v.toString(16);
})
)