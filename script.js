//Se declara una constante llamada "menutoggle" que almacena el resultado de la función document.querySelector('.toggle'). Esta función busca en el documento HTML un elemento que tenga la clase CSS llamada "toggle" y lo asigna a la constante menutoggle. Lo mismo pasa con "navigation".

//Se captura la clase toggle, qué es a la cual se le va dar un clic para desplegarse los elementos
//Se usa querySelector porque es una clase
const menutoggle = document.querySelector('.toggle');
//Se captura la clase navigation, qué es al cual mostrará los elementos
const navigation = document.querySelector('.navigation');
//Se le da funcionalidad al toggle mediante un click:
menutoggle.onclick = function(){
    //Cuando se de click, se quiere listar todas las clases del menuToggle y se le asigna el método toggle y se asigna la clase "active", esta clase se añade al index.html
    menutoggle.classList.toggle('active');
    //Cuando se da click, se le pide que active esa clase en la cual se mostrarán los elementos
    navigation.classList.toggle('active');
}