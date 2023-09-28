let i=0,
    gridId,
    boxSize=30,
    boxCount,
    flag=0,
    monochrome=false;

let container= document.querySelector(".gridContainer");
let size= document.querySelector("#box");
size.addEventListener("input", createGrid);
value=document.querySelector(".value");

value.textContent=`${boxSize}x${boxSize}`;
boxCount=boxSize*boxSize;
makeBox();

function createGrid(evt){
    container.innerHTML="";
    boxSize=evt.target.value;
    value.textContent=`${boxSize}x${boxSize}`;
    console.log(`boxSize is ${boxSize}`);
    boxCount=boxSize*boxSize;
    console.log(`createGrid pass`)
    console.log(`boxSize is${boxSize} and boxCount is ${boxCount}`);
    makeBox();
}



console.log("script loaded");

function makeBox(){
    console.log(`makeBox run`)
    for (let c=0;c<boxCount;c++){
        let grid=document.createElement(`div`);
        grid.classList.add(`etch`);
        grid.setAttribute("id",`${c}`);
        let x=600/boxSize; console.log(`x is ${x}`);
        grid.setAttribute(`style`,`height:${x}px; width:${x}px`);
        container.appendChild(grid);
        //console.log(`div ${c} created`);

        grid.addEventListener('mousedown',(e)=> {
            if(e.button==0){
                flag+=1;
                colorAdd(e.target.id);
                console.log(`listener1 executed flag=${flag}`);
                if(flag>1){
                    flag=0;
                }
                flagcheck();
            }
            else{e.preventDefault}
        });

        grid.addEventListener('mouseover',(e)=> {
            colorAdd(e.target.id);
        });

        grid.addEventListener('mouseup',(e) => {
            if(e.button == 0){
                flag-=1;
                colorAdd(e.target.id);
                console.log(`listener2 executed flag=${flag}`);
                if (flag<0){
                    flag=1;
                }
                flagcheck();
            }
            else(e.preventDefault)
        });
           
        grid.addEventListener(`dragstart`,(event) => {
            event.preventDefault();
        });

        grid.addEventListener('drop',(event) => {
            event.prefventDefault();
        })
}
}

function flagcheck(flag){
    if(flag>=2 || flag<0){
        alert("Counter failed to self correct.If porblems continue,please reload the page");
        throw new Error("Flag exceeded limit.Reload page");
        
    }
}
console.log("loop parsed");

grid=document.querySelector(".etch");

/*function listener1(e){
    if(e.button== 0){flag+=1;}
    console.log(`listener1 executed flag=${flag}`);
    colorAdd(e);
} */

/*function listener2(){
    if(e.button==0){flag-=1;}
    console.log(`listener2 executed flag=${flag}`);
}*/

function mono(){
    monochrome=true;
    flag=0;
}

function multicolor(){
    monochrome=false;
    flag=0;
}

function shader(){
    alert("This feature will be available soon");
}
function colorAdd(e){
    let i,j,k;
    i=Math.floor(Math.random()*255);
    j=Math.floor(Math.random()*255);
    k=Math.floor(Math.random()*255);
    grid=document.getElementById(e);
    //grid.setAttribute('style',`background-color: rgb(${i},${j},${k})`);
    //grid.setAttribute('style',`background-color: rgb(0,0,0)`);
    if(flag==1){
        if(monochrome){
            grid.style.backgroundColor = `rgb(0,0,0)`;   
            console.log(`color of div ${e} changed to rgb(0,0,0)`);
        }

        else {
         grid.style.backgroundColor = `rgb(${i},${j},${k})`;
         console.log(`color of div ${e} changed to rgb(${i},${j},${k})`);
        }
    
    }
    
}

