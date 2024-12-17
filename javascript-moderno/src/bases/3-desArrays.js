const villanos = ['Joker', 'Duende Verde', 'Pinguino'];


const [ , , v3 ] = villanos;
console.log(v3);

const retornaArreglo = () => {
   return  ['ABC', 123]
}



const [letras , numeros] = retornaArreglo();
console.log(letras, numeros)

//1. el primer valor del arr se llamará nombre
//2. se llamara setNombre

const usarEstado = (valor) => {
  return [valor, () => { console.log('Bienvenidos a villanolandia')}];
}

const [nombre, setNombre] = usarEstado('Joker');

console.log(nombre );
setNombre();