const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cont = document.querySelector(`.cont`)

let c = 1

const jump = () => {
    mario.classList.add('jump')
    setTimeout(()=> mario.classList.remove('jump'), 500)
}


const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    console.log(marioPosition);
    
    
    if(pipePosition <= 120 && pipePosition >0  && marioPosition < 80) {
        pipe.style.animation = `none`
        pipe.style.left = `${pipePosition}px`
        mario.src = './imagens/game-over.png'
        mario.style.animation = 'none'
        mario.style.bottom = `${marioPosition}px`
        mario.style.width = '100px'

        clearInterval(loop)
    }
}) 

document.addEventListener('keydown', () => {
    const pipePosition = pipe.offsetLeft
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    jump()
    cont.innerHTML = `Pulos: ${c}`
    if (pipePosition <= 120 && pipePosition >0  && marioPosition < 80) { 
    } else {
        c+=1
    }
})

