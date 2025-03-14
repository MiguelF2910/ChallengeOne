// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigoGlobal = [];

function AgregarAmigo()
{
    //primero debes de validar que no envie nada vacio 
    let nombre = document.getElementById("amigo");
    let amigo =  nombre.value; //envio el valor de mi variable



    if(!amigo) // si no hay nada en mi variable amigo
    {
        alert("Debes de ingresar un valor");
        return;
    }
    amigoGlobal.push(amigo);

    nombre.value = "";

    nombre.focus(); //

    console.log(amigo.value);  // valor que aparece en consola

    renderizar();
}

function renderizar(){
    let listaAmigos = document.getElementById("listaAmigos");
    //seccion para evitar que se repitan valores al momento de imprimirse
    listaAmigos.innerHTML="";
    //seccion para agregar elementos
    for(let i = 0 ; i<amigoGlobal.length;i++)
        {
            //creación de elemento dinamico
            let item = document.createElement("li"); 
            item.textContent = amigoGlobal[i];
            listaAmigos.appendChild(item);

        }    
}

function sortearAmigo()
{
    if(amigoGlobal.length === 0)
    {
        alert("No hay amigos para sortear");
        return;
    }
    //matt floor hace un redondeo decimal

    let amigoSorteado = amigoGlobal[Math.floor(Math.random()*amigoGlobal.length)];
    let resultado  = document.getElementById("resultado");
    resultado.innerHTML = `Persona seleccionada ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaAmigos");
    limpiarLista.innerHTML = "";
}