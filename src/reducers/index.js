import { getYearMonthDay } from '../logic/functions'
export let rootReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_DISPLAY_DATE':
            let { year, month } = action.payload
            return {
                ...state,
                displayDate: getYearMonthDay(new Date(year, month))
            }
        case 'SELECT_DAY':
            return { ...state, selectedDay: { ...action.payload } }
        default:
            return { ...state }
    }
}
