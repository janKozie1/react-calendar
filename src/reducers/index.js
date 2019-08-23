import { getYearMonthDay } from '../logic/functions'
export let rootReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_DISPLAY_DATE':
            let { year, month } = action.payload
            return {
                ...state,
                displayDate: getYearMonthDay(new Date(year, month))
            }
        default:
            return { ...state }
    }
}
