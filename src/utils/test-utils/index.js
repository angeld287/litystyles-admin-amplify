// test-utils.js
import { render, queries } from '@testing-library/react'
import * as customQueries from './custom-queries'
import * as customFunctionalities from './functionalities';

const customRender = (ui, options) =>
    render(ui, { queries: { ...queries, ...customQueries, ...customFunctionalities }, ...options })

// re-export everything
export * from '@testing-library/react'

// override render method
export { customRender as render }