const newInput = document.querySelector('#newInput')
const items = document.querySelector('.items')
let itemsList = localStorage.getItem('items') || [];

function onLoad(){
    if (itemsList.length != 0){
        itemsList = itemsList.split(',')
        items.innerHTML = itemsList.join('')

        const loadedItems = document.querySelectorAll('.itemLabel')
        loadedItems.forEach(item => {
            item.addEventListener('click', handleClick)
        })
    }
}

onLoad()

window.addEventListener('submit', (e)=> {
    e.preventDefault()
    if (newInput.value !== ''){
        const a = document.createElement('div')
    a.innerHTML = `${newInput.value}`
    a.classList.add('itemLabel')
    itemsList.push(a.outerHTML)
    localStorage.setItem('items', itemsList)
    newInput.value = ''
    items.appendChild(a)
    a.addEventListener('click', handleClick)
    }
})

function handleClick() {
    let currentIndex = itemsList.indexOf(this.outerHTML)
    this.classList.toggle('crossed')
    const modified = this.outerHTML
    itemsList.splice(currentIndex, 1, modified)
    console.log(itemsList)
    localStorage.setItem('items', itemsList)
}



