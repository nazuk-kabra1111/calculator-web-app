let btn=document.querySelectorAll(".btn");
let output=document.querySelector(".output");
let check=0;
let exp="";
let disp="";
for(let bt of btn){
    bt.addEventListener("click",()=>{
        if(bt.innerText==="AC"){
            exp="";
            disp="";
            output.innerText="0";
        }
        else if(bt.innerText==="DEL"){
            exp=exp.slice(0,-1);
            disp=disp.slice(0,-1);
            output.innerText= disp || "0";
        }
        else if(bt.innerText==="x"){
            exp+="*";
            disp+="x";
            output.innerText=disp;
        }
        else if(bt.innerText==="="){
            try{
                let string=eval(exp);
                output.innerText=string;
                disp=output.innerText;
                exp=output.innerText;
            }
            catch{
                output.innerText="Error";
                exp="";
                disp="";
            }
        }
        else{
            disp+=bt.innerText;
            exp+=bt.innerText;
            output.innerText=disp;
        }
    })
    
}