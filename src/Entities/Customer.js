// eslint-disable-next-line no-undef
const Person = require('./Person')

class Customer extends Person {
    constructor() {
        super()
        this.#addresses = []
        this.#phoneNumber = null
        this.#email = null
        this.#notes = []
        this.totalPurchasesAmount = null
        this.lastPurchaseDate = null
    }

    #addresses
    get addresses() {
        return this.#addresses
    }
    set addresses(value) {
        this.#addresses = value
    }

    #phoneNumber
    get phoneNumber() {
        return this.#phoneNumber
    }
    set phoneNumber(value) {
        this.#phoneNumber = value
    }

    #email
    get email() {
        return this.#email
    }
    set email(value) {
        this.#email = value
    }

    #notes
    get notes() {
        return this.#notes
    }
    set notes(value) {
        this.#notes = value
    }

    #totalPurchasesAmount
    get totalPurchasesAmount() {
        return this.#totalPurchasesAmount
    }
    set totalPurchasesAmount(value) {
        this.#totalPurchasesAmount = value
    }

    #lastPurchaseDate
    get lastPurchaseDate() {
        return this.#lastPurchaseDate
    }
    set lastPurchaseDate(value) {
        this.#lastPurchaseDate = value
    }
}

// eslint-disable-next-line no-undef
module.exports = Customer
