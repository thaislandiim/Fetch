import fetch from 'node-fetch'

const url = 'https://jsonplaceholder.typicode.com/todos/'

const init = async () => {
    const json = await (await fetch(url)).json()
    console.log(json)
}
init()

fetch(url)
    .then(response => response.json())
    .then(json => console.log(json))

