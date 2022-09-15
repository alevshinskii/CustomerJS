class Person {
  constructor() {
    this.firstName = null;
    this.lastName = null;
  }

  #firstName;

  get firstName() {
    return this.#firstName;
  }

  set firstName(value) {
    if (typeof value === 'string' || value == null) {
      this.#firstName = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in firstName, actual: ' + typeof value,
    );
  }

  #lastName;

  get lastName() {
    return this.#lastName;
  }

  set lastName(value) {
    if (typeof value === 'string' || value == null) {
      this.#lastName = value;
      return;
    }
    throw new TypeError(
      'invalid type tried to set in lastName, actual: ' + typeof value,
    );
  }
}

export default Person;
