const regalo = {
    tipo: 'Celular',
    destinatario: ' Jeison',
    precio: 25,
    detalles: {
        marca: 'huawei',
        codigo: 122345,
        peso: 1.2,
        color: 'azul',
        dimensiones: {
          largo: 20,
          ancho: 15,
          alto: 10
        }
    }
}

//console.table(regalo)



const regalo2 = {...regalo};
regalo2.tipo = 'Juguete';


console.log(regalo);
console.log(regalo2);
