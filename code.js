const content = document.createElement('div');
content.classList.add('window');
const container = document.querySelector('.container');

for(i=0; i<16; i++){
    for(j=0; j<16; j++){
        const content = document.createElement('div');
        content.classList.add('window');
        container.appendChild(content);
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

// block.addEventListener('mouseover',function (e){
//     e.target.style.background='blue';
// });