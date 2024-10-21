import { useState , useEffect } from "react";

let globalState = {};
let listeners = []; //list of function that can be used to call and update the components that are using this hook
let actions = {};

export const useStore = () => {
    const setState = useState(globalState)[1];

    const dispatch = actionIdentifier => {
        const newState = actions[actionIdentifier](globalState)
        globalState = {...globalState, ...newState};

        for(const listener of listeners) {
            listener(globalState);
        }
    }

    useEffect(() => {
        listeners.push(setState)

        return () => {
            listeners = listeners.filter(li => li !== setState);
        }
    }, [setState])
    
    return [globalState, dispatch];
};

export const initStore = (userActions, initialState) => {
    if(initialState) {
        globalState = {...globalState, ...initialState};
    }
    actions = {...actions, ...userActions};
}