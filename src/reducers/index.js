import { getYearMonthDay, getRandomID, sortByDate } from '../logic/functions'
export let rootReducer = (state, { type, payload }) => {
    switch (type) {
        case 'CHANGE_DISPLAY_DATE':
            let { year, month } = payload
            return {
                ...state,
                displayDate: getYearMonthDay(new Date(year, month))
            }
        case 'SELECT_DAY':
            return { ...state, selectedDay: { ...payload } }
        case 'SHOW_EVENT_DETAILS':
            return {
                ...state,
                eventDetailsOpen: true,
                selectedEvent: payload
            }
        case 'HIDE_EVENT_DETAILS':
            return {
                ...state,
                eventDetailsOpen: false
            }
        case 'UPDATE_EVENT':
            return {
                ...state,
                events: [
                    ...state.events
                        .map(e => (e._id === payload._id ? payload : e))
                        .sort(sortByDate)
                ],
                eventDetailsOpen: false
            }
        case 'CREATE_EVENT':
            return {
                ...state,
                events: [
                    ...[
                        ...state.events,
                        { ...payload, _id: getRandomID() }
                    ].sort(sortByDate)
                ],
                eventDetailsOpen: false
            }
        case 'DELETE_EVENT':
            return {
                ...state,
                events: state.events.filter(e => e._id !== payload),
                eventDetailsOpen: false
            }

        default:
            return { ...state }
    }
}
