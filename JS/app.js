const menu=document.getElementById('menu')
const btn_menu=document.querySelector('.btn_menu')
const icon=document.getElementById('icon')
const link=document.querySelectorAll('li a')
const header=document.getElementById('header')
btn_menu.addEventListener('click',()=>{
    if(menu.classList.contains('menu_oculto') && icon.classList.contains('fa-bars'))
    {
        menu.classList.replace('menu_oculto','mostrar_menu')
        icon.classList.replace('fa-bars','fa-times')
    }else{
        menu.classList.replace('mostrar_menu','menu_oculto')
        icon.classList.replace('fa-times','fa-bars')
    }

})

/******************************************** */
window.addEventListener('scroll',()=>{
   
        header.classList.toggle('ColorHeader',window.scrollY>0)
})

/********************************** */

const cantidad_trabajdores=document.getElementById('cantidad_trabajadores')
const clientes_sastifechos=document.getElementById('clientes_sastifechos')
const cantida_postres=document.getElementById('cantidad_postres')
const años_experiencia=document.getElementById('años_experiencia')
let contadorOne=0
let contadorTwo=0
let contadorFree=0
let contadorFor=0

/* addEventListener('scroll',()=>{
    let valor=window.scrollY
    if(valor>5200)
    {
        ContadoresDatos()
    }
}) */

   function ContadoresDatos(){
    let Contador1=setInterval(() => {
        contadorOne+=1
        años_experiencia.textContent=contadorOne
        if(contadorOne===6)
        {
        clearInterval(Contador1)
        }
    }, 250);

    let Contador2=setInterval(() => {
        contadorTwo+=2
        cantida_postres.textContent=contadorTwo
        if(contadorTwo===50)
        {
        clearInterval(Contador2)
        }
    }, 150);

    let Contador3=setInterval(() => {
        contadorFree+=1
        cantidad_trabajdores.textContent=contadorFree
        if(contadorFree===35)
        {
        clearInterval(Contador3)
        }
    }, 150);

    let Contador4=setInterval(() => {
        contadorFor+=20
        clientes_sastifechos.textContent=contadorFor
        if(contadorFor===2000)
        {
        clearInterval(Contador4)
        }
    }, 50);
   }



