class Person {
    constructor() {
        this.firstName = null
        this.lastName = null
    }

    #firstName
    get firstName() {
        return this.#firstName
    }
    set firstName(value) {
        this.#firstName = value
    }

    #lastName
    get lastName() {
        return this.#lastName
    }
    set lastName(value) {
        this.#lastName = value
    }
}

// eslint-disable-next-line no-undef
module.exports = Person
