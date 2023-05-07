function menuClick() {
    let navList = document.querySelector('#nav-list')
    let menuArea = document.querySelector('#menu')
    let menuLine1 = document.querySelector('.menu-line:nth-child(1)')
    let menuLine2 = document.querySelector('.menu-line:nth-child(2)')
    let menuLine3 = document.querySelector('.menu-line:nth-child(3)')
    let listItem = document.querySelectorAll('.list-item')

    if (navList.style.transform == 'translateX(0%)') {
        //Posicionamento da área do menu
        navList.style.transform = 'translateX(100%)'
        navList.style.position = 'absolute'

        // Ícone do menu
        menuArea.style.gap = '4px'
        menuArea.style.position = 'relative'
        menuArea.style.top = '0px'
        menuArea.style.right = '0px'

        // Linhas do menu
        menuLine1.style.backgroundColor = '#FFFFFF'
        menuLine1.style.top = '0px'
        menuLine1.style.transform = 'rotate(0deg)'
        menuLine2.style.display = 'block'
        menuLine3.style.backgroundColor = '#FFFFFF'
        menuLine3.style.bottom = '0px'
        menuLine3.style.transform = 'rotate(0deg)'

        // Item 1 da lista
        listItem[0].style.opacity = '0'
        listItem[0].style.transition = 'all .6s'
        listItem[0].style.transform = 'translateX(100%)'

        // Item 2 da lista
        listItem[1].style.opacity = '0'
        listItem[1].style.transition = 'all .4s'
        listItem[1].style.transform = 'translateX(100%)'

        // Item 3 da lista
        listItem[2].style.opacity = '0'
        listItem[2].style.transition = 'all .2s'
        listItem[2].style.transform = 'translateX(100%)'
    } else {
        //Posicionamento da área do menu
        navList.style.transform = 'translateX(0%)'
        navList.style.position = 'fixed'

        // Ícone do menu
        menuArea.style.gap = '0px'
        menuArea.style.position = 'fixed'
        menuArea.style.top = '15px'
        menuArea.style.right = '20px'

        // Linhas do menu
        menuLine1.style.backgroundColor = '#000000'
        menuLine1.style.top = '1.5px'
        menuLine1.style.transform = 'rotate(-45deg)'
        menuLine2.style.display = 'none'
        menuLine3.style.backgroundColor = '#000000'
        menuLine3.style.bottom = '1.5px'
        menuLine3.style.transform = 'rotate(45deg)'

        // Item 1 da lista
        listItem[0].style.opacity = '100'
        listItem[0].style.transition = 'all .4s'
        listItem[0].style.transform = 'translateX(0%)'

        // Item 2 da lista
        listItem[1].style.opacity = '100'
        listItem[1].style.transition = 'all .8s'
        listItem[1].style.transform = 'translateX(0%)'

        // Item 3 da lista
        listItem[2].style.opacity = '100'
        listItem[2].style.transition = 'all 1.2s'
        listItem[2].style.transform = 'translateX(0%)'
    }
}