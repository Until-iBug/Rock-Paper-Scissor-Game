let ch=null;
let stone=document.querySelector("#stone");
stone.addEventListener("click",()=>{
    ch="stone";
    console.log(ch);
    picker();
    game();
})
let paper=document.querySelector("#paper");
paper.addEventListener("click",()=>{
    ch="paper";
    console.log(ch);
    picker();
    game();
})
let scissor=document.querySelector("#scissor");
scissor.addEventListener("click",()=>{
    ch="scissor";
    console.log(ch);
    picker();
    game();
})
let pic=null;
let cc=document.querySelector(".cc");
let arr=['stone', 'paper','scissor'];
let dis=document.querySelector(".dis");
//computer picking//
const picker=()=>{
let choice=Math.random();
if(choice>=0 && choice<=0.3)
    {console.log(arr[0]);
    pic=arr[0];
    cc.innerText=arr[0];
    dis.style.backgroundImage="url('stone.png')";
    dis.style.backgroundSize="cover";}
if(choice>0.3 && choice<=0.6)
    {console.log(arr[1]);
    pic=arr[1];
    cc.innerText=arr[1];
    dis.style.backgroundImage="url('paper.png')";
    dis.style.backgroundSize="cover";}
if(choice>0.6 && choice<=1)
    {console.log(arr[2]);
    pic=arr[2];
    cc.innerText=arr[2];
    dis.style.backgroundImage="url('scissor.png')";
    dis.style.backgroundSize="cover";}
}
let compscore=document.querySelector(".cnum");
let uscore=document.querySelector(".ynum");
let cnum=0;
let ynum=0;
let msg=document.querySelector(".msg");
const game=()=>{
    if(ch==="stone" && pic==="stone")
    msg.innerText="Draw";
    else if(ch==="stone" && pic==="paper")
    {msg.innerText="Comp won";
    cnum++;
    compscore.innerText=cnum;}
    else if(ch==="stone" && pic==="scissor")
    {msg.innerText="You Won" ; 
    ynum++;
    uscore.innerText=ynum;}
   
    if(ch==="paper" && pic==="paper")
    msg.innerText="Draw";
    else if(ch==="paper" && pic==="scissor")
    {msg.innerText="Comp won";
    cnum++;
    compscore.innerText=cnum;}
    else if(ch==="paper" && pic==="stone")
    {msg.innerText="You Won" ; 
    ynum++;
    uscore.innerText=ynum;}

    if(ch==="scissor" && pic==="scissor")
    msg.innerText="Draw";
    else if(ch==="scissor" && pic==="stone")
    {msg.innerText="Comp won";
    cnum++;
    compscore.innerText=cnum;}
    else if(ch==="scissor" && pic==="paper")
    {msg.innerText="You Won" ; 
    ynum++;
    uscore.innerText=ynum;}


    }
