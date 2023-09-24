let i=0;
let container= document.querySelector(".gridContainer");
let grid=document.createElement(`div`);
grid.classList.add(`etch`);
for (i=0;i<256;i++){
    container.appendChild(grid);
    console.log(`div ${i} created`);
}
container.appendChild(grid);
    console.log(`div ${i} created`);


