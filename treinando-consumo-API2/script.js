const characterId = document.getElementById('characterId');
const btnGo = document.getElementById('btn-go');
const content = document.getElementById('content');
const image = document.getElementById('img');

const fetchAPI = (value) => {
    const result = fetch(`https://api.adviceslip.com/advice/${value}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        return data;
    })
    return result;
}

btnGo.addEventListener('click', async (event) => {
    event.preventDefault();
    const result = await fetchAPI(characterId.value);
    content.textContent = `${JSON.stringify(result, undefined, 2)}`;
})