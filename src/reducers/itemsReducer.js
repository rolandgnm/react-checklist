// {
//     items: [
//         {
//             description: '',
//             checked: bool
//         },
//     ]
// }

import {ADD_ITEM} from '../constants/ChecklistActionsTypes'

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_ITEM:
            return [
                    ...state,
                    {
                        description: action.description,
                        checked: false
                    }
                ]
        default:
            return state
    }
}