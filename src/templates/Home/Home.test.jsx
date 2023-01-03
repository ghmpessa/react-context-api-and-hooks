import { render, screen } from '@testing-library/react'
import { Home } from '.'
import { CounterContextProvider } from '../../contexts/CounterContext'

test('renders learn react link', () => {
  render(
    <CounterContextProvider>
      <Home />
    </CounterContextProvider>
  )
  // const linkElement = screen.getByText(/o/i)
  // expect(linkElement).toBeInTheDocument()
})
