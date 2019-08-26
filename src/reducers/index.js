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
        case 'SHOW_EVENT_DETAILS':
            return {
                ...state,
                eventDetailsOpen: true,
                selectedEvent: action.payload
            }
        case 'HIDE_EVENT_DETAILS':
            return {
                ...state,
                eventDetailsOpen: false
            }
        default:
            return { ...state }
    }
}
