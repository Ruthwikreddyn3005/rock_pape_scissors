let userScore=0;
let compScore=0;


const choices= document.querySelectorAll(".choice");
const msg = document.getElementById('msg')
const scoreUser= document.querySelector("#your-score")
const scoreComp= document.querySelector("#computer-score")
const msgBox = document.querySelector(".msg-box")



const genCompChoice =()=>{
    let optNum= Math.floor(Math.random()*3)
    const options=["rock","paper","scissors"]
    const compOption= options[optNum]
    return compOption
}

const showWinner= (userwin,userChoice,compChoice)=>{
    if (userwin){ 
        userScore++
        msg.innerText=`You win ${userChoice} beats ${compChoice}` 
        msgBox.style.backgroundColor="green"
        scoreUser.innerText=userScore
        scoreComp.innerText=compScore
        
    }
    else{
        compScore++
        msg.innerText=`You lose ${compChoice} beats ${userChoice}` 
        msgBox.style.backgroundColor="red"
       
        scoreUser.innerText=userScore
        scoreComp.innerText=compScore
    }
}

const PlayGame = (userChoice)=>{
    let compChoice = genCompChoice()
    let userwin = false
    
    if (compChoice === userChoice){
        msg.innerText="Match Drawn"
        msgBox.style.backgroundColor="black"
        
        scoreUser.innerText=userScore
        scoreComp.innerText=compScore
       
        
    }
    else{
        if(userChoice==='rock'){
            userwin = compChoice==='paper'? false:true;
        }
        if (userChoice==='paper'){
            userwin = compChoice==='scissors'? false:true;
        }
        if (userChoice==='scissors'){
            userwin = compChoice==='rock'? false:true;
        }
        showWinner(userwin,userChoice,compChoice)
    }
    
    

}

choices.forEach((choice)=>{
 
    choice.addEventListener("click",()=>{
        const userChoice= choice.getAttribute('id')
        PlayGame(userChoice)
    })

});
