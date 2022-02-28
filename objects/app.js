let persona = {
    nombre: 'César',
    apellido: 'Macías',
    getName: function () {
        return `${this.nombre} ${this.apellido}`
    },
    domicilio: {
        calle: 'Edo. Hidalgo',
        colonia: 'Del valle',
        cp: 28000,
        municipio: 'Villa de Álvarez'
    },
    getFullAdress: function () {
        return `${this.domicilio.calle} Colonia:${this.domicilio.colonia} CP:${this.domicilio.cp}, ${this.domicilio.municipio}`
    }
}

console.log(persona.getFullAdress())