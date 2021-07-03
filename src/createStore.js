const INIT = '@@INIT';

const createStore = (reducer) => {
    const listeners = [];

    let state;

    const getState = () => {
        return state;
    };

    const dispatch = (action) => {
        state = reducer(getState(), action);

        listeners.forEach(listener => listener());
    };

    const subscribe = (listener) => {
        listeners.push(listener);

        return () => {
            const index = listeners.indexOf(listener);

            listeners.splice(index, 1);
        };
    };

    dispatch({type: INIT});

    return {
        getState,
        dispatch,
        subscribe,
    };
};

export default createStore;
