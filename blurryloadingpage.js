const container = document.querySelector('.container')
const loading = document.querySelector('.loading')


let count = 0
let timer = setInterval(blurry,30)

function blurry(){
count ++
if(count > 99){
    clearInterval(timer)

}

loading.innerText = `${count}`
loading.style.opacity = scale(count,0,100,10,0)
container.style.filter = `blur(${scale(count,0,100,30,0)}px)`
}
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
