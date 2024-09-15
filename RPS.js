
let user_score=00;
let comp_score=00;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userscore=document.querySelector("#user-score");
let compscore=document.querySelector("#comp-score");


let result=(user_win,user,comp)=>{
      if(user_win==true){
            user_score++;

            userscore.innerHTML=user_score;
            console.log("score u",user_score);

            console.log("you win!");
            msg.textContent=`You Win ! Your ${user} Beat ${comp}`;
            msg.style.backgroundColor="green";
            msg.style.color="blanchedalmond";
      }
      else{
            comp_score++;
            compscore.innerHTML=comp_score;
            msg.textContent=`You Lose ! ${comp} Beat Your ${user}`;
            msg.style.backgroundColor="rgb(133, 0, 0)";
            msg.style.color="blanchedalmond";
      }
}




let comp_choice = () =>{
      let arr=["rock","paper","scissor"]
      let random=Math.random()*3;
      let index=Math.floor(random);
      return arr[index];
}
let draw=()=>{
      console.log("Game Draw");
      msg.textContent="Game Draw ! Play Again";
      msg.style.backgroundColor="#081b31";
      msg.style.color="aquamarine";
}



let playgame = (user) =>{
      const comp = comp_choice();
      console.log(`User choice=${user}`);
      console.log(`computer choice=${comp}`);

      if(user===comp){
            draw();
      }else{
        var user_win=true;
           // u= rock , c=p,s
           if(user=="rock"){
                   user_win= comp=="paper" ? false:true;
           }
           else if(user=="paper"){
              user_win= comp=="scissor"?false:true;
           }
           else{
             user_win= comp=="rock"?false:true;
           }  
           result(user_win,user,comp);
      }
          
}



choices.forEach((i)=>{
      i.addEventListener("click",()=>{
            let user_choice=i.getAttribute("id");
            playgame(user_choice);
      })
})

