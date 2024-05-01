module.exports = {
    dataValidation: (data) => {

        const { rating, name, site, email, phone, street, city, state, lat, lng } = data

        /* Validaciones */

        if (!name) return'El restaurante debe tener un nombre'
        if (typeof name !== 'string') return'El Nombre del restaurante debe ser del tipo String'
        if (rating === 0 && typeof rating !== 'number' || !Number.isInteger(rating)) return'El rating debe ser del tipo Integer'
        if (rating < 0 || rating > 4) return'El raiting debe estar comprendido entre 0 y 4'
        if (site && typeof site !== 'string') return'El site debe ser del tipo String'
        if (email && typeof email !== 'string') return'El email debe ser del tipo String'
        if (phone && typeof phone !== 'string') return'El phone debe ser del tipo String'
        if (street && typeof street !== 'string') return'El street debe ser del tipo String'
        if (city && typeof city !== 'string') return'El city debe ser del tipo String'
        if (state && typeof state !== 'string') return'El state debe ser del tipo String'
        if (lat === 0 && typeof lat !== 'number' || Number.isInteger(lat)) return'lat debe ser del tipo Float'
        if (lng === 0 && typeof lng !== 'number' || Number.isInteger(lng)) return'lng debe ser del tipo Float'

        return true
    }
}
