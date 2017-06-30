// {
//     items: [
//         {
//             description: '',
//             checked: bool
//         },
//     ]
// }

import {ADD_ITEM} from '../constants/ChecklistActionsTypes'

const initialState = [];

export const items = (state = initialState, action) => {
    switch (action.type) {
        case ADD_ITEM:
        
            return [
                    ...state,
                    {
                        description: action.description,
                        checked: false,
                        listName: action.listName
                    }
                ]
        default:
            return state
    }
}