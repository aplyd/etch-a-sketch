let container = document.querySelector('.container');
let clearBtn = document.querySelector('#clearBtn');
let clearBtnColor = document.querySelector('#clearBtnColor');
let clearBtnGreyscale = document.querySelector('#clearBtnGreyscale');
let pixel = document.querySelectorAll('.pixel');



function createGridNormal(size) {
    
    //erase previously created canvas https://stackoverflow.com/a/3955238
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {

            //create and append divs
            let div = document.createElement('div');
            container.appendChild(div);
            div.style.backgroundColor = 'lightgrey';
            div.classList.add('pixel');

            // update css variables to adjust grid size
        
            document.documentElement.style.setProperty('--size', size);
            

            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            })
        }
    }
}

function createGridColor(size) {
    
    //erase previously created canvas https://stackoverflow.com/a/3955238
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {

            //create and append divs
            let div = document.createElement('div');
            container.appendChild(div);
            div.style.backgroundColor = 'lightgrey';
            div.classList.add('pixel');

            // update css variables to adjust grid size
        
            document.documentElement.style.setProperty('--size', size);
            
            let randomRedValue = Math.floor(Math.random() * 255) + 1;
            let randomGreenValue = Math.floor(Math.random() * 255) + 1;
            let randomBlueValue = Math.floor(Math.random() * 255) + 1;

            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = "rgb(" + randomRedValue + "," + randomBlueValue + "," + randomGreenValue + ")";
            })
        }
    }
}

function createGridGreyscale(size) {
    
    //erase previously created canvas https://stackoverflow.com/a/3955238
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {

            //create and append divs
            let div = document.createElement('div');
            container.appendChild(div);
            div.style.backgroundColor = 'lightgrey';
            div.classList.add('pixel');
            div.style.opacity = "0.1";

            // update css variables to adjust grid size
        
            document.documentElement.style.setProperty('--size', size);
            

            div.addEventListener('mouseover', () => {
                console.log(div.style.opacity = Number(div.style.opacity) + 0.1);
                div.style.backgroundColor = 'black';
            })
        }
    }
}

createGridNormal(16);

function clearNormal() {
    let size = Number(prompt('please enter a number between 12 & 240'));
        if (typeof size == 'number' && size > 0) {
            createGridNormal(size);
        } else {
            alert('characters other than numbers are not supported');
                createGridNormal(16);
            }
}

function clearColor() {
    let size = Number(prompt('please enter a number between 12 & 240'));
        if (typeof size == 'number' && size > 0) {
            createGridColor(size);
        } else {
            alert('characters other than numbers are not supported');
                createGridColor(16);
            }
}

function clearGreyScale() {
    let size = Number(prompt('please enter a number between 12 & 240'));
        if (typeof size == 'number' && size > 0) {
            createGridGreyscale(size);
        } else {
            alert('characters other than numbers are not supported');
                createGridGreyscale(16);

            }
}

clearBtn.addEventListener('mouseup', clearNormal);
clearBtnColor.addEventListener('mouseup', clearColor);
clearBtnGreyscale.addEventListener('mouseup', clearGreyScale);
