let item;

function getItem() {
    item = JSON.parse(localStorage.getItem("item") || "[]");
    const p = document.querySelector('.chizish')
    const id = document.querySelector('.id')
    const name = document.querySelector('.name')
    item.forEach(element => {
        p.innerHTML = JSON.stringify(element)
        id.innerHTML = JSON.stringify(element.id)
        name.innerHTML = JSON.stringify(element.name)
    });
    
}
const glavniybtn = document.querySelector('.glavniy')

glavniybtn.addEventListener('click', () => {
    location.href = '/html/facebook.html'
})

const onasBtn = document.querySelector('.oNas1')

onasBtn.addEventListener('click', () => {
    location.href = '/html/about.html'
})

getItem()