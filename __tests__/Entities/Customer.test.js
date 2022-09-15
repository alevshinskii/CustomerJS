import { expect, test } from '@jest/globals';
import Customer from '../../src/Entities/Customer';
import Address from '../../src/Entities/Address';

const customer = new Customer();

test('Should be able to create Customer', () => {
  expect(customer).toBeDefined();
});

test('Should be able to get/set firstName', () => {
  customer.firstName = 'name';
  expect(customer.firstName).toBe('name');
});

test('Should be able to get/set lastname', () => {
  customer.lastName = 'lastname';
  expect(customer.lastName).toBe('lastname');
});

test('Should be able to get/set email', () => {
  customer.email = 'email@gmail.com';
  expect(customer.email).toBe('email@gmail.com');
});

test('Should be able to get/set addresses', () => {
  const address = new Address();
  customer.addresses = [address, address];
  expect(customer.addresses.length).toBe(2);
});

test('Should be able to get/set phoneNumber', () => {
  customer.phoneNumber = '123456789012345';
  expect(customer.phoneNumber).toBe('123456789012345');
});

test('Should be able to get/set notes', () => {
  customer.notes = ['note 1', 'note 2'];
  expect(customer.notes.length).toBe(2);
});

test('Should be able to get/set totalPurchasesAmount', () => {
  customer.totalPurchasesAmount = 1000;
  expect(customer.totalPurchasesAmount).toBe(1000);
});

test('Should be able to get/set lastPurchaseDate', () => {
  customer.lastPurchaseDate = new Date('2022-01-01');
  expect(customer.lastPurchaseDate.getTime()).toBe(
    new Date('2022-01-01').getTime(),
  );
});

test('Should throw error if get/set invalid firstName', () => {
  expect(() => (customer.firstName = 1)).toThrowError(TypeError);
});

test('Should throw error if get/set invalid lastName', () => {
  expect(() => (customer.lastName = 1)).toThrowError(TypeError);
});

test('Should throw error if get/set invalid email', () => {
  expect(() => (customer.email = 1)).toThrowError(TypeError);
});

test('Should throw error if get/set invalid addresses', () => {
  expect(() => (customer.addresses = 1)).toThrowError(TypeError);
  expect(() => (customer.addresses = [1, 1])).toThrowError(TypeError);
});

test('Should throw error if get/set invalid phoneNumber', () => {
  expect(() => (customer.phoneNumber = [1, 1])).toThrowError(TypeError);
});

test('Should throw error if get/set invalid notes', () => {
  expect(() => (customer.notes = 1)).toThrowError(TypeError);
  expect(() => (customer.notes = [1, 1])).toThrowError(TypeError);
});

test('Should throw error if get/set invalid totalPurchasesAmount', () => {
  expect(
    () => (customer.totalPurchasesAmount = 'totalPurchasesAmount'),
  ).toThrowError(TypeError);
});

test('Should throw error if get/set invalid lastPurchaseDate', () => {
  expect(() => (customer.lastPurchaseDate = 'lastPurchaseDate')).toThrowError(
    TypeError,
  );
});
