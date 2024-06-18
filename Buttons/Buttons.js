function likes(){
    alert(' Ninja was liked')
}

function decide( el ){
    if( el.innerText === 'Login'){
        el.innerText = 'Logout'
    }
    else {
        el.innerText = 'Login'
    }
}