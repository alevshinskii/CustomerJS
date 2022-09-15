import Person from './Person';
import Address from './Address';

class Customer extends Person {
  constructor() {
    super();
  }

  #addresses = [];

  get addresses() {
    return this.#addresses;
  }

  set addresses(value) {
    if (value instanceof Array) {
      for (let i in value) {
        if (!(value[i] instanceof Address)) {
          throw new TypeError(
            'invalid type of array elements tried to set in addresses, actual ' +
              value[i].type,
          );
        }
      }
      this.#addresses = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in addresses, actual ' + value.type,
    );
  }

  #phoneNumber = null;

  get phoneNumber() {
    return this.#phoneNumber;
  }

  set phoneNumber(value) {
    if (typeof value === 'string') {
      this.#phoneNumber = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in phoneNumber, actual ' + value.type,
    );
  }

  #email = null;

  get email() {
    return this.#email;
  }

  set email(value) {
    if (typeof value === 'string') {
      this.#email = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in email, actual ' + value.type,
    );
  }

  #notes = [];

  get notes() {
    return this.#notes;
  }

  set notes(value) {
    if (value instanceof Array) {
      for (let i in value) {
        if (!(typeof value[i] === 'string')) {
          throw new TypeError(
            'invalid type of array elements tried to set in notes, actual ' +
              value[i].type,
          );
        }
      }
      this.#notes = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in notes, actual ' + value.type,
    );
  }

  #totalPurchasesAmount = null;

  get totalPurchasesAmount() {
    return this.#totalPurchasesAmount;
  }

  set totalPurchasesAmount(value) {
    if (typeof value === 'number' || value == null) {
      this.#totalPurchasesAmount = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in totalPurchasesAmount, actual ' +
        typeof value,
    );
  }

  #lastPurchaseDate = null;

  get lastPurchaseDate() {
    return this.#lastPurchaseDate;
  }

  set lastPurchaseDate(value) {
    if (value instanceof Date || value == null) {
      this.#lastPurchaseDate = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in lastPurchaseDate, actual ' + typeof value,
    );
  }
}

export default Customer;
