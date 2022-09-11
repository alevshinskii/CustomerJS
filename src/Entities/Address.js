class Address {
  constructor() {
    this.addressLine = String.empty;
    this.addressLine2 = null;
    this.addressType = 0;
    this.city = String.empty;
    this.postalCode = String.empty;
    this.state = String.empty;
    this.country = String.empty;
  }

  #addressLine;

  get addressLine() {
    return this.#addressLine;
  }

  set addressLine(value) {
    this.#addressLine = value;
  }

  #addressLine2;

  get addressLine2() {
    return this.#addressLine2;
  }

  set addressLine2(value) {
    this.#addressLine2 = value;
  }

  #addressType;

  get addressType() {
    return this.#addressType;
  }

  set addressType(value) {
    this.#addressType = value;
  }

  #city;

  get city() {
    return this.#city;
  }

  set city(value) {
    this.#city = value;
  }

  #postalCode;

  get postalCode() {
    return this.#postalCode;
  }

  set postalCode(value) {
    this.#postalCode = value;
  }

  #state;

  get state() {
    return this.#state;
  }

  set state(value) {
    this.#state = value;
  }

  #country;

  get country() {
    return this.#country;
  }

  set country(value) {
    this.#country = value;
  }
}

export default Address;
