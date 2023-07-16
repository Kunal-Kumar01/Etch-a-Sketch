const content = document.createElement('div');
content.classList.add('window');
const container = document.querySelector('.container');
makeGrid(16,16);
function makeGrid(i,j){
    for(i=0; i<16; i++){
        for(j=0; j<16; j++){
            const content = document.createElement('div');
            content.classList.add('window');
            container.appendChild(content);
        }
    }
}

function getColor(){
    let r = Math.round(Math.random()*256);
    let g = Math.round(Math.random()*256);
    let b = Math.round(Math.random()*256);
    return [r,g,b];
}

const block = document.querySelectorAll('.window');

block.forEach(key => key.addEventListener('mouseover', function(e){
    color = getColor();
    e.target.style.background=`rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}));

const submit = document.querySelector('.submit');

submit.addEventListener('click',()=>{
    const userInput = document.querySelector(".input").value;
    // console.log(+userInput);
    // console.log(typeof(userInput));
    input = parseInt(userInput);
    // console.log(typeof(numb));
    size = (800/userInput)-2;
    console.log(size);
    const block = document.getElementsByClassName('window');
    //block.remove();

    while (block.length > 0) {
        block[0].parentNode.removeChild(block[0]);
    }

    printGrid(input,input,size);
    const blocks = document.querySelectorAll('.window');

blocks.forEach(key => key.addEventListener('mouseover', function(e){
    color = getColor();
    e.target.style.background=`rgb(${color[0]}, ${color[1]}, ${color[2]})`;
}));
});

function printGrid(a,b,size){
    for(i=0; i<a; i++){
        for(j=0; j<b; j++){
            const content = document.createElement('div');
            content.classList.add('window');
            content.style.width=`${size}px`;
            content.style.height = `${size}px`;
            container.appendChild(content);
        }
    }
}