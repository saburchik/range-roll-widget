import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

describe('Testing the feature', () => {
  test('The input must have the class: input__range & type: range', () => {
    render(<App />)
    const range = screen.getByTestId("range")
    expect(range).toHaveClass("input__range")
    expect(range).toHaveAttribute("type", "range")
    expect(range).toHaveValue("1")
  })

  test('Check out onClick/Value/Class active for styles', () => {
    render(<App />)
    // == Variables:
    const btn1 = screen.getByTestId("btn1")
    const btn2 = screen.getByTestId("btn2")
    const btn3 = screen.getByTestId("btn3")
    const btn4 = screen.getByTestId("btn4")
    const range = screen.getByTestId("range")

    // == onClicks:
    fireEvent.click(btn4)
    expect(range).toHaveValue("4")
    expect(btn4).toHaveClass("nav__btn active")

    fireEvent.click(btn3)
    expect(range).toHaveValue("3")
    expect(btn3).toHaveClass("nav__btn active")

    fireEvent.click(btn2)
    expect(range).toHaveValue("2")
    expect(btn2).toHaveClass("nav__btn active")

    fireEvent.click(btn1)
    expect(range).toHaveValue("1")
    expect(btn1).toHaveClass("nav__btn active")
  })
})