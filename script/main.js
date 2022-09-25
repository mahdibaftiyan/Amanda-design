
// bars code
const item = document.querySelector(".link-item")
const label = document.querySelector(".label")
const navigation = document.querySelector("#navigation")

let Validity = false

document.querySelector('#drop').addEventListener('change', (e) => {
    drop()
})

const drop = () => {
    if (Validity) {
        item.style.visibility = "hidden"
        item.style.transform = "translateY(-300px)"
        item.style.boxShadow = "none"
        navigation.style.height = "80px"
        label.innerHTML = ' <i class="fa-solid fa-bars"></i>'
        Validity = false

    } else {
        item.style.visibility = "visible"
        item.style.transform = "translateY(0px)"
        navigation.style.height = "auto"
        item.style.boxShadow = "0px 1px 0px 0px #d3c8c878"
        label.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        Validity = true
    }
}

const dropclose = () => {

    Validity ? drop() : console.log('close')

}


// switch page
removeClass = () => {
    document.querySelector('.Active').classList.remove('Active')
}

changePage = (a) => {
    removeClass()
    dropclose()
    id = a.getAttribute("data-id")
    const item = document.querySelector(id)
    item.classList.add('Active')

}
