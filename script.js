let container = document.querySelector('.container');
let clearBtn = document.querySelector('#clearBtn');
let clearBtnColor = document.querySelector('#clearBtnColor');
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


createGridNormal(16);

function clearNormal() {
    let size = Number(prompt('please enter a number between 12 & 240'));
        if (typeof size == 'number' && size > 0) {
            createGridNormal(size);
        } else {
            alert('characters other than numbers are not supported');
                clearNormal();
            }
}

function clearColor() {
    let size = Number(prompt('please enter a number between 12 & 240'));
        if (typeof size == 'number' && size > 0) {
            createGridColor(size);
        } else {
            alert('characters other than numbers are not supported');
                clearColor();
            }
}


clearBtn.addEventListener('mouseup', clearNormal);
clearBtnColor.addEventListener('mouseup', clearColor);
