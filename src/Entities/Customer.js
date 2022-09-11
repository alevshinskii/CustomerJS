import Person from './Person';

class Customer extends Person {
  constructor() {
    super();
  }

  #addresses = [];

  get addresses() {
    return this.#addresses;
  }

  set addresses(value) {
    this.#addresses = value;
  }

  #phoneNumber = null;

  get phoneNumber() {
    return this.#phoneNumber;
  }

  set phoneNumber(value) {
    this.#phoneNumber = value;
  }

  #email = null;

  get email() {
    return this.#email;
  }

  set email(value) {
    this.#email = value;
  }

  #notes = [];

  get notes() {
    return this.#notes;
  }

  set notes(value) {
    this.#notes = value;
  }

  #totalPurchasesAmount = null;

  get totalPurchasesAmount() {
    return this.#totalPurchasesAmount;
  }

  set totalPurchasesAmount(value) {
    this.#totalPurchasesAmount = value;
  }

  #lastPurchaseDate = null;

  get lastPurchaseDate() {
    return this.#lastPurchaseDate;
  }

  set lastPurchaseDate(value) {
    this.#lastPurchaseDate = value;
  }
}

export default Customer;
