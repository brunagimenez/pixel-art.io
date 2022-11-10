
// Criando cores aleatórias 

const randomColor = () => {
    const red = Math.floor(Math.random() * (255 - 1 + 1) + 1);
    const green = Math.floor(Math.random() * (255 - 1 + 1) + 1);
    const blue = Math.floor(Math.random() * (255 - 1 + 1) + 1);

    return `rgb(${red},${green},${blue})`;
};




// Colorindo a paleta de cores

const color = document.getElementsByClassName('color');

for (let i = 0; i <color.length; i+=1){
    if (color[i].style.backgroundColor !== 'black'){
        color[i].style.backgroundColor =randomColor();
    }
};

const colorBlack = document.querySelector('#color-palette div');
colorBlack.style.backgroundColor='black';




// Botão criar as cores aleatórias nos quadrados

const buttonColor = document.getElementById('button-random-color');
const colorRBG = (event) => {
    for (let i = 0; i <color.length; i+=1){
        if (color[i].style.backgroundColor !== 'black'){
            color[i].style.backgroundColor =randomColor();
        };
    };
    let rgb = []
    for (let i = 0; i <color.length; i+=1){
        rgb.push(color[i].style.backgroundColor);
    }
    localStorage.setItem('colorPalette',JSON.stringify(rgb));
};
buttonColor.addEventListener('click',colorRBG);

window.onload = function () {
    const rgbRetorn = JSON.parse(localStorage.getItem('colorPalette'));
    const color = document.getElementsByClassName('color');
    
    for (let i = 0 ; i < rgbRetorn.length; i += 1){
        if (rgbRetorn[i]===rgbRetorn[1]){
            color[1].style.backgroundColor=rgbRetorn[i];
        } else if (rgbRetorn[i]===rgbRetorn[2]){
            color[2].style.backgroundColor=rgbRetorn[i];
        } else if (rgbRetorn[i]===rgbRetorn[3]){
            color[3].style.backgroundColor=rgbRetorn[i];
        };
        
    }   
};


//criando 25 pixels


const createPixels = () => {
    const pixelBoard = document.getElementById('pixel-board');
    for (let i = 0; i < 20; i += 1){
        const sectionPixel = document.createElement('section');
        sectionPixel.classList.add("section-pixel")
        pixelBoard.appendChild(sectionPixel);
        for (let i = 0; i <20; i += 1) {
            const divPixel = document.createElement('div');
            divPixel.classList.add("pixel");
            sectionPixel.appendChild(divPixel);
        }
    }
}

createPixels();



// Add class Selected

const classSelected = () => {
    colorBlack.classList.add('selected')
}
classSelected();

const changeColor = (event) =>{
    const classSelected = document.querySelector('.selected');
    classSelected.classList.remove('selected');
    event.target.classList.add('selected');
}
for (let i = 0 ; i <color.length ; i +=1){
    color[i].addEventListener('click',changeColor);
}



//Preenchendo cor da class selected p/ pixels

const fillColor = (event) => {
    const classSelected = document.querySelector('.selected');
    event.target.style.backgroundColor = classSelected.style.backgroundColor

}

const pixel = document.querySelectorAll('.pixel');
for (let i=0;i < pixel.length;i+=1){
    pixel[i].addEventListener('click',fillColor);
};

//criando botão limpar e add evento 

const buttonClear = document.getElementById('clear-board');
buttonClear.addEventListener('click',() => {
    const pixel = document.getElementsByClassName('pixel');
    for (let i = 0 ; i < pixel.length; i +=1){
        pixel[i].style.backgroundColor = 'white'
    }
});


const vqv = document.getElementById('generate-board');



// add tamanho dos pixels
for (let i=0;i < pixel.length;i+=1){
    pixel[i].style.width = '15px';
    pixel[i].style.height = '15px';
}



//Mudar qtd de pixels



const generateWidth = document.getElementById('generate-width');

generateWidth.addEventListener("click", () => {
    const pixelBoard = document.getElementById('pixel-board');
    const pixelsLength = document.getElementById('pixels-length');
    while (pixelBoard.firstChild) {
        pixelBoard.removeChild(pixelBoard.firstChild);
    }
    
    for (let i = 0; i < pixelsLength.value ; i += 1){
        const sectionPixel = document.createElement('section');
        sectionPixel.classList.add("section-pixel")
        pixelBoard.appendChild(sectionPixel);
        for (let i = 0; i < pixelsLength.value ; i += 1) {
            const divPixel = document.createElement('div');
            divPixel.classList.add("pixel");
            sectionPixel.appendChild(divPixel);
        }
    }
    
    const pixel = document.querySelectorAll('.pixel');
    for (let i=0;i < pixel.length;i+=1){
        pixel[i].addEventListener('click',fillColor);
    };
});

