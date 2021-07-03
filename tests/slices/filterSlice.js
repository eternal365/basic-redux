const TOGGLE_VISIBILITY = 'filter/toggleVisibility';

export const toggleVisibility = () => ({
    type: TOGGLE_VISIBILITY,
});

const initialState = 'all';

export const filterReducer = (filter = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBILITY:
            return (filter === 'all') ? 'completed' : 'all';

        default:
            return filter;
    }
};
