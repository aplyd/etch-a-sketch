let container = document.querySelector('.container');
let clearBtn = document.querySelector('#clearBtn');
let pixel = document.querySelectorAll('.pixel');


function createGrid(size) {
    
    //erase previously created canvas https://stackoverflow.com/a/3955238
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    //

    for (x = 0; x < size; x++) {
        for (y = 0; y < size; y++) {

            let div = document.createElement('div');
            container.appendChild(div);
            div.style.backgroundColor = 'lightgrey';
            div.classList.add('pixel');

            div.addEventListener('mouseover', () => {
                div.style.backgroundColor = 'black';
            })
        }
    }
}

createGrid(16);

function clear() {
    let size = Number(prompt('please enter a number for the size of canvas'));
        if (typeof size == 'number' && size > 0) {
            createGrid(size);
        } else {
            alert('characters other than numbers are not supported');
                clear();
            }
}

clearBtn.addEventListener('mouseup', clear);
