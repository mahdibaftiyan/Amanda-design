
const item = document.querySelector(".link-item")
const label = document.querySelector(".label")
const navigation = document.querySelector("#navigation")
const drop = document.querySelector('#drop').addEventListener('click', (e) => {
    if (item.style.visibility == "visible") {
        item.style.visibility = "hidden"
        item.style.transform = "translateY(-300px)"
        item.style.boxShadow = "none"
        navigation.style.height = "80px"
        label.innerHTML = ' <i class="fa-solid fa-bars"></i>'
    } else {
        item.style.visibility = "visible"
        item.style.transform = "translateY(0px)"
        navigation.style.height = "auto"
        item.style.boxShadow = "0px 1px 0px 0px #d3c8c878"
        label.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    }

})

