// PAINT********
let main = document.querySelector('main')
let size = document.querySelector('.size')
let color = document.querySelector('#myColor')

window.addEventListener('wheel',manipulateSize)
window.addEventListener('mousemove',paint)

function paint(e) {
    if (e.ctrlKey) {
        let brush =  document.createElement('div')
            brush.className = "brush"
            brush.style.background = color.value
            brush.style.width = size.innerHTML+"px";
            brush.style.height = size.innerHTML+"px";
            brush.style.top = e.y  +"px"
            brush.style.left = e.x +"px"
            main.appendChild(brush)

    }
}

function manipulateSize(e) {
    let sizeNumber = parseInt(size.innerHTML)
    if (e.deltaY > 0) {
        size.innerHTML = sizeNumber +1
    }else if(e.deltaY<0 && sizeNumber>1){
        size.innerHTML = sizeNumber -1
    }
}
