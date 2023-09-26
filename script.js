let i=0,gridId,boxSize=16,boxCount;
let container= document.querySelector(".gridContainer");
let size= document.querySelector("#box");
size.addEventListener("input", createGrid);
value=document.querySelector("#value");

value.textContent=boxSize;
boxCount=boxSize*boxSize;
makeBox();

function createGrid(evt){
    container.innerHTML="";
    boxSize=evt.target.value;
    value.textContent=boxSize;
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
    
        grid.addEventListener('mousedown',function(){
            gridId=this.id;
            colorAdd(gridId);
        
        }); 

        grid.addEventListener('mouseover',function(){
            gridId=this.id;
            colorAdd(gridId);
        }); 
    
}
}
console.log("loop parsed");

grid=document.querySelector(".etch");



function colorAdd(e){
    let i,j,k;
    i=Math.floor(Math.random()*255);
    j=Math.floor(Math.random()*255);
    k=Math.floor(Math.random()*255);
    grid=document.getElementById(e);
    //grid.setAttribute('style',`background-color: rgb(${i},${j},${k})`);
    //grid.setAttribute('style',`background-color: rgb(0,0,0)`);
    grid.style.backgroundColor = `rgb(${i},${j},${k})`;
    console.log("color changed successfully");
    
}

