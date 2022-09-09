/* eslint-disable no-undef */
const Customer = require('../../src/Entities/Customer')
const Address = require('../../src/Entities/Address')

const customer = new Customer()

test('Should be able to create Customer', () => {
    expect(customer).toBeDefined()
})

customer.firstName = 'name'

test('Should be able to get/set firstName', () => {
    expect(customer.firstName).toBe('name')
})

customer.lastName = 'lastname'

test('Should be able to get/set lastname', () => {
    expect(customer.lastName).toBe('lastname')
})

customer.email = 'email@gmail.com'

test('Should be able to get/set email', () => {
    expect(customer.email).toBe('email@gmail.com')
})

const address = new Address()
customer.addresses = [address, address]

test('Should be able to get/set addresses', () => {
    expect(customer.addresses.length).toBe(2)
})

customer.phoneNumber = '123456789012345'

test('Should be able to get/set phoneNumber', () => {
    expect(customer.phoneNumber).toBe('123456789012345')
})

customer.notes = ['note 1', 'note 2']

test('Should be able to get/set notes', () => {
    expect(customer.notes.length).toBe(2)
})

customer.totalPurchasesAmount = 1000

test('Should be able to get/set totalPurchasesAmount', () => {
    expect(customer.totalPurchasesAmount).toBe(1000)
})

customer.lastPurchaseDate = new Date('2022-01-01')

test('Should be able to get/set lastPurchaseDate', () => {
    expect(customer.lastPurchaseDate.value).toBe(new Date('2022-01-01').value)
})
