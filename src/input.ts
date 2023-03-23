//module used by reduxstore

export interface Input {
    value: string
}

interface ActionType {
    type: string,
    payload: string
}

const inputState = {
    value: ''
} as Input

//action creator function
 export const createInputAction = (inputValue: string) => {
    return {
        type: 'input/valueChanged',
        payload: inputValue
    } as ActionType
}

export default function inputReducer(state = inputState, inputAction: ActionType) {
    // Check to see if the reducer cares about this action
    if (inputAction.type === 'input/valueChanged') {
        // If so, make a copy of `state`
        return {
            ...state,
            // and update the copy with the new value
            value: inputAction.payload
        }
    }
    // otherwise return the existing state unchanged
    return state
}
