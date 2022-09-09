/* eslint-disable no-undef */
import Address from '../../src/Entities/Address'

const address = new Address()
test('Should be able to create Address', () => {
    expect(address).toBeDefined()
})

address.addressLine = 'new line 1'
test('Should be able to get/set addressLine', () => {
    expect(address.addressLine).toBe('new line 1')
})

address.addressLine2 = 'new line 2'
test('Should be able to get/set addressLine2', () => {
    expect(address.addressLine2).toBe('new line 2')
})

address.addressType = 1
test('Should be able to get/set addressType', () => {
    expect(address.addressType).toBe(1)
})

address.city = 'City'
test('Should be able to get/set city', () => {
    expect(address.city).toBe('City')
})

address.postalCode = '123456'
test('Should be able to get/set postalCode', () => {
    expect(address.postalCode).toBe('123456')
})

address.state = 'State'
test('Should be able to get/set state', () => {
    expect(address.state).toBe('State')
})

address.country = 'United States'
test('Should be able to get/set country', () => {
    expect(address.country).toBe('United States')
})
