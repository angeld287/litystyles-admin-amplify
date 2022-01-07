import { queryHelpers, buildQueries } from '@testing-library/react'

// The queryAllByAttribute is a shortcut for attribute-based matchers
// You can also use document.querySelector or a combination of existing
// testing library utilities to find matching nodes for your query
const queryAllByDataCy = (...args) =>
    queryHelpers.queryAllByAttribute('data-cy', ...args)

const queryAllByAriaOwns = (...args) =>
    queryHelpers.queryAllByAttribute('aria-owns', ...args)

const queryAllByClass = (...args) =>
    queryHelpers.queryAllByAttribute('class', ...args)

const queryAllByType = (...args) =>
    queryHelpers.queryAllByAttribute('type', ...args)

const getMultipleError = (c, value) =>
    `Found multiple elements with the attribute: ${value}`
const getMissingError = (c, value) =>
    `Unable to find an element with the attribute: ${value}`

const [
    queryByDataCy,
    getAllByDataCy,
    getByDataCy,
    findAllByDataCy,
    findByDataCy,
] = buildQueries(queryAllByDataCy, getMultipleError, getMissingError)

const [
    queryByClass,
    getAllByClass,
    getByClass,
    findAllByClass,
    findByClass,
] = buildQueries(queryAllByClass, getMultipleError, getMissingError)

const [
    queryByAriaOwns,
    getAllByAriaOwns,
    getByAriaOwns,
    findAllByAriaOwns,
    findByAriaOwns,
] = buildQueries(queryAllByAriaOwns, getMultipleError, getMissingError)

const [
    queryByType,
    getAllByType,
    getByType,
    findAllByType,
    findByType,
] = buildQueries(queryAllByType, getMultipleError, getMissingError)

export {
    queryByDataCy,
    queryAllByDataCy,
    getByDataCy,
    getAllByDataCy,
    findAllByDataCy,
    findByDataCy,
    getAllByAriaOwns,
    queryByAriaOwns,
    getByAriaOwns,
    findAllByAriaOwns,
    findByAriaOwns,
    queryAllByAriaOwns,
    queryByClass,
    getAllByClass,
    getByClass,
    findAllByClass,
    findByClass,
    queryAllByClass,
    queryByType,
    getAllByType,
    getByType,
    findAllByType,
    findByType,
}