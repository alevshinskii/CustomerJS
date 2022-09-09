class AddressValidator {
    static ADDRESSLINE_MAX_LENGTH = 100
    static ADDRESS_TYPES = [1, 2]
    static CITY_MAX_LENGTH = 50
    static POSTALCODE_MAX_LENGTH = 6
    static STATE_MAX_LENGTH = 20
    static COUNTRIES = ['United States', 'Canada']

    static Validate(address) {
        let errors = []

        if (!address.addressLine) {
            errors.push('Address line is required field')
        }
        if (
            address.addressLine &&
            address.addressLine.length > this.ADDRESSLINE_MAX_LENGTH
        ) {
            errors.push('Address line is too long')
        }

        if (
            address.addressLine2 &&
            address.addressLine2.length > this.ADDRESSLINE_MAX_LENGTH
        ) {
            errors.push('Address line 2 is too long')
        }

        if (!address.addressType) {
            errors.push('Address Type is required field')
        }
        if (
            address.addressType &&
            !this.ADDRESS_TYPES.includes(address.addressType)
        ) {
            errors.push('Address Type should be 1 or 2')
        }

        if (!address.city) {
            errors.push('City is required field')
        }
        if (address.city && address.city.length > this.CITY_MAX_LENGTH) {
            errors.push('City is too long')
        }

        if (!address.postalCode) {
            errors.push('PostalCode is required field')
        }
        if (
            address.postalCode &&
            address.postalCode.length > this.POSTALCODE_MAX_LENGTH
        ) {
            errors.push('PostalCode is too long')
        }

        if (!address.state) {
            errors.push('State is required field')
        }
        if (address.state && address.state.length > this.STATE_MAX_LENGTH) {
            errors.push('State is too long')
        }

        if (!address.country) {
            errors.push('Country is required field')
        }
        if (address.country && !this.COUNTRIES.includes(address.country)) {
            errors.push("Country value should be 'United States' or 'Canada'")
        }

        return errors
    }
}

export default AddressValidator
