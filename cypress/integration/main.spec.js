/* eslint-disable no-undef */
/// <reference types="cypress" />

const format = (date) => {
  const parts = Intl.DateTimeFormat('en-GB', { dateStyle: 'full' }).formatToParts(date)
  return parts.reduce((acc, curr) => ({ ...acc, [curr.type]: curr.value }), {})
}

const regex = (text) => {
  return new RegExp(text, 'i')
}

const advanceByDays = (days) => {
  return new Date(Date.now() + 1000 * 60 * 60 * 24 * days)
}

describe('TodoApp', () => {
  const calendar = '[data-testid=calendar]'
  const dayInfo = '[data-testid=day-info]'

  const skipMonthsBy = (amount) => {
    const element = amount > 0 ? cy.get('[aria-label="next month"]') : cy.get('[aria-label="previous month"]')
    Array.from({ length: Math.abs(amount) }).forEach(() => {
      element.click()
    })
  }

  beforeEach(() => {
    cy.visit('/')
  })

  describe('calendar', () => {
    it('can toggle months', () => {
      const { year, weekday, month } = format(new Date())
      const { month: nextMonth } = format(advanceByDays(30))
      const { month: previousMonth } = format(advanceByDays(-30))
      const { year: nextYear } = format(advanceByDays(366))

      cy.get('#root').should('be.visible')
      cy.get(calendar).findByText(regex(year)).should('exist')

      cy.get(dayInfo).findByText(regex(weekday)).should('exist')
      cy.get(dayInfo).findByText(regex(month)).should('exist')

      skipMonthsBy(1)
      cy.get(calendar).findByText(regex(nextMonth)).should('exist')

      skipMonthsBy(-2)
      cy.get(calendar).findByText(regex(previousMonth)).should('exist')

      skipMonthsBy(12)
      cy.get(calendar).findByText(regex(nextYear)).should('exist')
    })

    it('can select days', () => {
      const { day, weekday } = format(new Date())
      const { day: dayAfter, weekday: weekdayAfter } = format(advanceByDays(1))

      cy.get('[aria-label="selected day"]').findByText(regex(day)).should('exist')
      cy.get(dayInfo).findByText(regex(weekday)).should('exist')

      cy.get(calendar).findByText(regex(dayAfter)).click()

      cy.get('[aria-label="selected day"]').findByText(regex(dayAfter)).should('exist')
      cy.get(dayInfo).findByText(regex(weekdayAfter)).should('exist')
    })
  })

  describe('events', () => {
    const newEventButton = '[aria-label="add new event"]'
    const eventList = '[aria-label="event list"]'
    const todoTitleInput = 'input#title'

    it('can add and remove', () => {
      cy.get(newEventButton).should('exist')
      cy.get(eventList).should('be.empty')

      cy.findByText(regex('title')).should('not.be.visible')

      cy.get(newEventButton).click()
      cy.get(todoTitleInput).should('be.visible')

      cy.findByText(regex('title')).click().type('my new todo')
      cy.findByText(regex('save')).click()

      cy.get(eventList).should('not.be.empty')
      cy.findByText(regex('title')).should('not.be.visible')

      cy.get(eventList).findByText('my new todo').should('exist').click()
      cy.get('[aria-label="delete event"').click()

      cy.get(eventList).should('be.empty')
    })
  })
})
