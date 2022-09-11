import CustomerValidator from '../../src/Validators/CustomerValidator'
import Customer from '../../src/Entities/Customer'
import { test, expect } from '@jest/globals'
import { Random } from 'random-test-values'
import Address from '../../src/Entities/Address'

test('Should be able to use CustomerValidator', () => {
    expect(CustomerValidator.Validate(new Customer())).toBeDefined()
})
const address = new Address()
const validCustomer = new Customer()
validCustomer.firstName = 'first name'
validCustomer.lastName = 'last name'
validCustomer.addresses = [address, address]
validCustomer.phoneNumber = '123456789012345'
validCustomer.email = 'email@gmail.com'
validCustomer.notes = ['new note']
validCustomer.totalPurchasesAmount = 1000
validCustomer.lastPurchaseDate = new Date(2022, 1, 1)

test('Should be able to get no errors validating valid customer', () => {
    expect(CustomerValidator.Validate(validCustomer).length).toBe(0)
})

test('Should be able to validate too long firstName field', () => {
    const invalidCustomer = validCustomer
    invalidCustomer.firstName = Random.String({ minLength: 51 })
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'firstName is too long'
    )
})

test('Should be able to validate required lastName field', () => {
    const invalidCustomer = validCustomer
    invalidCustomer.lastName = null
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'lastName is required field'
    )
})

test('Should be able to validate too long lastName field', () => {
    const invalidCustomer = validCustomer
    invalidCustomer.lastName = Random.String({ minLength: 51 })
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'lastName is too long'
    )
})

test('Should be able to validate addresses', () => {
    expect(CustomerValidator.Validate(validCustomer)).not.toContain(
        'addresses list should contain at least 1 address'
    )

    const invalidCustomer = validCustomer
    invalidCustomer.addresses = []
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'addresses list should contain at least 1 address'
    )
})

test('Should be able to validate too long phoneNumber field', () => {
    const invalidCustomer = validCustomer
    invalidCustomer.phoneNumber = Random.String({
        whiteListString: '0123456789',
        minLength: 16,
    })
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'phoneNumber is too long'
    )
})

test('Should be able to validate phoneNumber field', () => {
    const invalidCustomer = validCustomer
    invalidCustomer.phoneNumber = Random.String({
        blackListString: '0123456789',
        minLength: 1,
        maxLength: 15,
    })
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'phoneNumber should contain digits only'
    )
})

test('Should be able to validate correct email field', () => {
    const invalidCustomer = validCustomer
    invalidCustomer.phoneNumber = Random.RegexString(/\w+@\w+.\w+/)
    expect(CustomerValidator.Validate(invalidCustomer)).not.toContain(
        'email is not valid'
    )
})

test('Should be able to validate incorrect email field', () => {
    const invalidCustomer = validCustomer
    invalidCustomer.email = 'just a string'
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'email is not valid'
    )
})

test('Should be able to validate notes', () => {
    const invalidCustomer = validCustomer
    expect(CustomerValidator.Validate(invalidCustomer)).not.toContain(
        'notes list should contain at least 1 note'
    )

    invalidCustomer.notes = []
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'notes list should contain at least 1 note'
    )
})

test('Should be able to validate totalPurchasesAmount field', () => {
    expect(CustomerValidator.Validate(validCustomer)).not.toContain(
        'totalPurchasesAmount is not valid'
    )

    validCustomer.totalPurchasesAmount = null
    expect(CustomerValidator.Validate(validCustomer)).not.toContain(
        'totalPurchasesAmount is not valid'
    )

    const invalidCustomer = validCustomer
    invalidCustomer.totalPurchasesAmount = -1
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'totalPurchasesAmount is not valid'
    )
})

test('Should be able to validate lastPurchaseDate field', () => {
    expect(CustomerValidator.Validate(validCustomer)).not.toContain(
        'lastPurchaseDate is not valid'
    )

    validCustomer.lastPurchaseDate = null
    expect(CustomerValidator.Validate(validCustomer)).not.toContain(
        'lastPurchaseDate is not valid'
    )

    const invalidCustomer = validCustomer
    invalidCustomer.lastPurchaseDate = new Date(2019, 12, 31)
    expect(CustomerValidator.Validate(invalidCustomer)).toContain(
        'lastPurchaseDate is not valid'
    )
})
