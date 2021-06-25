let clasesReservadas = []

$(document).ready(function(){
    
//Slider de fotos
    let speed = 900;
    let autoswitch = true;
    let autoswitch_speed = 4000;

    $('.slide').first().addClass('active')
    $('.slide').hide();
    $('.active').show()

    if(autoswitch === true) {
        setInterval(nextSlide, autoswitch_speed)
    };

    function nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');

        if($('.oldActive').is(':last-child')){
            $('.slide').first().addClass('active')
        } else {
            $('.oldActive').next().addClass('active')
        }

        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed)
        $('.active').fadeIn(speed)
    }

//Reserva de clases
    updateReserva()

//Cancelar reserva
    let eliminar = document.querySelector('#eliminar');
    eliminar.addEventListener('click', function () {
        clasesReservadas = [];
        updateReserva();
    })

//Para guardar clases reservadas, falta trabajar sobre esto
    localStorage.setItem("carrito", "clasesReservadas"); //coment de Fernando

    
//Clases reservadas
    let clases = document.querySelectorAll(".clase");
    
    for (let clase of clases) {
        clase.addEventListener('click', function (e) {
            //console.log(e.target)
            console.dir(this)
            
            let title = this.dataset.title;
            //let price = this.dataset.price;
            //FALTA TRABAJAR SOBRE EL PRICE. calcular el mensual en base a la elección de 1 ó 2 clases/semana (el valor por defecto es de 1 clase/semana, que es la modalidad que elige la mayoría, pero puede haber excepciones)
            
            clasesReservadas.push(title)
            updateReserva();
        })
    }
});

//Crear la lista de reserva
function updateReserva() {
    let listaReserva = '';
    
    for (let clase of clasesReservadas) {
        listaReserva = `<li>${clase}</li>`
}

    let ul = document.querySelector('#reserva ul')
    ul.innerHTML = listaReserva;
    
    let reserva = document.querySelector('#reserva')
    if (clasesReservadas.length === 0) {
        reserva.style.backgroundColor = '#FCFCFC';
    } else {
        reserva.style.backgroundColor = '#f5f5f5';
    }
};


//Crear un alert para "Confirmar reserva"?



//Carro
//Nose si me conviene hacer un carrito para esto, ya que sólo se podría elegir una opción de clase, vale la pena? o qué me conviene en este caso?

/*
class Servicio {
    constructor (title, price) {
        this.title = title;
        this.price = Number(price)
    }
}

let misClases = new Servicio (data-title, data-price)
*/
