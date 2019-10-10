const formFirstPage = document.querySelector('#formFirstPage');

function validateSend(event){
    event.preventDefault()
    if(formFirstPage){
        console.log("send works")
        document.querySelector('.firstpage').style.visibility = "hidden";
}
}

formFirstPage.addEventListener('submit', validateSend)