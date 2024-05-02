module.exports = {
    dataValidation: (data) => {

        const { rating, name, site, email, phone, street, city, state, lat, lng } = data

        /* Regex */
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
        const urlRegex = /^(http|https):\/\/.+$/;

        /* Validaciones */

        if (!name) return 'El restaurante debe tener un nombre'
        if (typeof name !== 'string') return 'El Nombre del restaurante debe ser del tipo String'
        if (rating === 0 && typeof rating !== 'number' || !Number.isInteger(rating)) return 'El rating debe ser del tipo Integer'
        if (rating < 0 || rating > 4) return 'El raiting debe estar comprendido entre 0 y 4'
        if (site && typeof site !== 'string') return 'El site debe ser del tipo String'
        if (!urlRegex.test(site)) return 'El site debe comenzar con http:// o https://'
        if (email && typeof email !== 'string') return 'El email debe ser del tipo String'
        if (!emailRegex.test(email)) return 'El email debe tener una estructura como por ejemplo john.doe@example.com'
        if (phone && typeof phone !== 'string') return 'El phone debe ser del tipo String'
        if (street && typeof street !== 'string') return 'El street debe ser del tipo String'
        if (city && typeof city !== 'string') return 'El city debe ser del tipo String'
        if (state && typeof state !== 'string') return 'El state debe ser del tipo String'
        if (lat && typeof lat !== 'number' || Number.isInteger(lat)) return 'lat debe ser del tipo Float'
        if (lat && lat <= -90.00 || lat >= 90.00) return 'lat debe estar entre -90.00 y 90.00'
        if (lng && typeof lng !== 'number' || Number.isInteger(lng)) return 'lng debe ser del tipo Float'
        if (lng && lng <= -180.00 || lng >= 180.00) return 'lng debe estar entre -180.00 y 180.00'

        return true
    }
}
