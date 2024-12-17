//Desestructuración 

const persona = {
    nombre: 'Santiago',
    edad: 80,
    clave: 'Ironman',
  }

  const usarContexto = ({clave, edad}) => {
  
    return {
       nombreClave: clave,
       anios: edad,
       apellidos: {
        oneApellido: 'Valencia',
        twoApellido: 'Garzon'

       }
    }
  }
 
 const {nombreClave, anios, apellidos} = usarContexto(persona);
 const {oneApellido, twoApellido} = apellidos

 console.log(nombreClave, anios);
 console.log(oneApellido, twoApellido);

 