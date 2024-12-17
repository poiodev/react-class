//Promesas - una promesa es algo que toma tiempo en completarse como, obtener datos de un servidor y nos 
//asegura tener dos resultados posibles si sale bien o si algo falla

const apiKey = '7zGnycwh4qSsf8gp5FpenPTONjkppbC9';

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

peticion.then(resp => resp.json()
.then(({ data }) => {
    console.log(data.images.original);
    const { url } = data.images.original;
    const img = document.createElement('img');
    img.src = url

    document.body.append(img)
}))
.catch(console.warn);