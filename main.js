var modalButtons = document.querySelectorAll('.modal-button')
var popup = document.querySelector('.popup')
var tabs = document.querySelectorAll('.popup-tab')
var contents = document.querySelectorAll('.popup-content')
var isModalOpen = false
var activeTab = 0

modalButtons.forEach(function(button) {
    button.addEventListener('click', handleModalButtonClick)
})

tabs.forEach(function(tab){
    tab.addEventListener('click', handleModalTabClick)
})

function handleModalButtonClick() {
    if(isModalOpen) {
        popup.classList.remove('show')
        isModalOpen = false
    } else {
        popup.classList.add('show')
        isModalOpen = true
    }
}

function handleModalTabClick(e) {
    activeTab = Number(e.target.value)

    tabs.forEach(function(tab) {
        if(Number(tab.value) === activeTab) {
            tab.classList.add('active')
        } else {
            tab.classList.remove('active')
        }
    })

    contents.forEach(function(content) {
        console.log('content', content.dataset.value)
        if(Number(content.dataset.value) === activeTab) {
            content.classList.add('active')
        } else {
            content.classList.remove('active')
        }
    })
}