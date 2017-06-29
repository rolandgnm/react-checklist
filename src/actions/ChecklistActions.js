import {
    ADD_ITEM
} from '../constants/ChecklistActionsTypes'

export const addItem = (description='no description') => {
    return {
        type: ADD_ITEM,
        description: description
    }
}

 