import { render } from '@redwoodjs/testing/web'

import HomePageLayout from './HomePageLayout'

describe('HomePageLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HomePageLayout />)
    }).not.toThrow()
  })
})
