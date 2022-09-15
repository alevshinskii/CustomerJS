import { expect, test } from '@jest/globals';
import Address from '../../src/Entities/Address';

const address = new Address();
test('Should be able to create Address', () => {
  expect(address).toBeDefined();
});

test('Should be able to get/set addressLine', () => {
  address.addressLine = 'new line 1';
  expect(address.addressLine).toBe('new line 1');
});

test('Should be able to get/set addressLine2', () => {
  address.addressLine2 = 'new line 2';
  expect(address.addressLine2).toBe('new line 2');
});

test('Should be able to get/set addressType', () => {
  address.addressType = 1;
  expect(address.addressType).toBe(1);
});

test('Should be able to get/set city', () => {
  address.city = 'City';
  expect(address.city).toBe('City');
});

test('Should be able to get/set postalCode', () => {
  address.postalCode = '123456';
  expect(address.postalCode).toBe('123456');
});

test('Should be able to get/set state', () => {
  address.state = 'State';
  expect(address.state).toBe('State');
});

test('Should be able to get/set country', () => {
  address.country = 'United States';
  expect(address.country).toBe('United States');
});

test('Should throw error if get/set invalid addressLine', () => {
  expect(() => (address.addressLine = 1)).toThrowError(TypeError);
});

test('Should throw error if get/set invalid addressLine2', () => {
  expect(() => (address.addressLine2 = 1)).toThrowError(TypeError);
});

test('Should throw error if get/set invalid addressType', () => {
  expect(() => (address.addressType = '1')).toThrowError(TypeError);
});

test('Should throw error if get/set invalid city', () => {
  expect(() => (address.city = 1)).toThrowError(TypeError);
});

test('Should throw error if get/set invalid postalCode', () => {
  expect(() => (address.postalCode = 1)).toThrowError(TypeError);
});

test('Should throw error if get/set invalid state', () => {
  expect(() => (address.state = 1)).toThrowError(TypeError);
});

test('Should throw error if get/set invalid country', () => {
  expect(() => (address.country = 1)).toThrowError(TypeError);
});
