class CustomerValidator {
    static NAME_MAX_LENGTH = 50
    static PHONENUMBER_MAX_LENGTH = 15
    static DATE_MIN_VALUE = new Date(2020, 1, 1)
    static PHONENUMBER_REGEX = new RegExp(/^[0-9]{1,15}$/)
    static EMAIL_REGEX = new RegExp(/\w+@\w+.\w+/)
    static Validate(customer) {
        let errors = []

        if (
            customer.firstName &&
            customer.firstName.length > this.NAME_MAX_LENGTH
        ) {
            errors.push('firstName is too long')
        }

        if (!customer.lastName) {
            errors.push('lastName is required field')
        }
        if (
            customer.lastName &&
            customer.lastName.length > this.NAME_MAX_LENGTH
        ) {
            errors.push('lastName is too long')
        }

        if (
            !customer.addresses ||
            (customer.addresses && !customer.addresses.length)
        ) {
            errors.push('addresses list should contain at least 1 address')
        }

        if (customer.phoneNumber) {
            if (customer.phoneNumber.length > this.PHONENUMBER_MAX_LENGTH)
                errors.push('phoneNumber is too long')
            if (!this.PHONENUMBER_REGEX.test(customer.phoneNumber)) {
                errors.push('phoneNumber should contain digits only')
            }
        }

        if (customer.email && !this.EMAIL_REGEX.test(customer.email)) {
            errors.push('email is not valid')
        }

        if (!customer.notes || (customer.notes && !customer.notes.length)) {
            errors.push('notes list should contain at least 1 note')
        }

        if (
            customer.totalPurchasesAmount &&
            customer.totalPurchasesAmount < 0
        ) {
            errors.push('totalPurchasesAmount is not valid')
        }

        if (
            customer.lastPurchaseDate &&
            customer.lastPurchaseDate < this.DATE_MIN_VALUE
        ) {
            errors.push('lastPurchaseDate is not valid')
        }

        return errors
    }
}

export default CustomerValidator
