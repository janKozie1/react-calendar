import { dayNames, monthNames } from '../constants'

let getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate()
}

let getDayIndex = (year, month, day) => {
    let d = new Date(year, month, day)
    return { year: d.getFullYear(), month: d.getMonth(), day: d.getDate() }
}

let getDayArray = (year, month) => {
    let daysInPreviousMonth = getDaysInMonth(year, month - 1)
    let daysInCurrentMonth = getDaysInMonth(year, month)
    let firstDay = new Date(year, month, 1).getDay()

    return [...new Array(7 * 6)].map((_, i) =>
        i < firstDay
            ? getDayIndex(
                  year,
                  month - 1,
                  daysInPreviousMonth - firstDay + i + 1
              )
            : i - firstDay >= daysInCurrentMonth
            ? getDayIndex(
                  year,
                  month + 1,
                  i - daysInCurrentMonth - firstDay + 1
              )
            : getDayIndex(year, month, i - firstDay + 1)
    )
}
export let getDayName = (year, month, day) => {
    return dayNames[new Date(year, month, day).getDay()]
}
export let getMonthName = (year, month) => {
    return monthNames[new Date(year, month).getMonth()]
}

export let getMonthData = (
    year = new Date().getFullYear(),
    month = new Date().getMonth()
) => {
    //0 for january

    return getDayArray(year, month).map(e => {
        return {
            ...e,
            names: {
                day: getDayName(e.year, e.month, e.day),
                month: getMonthName(e.year, e.month)
            }
        }
    })
}

export let getYearMonthDay = (date = new Date()) => {
    return {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDate()
    }
}

export let getDayType = day => {
    day = day + ''
    if (/(?<!1)1$/.test(day)) return 'st'
    if (/(?<!1)2$/.test(day)) return 'nd'
    if (/(?<!1)3$/.test(day)) return 'rd'
    return 'th'
}

export let isThisDay = (day1, day2) => {
    return (
        day1.day === day2.day &&
        day1.month === day2.month &&
        day1.year === day2.year
    )
}
