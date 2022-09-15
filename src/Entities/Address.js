class Address {
  constructor() {
    this.addressLine;
    this.addressLine2;
    this.addressType;
    this.city;
    this.postalCode;
    this.state;
    this.country;
  }

  #addressLine;

  get addressLine() {
    return this.#addressLine;
  }

  set addressLine(value) {
    if (typeof value === 'string' || value == null) {
      this.#addressLine = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in addressLine, actual: ' + typeof value,
    );
  }

  #addressLine2;

  get addressLine2() {
    return this.#addressLine2;
  }

  set addressLine2(value) {
    if (typeof value === 'string' || value == null) {
      this.#addressLine2 = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in addressLine2, actual: ' + typeof value,
    );
  }

  #addressType;

  get addressType() {
    return this.#addressType;
  }

  set addressType(value) {
    if (typeof value === 'number' || value == null) {
      this.#addressType = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in addressType, actual: ' + typeof value,
    );
  }

  #city;

  get city() {
    return this.#city;
  }

  set city(value) {
    if (typeof value === 'string' || value == null) {
      this.#city = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in city, actual: ' + typeof value,
    );
  }

  #postalCode;

  get postalCode() {
    return this.#postalCode;
  }

  set postalCode(value) {
    if (typeof value === 'string' || value == null) {
      this.#postalCode = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in postalCode, actual: ' + typeof value,
    );
  }

  #state;

  get state() {
    return this.#state;
  }

  set state(value) {
    if (typeof value === 'string' || value == null) {
      this.#state = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in state, actual: ' + typeof value,
    );
  }

  #country;

  get country() {
    return this.#country;
  }

  set country(value) {
    if (typeof value === 'string' || value == null) {
      this.#country = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in country, actual: ' + typeof value,
    );
  }
}

export default Address;
