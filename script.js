let container = document.querySelector('.container');

for (x = 0; x < 16; x++) {
    for (y = 0; y < 16; y++) {
        let div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('square');
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = 'black';
        })
    }
}

let square = document.querySelectorAll('.square');


function clear() {
    square.forEach(function() {
        this.style.backgroundColor = 'grey';
    })
}
