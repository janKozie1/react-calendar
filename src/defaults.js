import { getRandomID, getYearMonthDay } from './logic/functions'

export let defaultEvents = [
    {
        _id: getRandomID(),
        title: 'Coding challenge',
        date: getYearMonthDay(new Date(2019, 7, 30)),
        hours: {
            start: '14:00',
            end: '14:50'
        },
        description: ''
    },
    {
        _id: getRandomID(),
        title: 'Exercise',
        date: getYearMonthDay(new Date(2019, 8, 27)),
        hours: {
            start: '16:30',
            end: '19:20'
        },
        description: ''
    },
    {
        _id: getRandomID(),
        title: 'Meeting',
        date: getYearMonthDay(new Date(2019, 8, 28)),
        hours: {
            start: '11:10',
            end: '12:05'
        },
        description: ''
    },

    {
        _id: getRandomID(),
        title: 'Dance practice',
        date: getYearMonthDay(new Date(2019, 8, 30)),
        hours: {
            start: '14:00',
            end: '14:50'
        },
        description: ''
    }
]

export let emptyEvent = {
    title: '',
    desc: '',
    date: {
        year: null,
        month: null,
        day: null
    },
    time: {
        start: '',
        end: ''
    }
}
