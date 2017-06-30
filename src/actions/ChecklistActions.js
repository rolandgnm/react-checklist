import {
    ADD_ITEM
} from '../constants/ChecklistActionsTypes'

export const addItem = (description='no description', listName='') => {
    return {
        type: ADD_ITEM,
        description,
        listName
    }
}

 