import {addItem} from './ChecklistActions'
import {ADD_ITEM} from '../constants/ChecklistActionsTypes'

describe('Testing Checklist Actions', () => {
    it('returns an object wiht the initial state', () => {
        expect(addItem()).toMatchObject({
            type: ADD_ITEM,
            description: 'no description'
        })
    })

    it('returns an object with description populated', () => {
        let result = addItem('My new description');

        expect(result.type).toBe(ADD_ITEM)
        expect(result.description).toBe('My new description')
    })
})