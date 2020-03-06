
export const addMatome = (title) => ({
    type: 'ADD',
    payload: {
        title
    }
});

export const resetMatome = () => ({
    type: 'RESET',
});