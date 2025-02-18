let guessbtn=document.querySelector("#guessbtn")
let message=document.querySelector("#message")
let randomNum=Math.floor(Math.random()*100+1) //[1,101)
let guesses=0
guessbtn.addEventListener('click', function(){
    let userInp=parseInt(document.querySelector("#userInp").value)
    if(isNaN(userInp) || userInp<1 || userInp>100){
        message.innerHTML="Please insert number between 1 and 100"
        message.style.color="red"
        guesses++
    }
    else if(userInp<randomNum){
        message.innerHTML="Too low, try again"
        message.style.color="red"
        guesses++

    }
    else if(userInp>randomNum){
        message.innerHTML="Too high, try again"
        message.style.color="red"
        guesses++

    }
    else{
        message.innerHTML="Congradulations, you guessed."
        message.style.color="green"
        guesses++
        message.innerHTML+=` It took ${guesses} times to guess the number`
    }
})