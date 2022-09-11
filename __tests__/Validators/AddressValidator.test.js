import { test, expect } from '@jest/globals';
import { Random } from 'random-test-values';
import AddressValidator from '../../src/Validators/AddressValidator';
import Address from '../../src/Entities/Address';

test('Should be able to use AddressValidator', () => {
  expect(AddressValidator.Validate(new Address())).toBeDefined();
});

const validAddress = new Address();
validAddress.addressLine = 'new line';
validAddress.addressLine2 = 'new line 2';
validAddress.addressType = 1;
validAddress.postalCode = '123456';
validAddress.city = 'City';
validAddress.country = 'United States';
validAddress.state = 'State';

test('Should be able to validate address', () => {
  expect(AddressValidator.Validate(validAddress).length).toBe(0);
});

test('Should be able to validate invalid address', () => {
  const invalidAddress = new Address();
  expect(AddressValidator.Validate(invalidAddress).length).toBeGreaterThan(0);
});

test('Should be able to validate address required addressLine', () => {
  const invalidAddress = validAddress;
  invalidAddress.addressLine = null;
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'Address line is required field',
  );
});

test('Should be able to validate long addressLine', () => {
  const invalidAddress = validAddress;
  invalidAddress.addressLine = Random.String({ minLength: 101 });
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'Address line is too long',
  );
});

test('Should be able to validate long addressLine2', () => {
  const invalidAddress = validAddress;
  invalidAddress.addressLine2 = Random.String({ minLength: 101 });
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'Address line 2 is too long',
  );
});

test('Should be able to validate required addressType', () => {
  const invalidAddress = validAddress;
  invalidAddress.addressType = null;
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'Address Type is required field',
  );
});

test('Should be able to validate addressType incorrect values', () => {
  const invalidAddress = validAddress;
  invalidAddress.addressType = 100;
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'Address Type should be 1 or 2',
  );
});

test('Should be able to validate addressType correct values', () => {
  const invalidAddress = validAddress;
  invalidAddress.addressType = 1;
  expect(AddressValidator.Validate(invalidAddress)).not.toContain(
    'Address Type should be 1 or 2',
  );
  invalidAddress.addressType = 2;
  expect(AddressValidator.Validate(invalidAddress)).not.toContain(
    'Address Type should be 1 or 2',
  );
});

test('Should be able to validate required city field', () => {
  const invalidAddress = validAddress;
  invalidAddress.city = null;
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'City is required field',
  );
});

test('Should be able to validate long value city field', () => {
  const invalidAddress = validAddress;
  invalidAddress.city = Random.String({ minLength: 51 });
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'City is too long',
  );
});

test('Should be able to validate required postalCode field', () => {
  const invalidAddress = validAddress;
  invalidAddress.postalCode = null;
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'PostalCode is required field',
  );
});

test('Should be able to validate too long postalCode field', () => {
  const invalidAddress = validAddress;
  invalidAddress.postalCode = Random.String({ minLength: 7 });
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'PostalCode is too long',
  );
});

test('Should be able to validate required State field', () => {
  const invalidAddress = validAddress;
  invalidAddress.state = null;
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'State is required field',
  );
});

test('Should be able to validate too long State field', () => {
  const invalidAddress = validAddress;
  invalidAddress.state = Random.String({ minLength: 21 });
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'State is too long',
  );
});

test('Should be able to validate required country field', () => {
  const invalidAddress = validAddress;
  invalidAddress.country = null;
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    'Country is required field',
  );
});

test('Should be able to validate country field values', () => {
  const invalidAddress = validAddress;
  invalidAddress.country = Random.String({ minLength: 25 });
  expect(AddressValidator.Validate(invalidAddress)).toContain(
    "Country value should be 'United States' or 'Canada'",
  );
});

test('Should be able to validate country field values', () => {
  const invalidAddress = validAddress;
  invalidAddress.country = 'United States';
  expect(AddressValidator.Validate(invalidAddress)).not.toContain(
    "Country value should be 'United States' or 'Canada'",
  );
  invalidAddress.country = 'Canada';
  expect(AddressValidator.Validate(invalidAddress)).not.toContain(
    "Country value should be 'United States' or 'Canada'",
  );
});
