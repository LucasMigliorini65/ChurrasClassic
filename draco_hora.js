// Relógio
function atualizaRelogio(){ 
    var momentoAtual = new Date();
    
    var vhora = momentoAtual.getHours();
    var vminuto = momentoAtual.getMinutes();
    var vsegundo = momentoAtual.getSeconds();
    
    if (vhora < 10){ vhora = "0" + vhora;}
    if (vminuto < 10){ vminuto = "0" + vminuto;}
    if (vsegundo < 10){ vsegundo = "0" + vsegundo;}

    horaFormat = vhora + " : " + vminuto + " : " + vsegundo;

    document.getElementById("hora").innerHTML = horaFormat;

    setTimeout("atualizaRelogio()",1000);
}


// Scroll
function sumir_scroll() { 
    if (window.scrollY === 0) {
        document.querySelector('.scroll').classList = 'scroll2';
    }
    
    else {
        document.querySelector('.scroll2').classList = 'scroll';
    }
     }

     setInterval(sumir_scroll, 10); 

     // Para subir scroll da janela 
     function scrollar() {
         window.scrollTo({
             top: 0,
             left: 0,
             behavior: "smooth" // scroll suave
     
         })
     }

     function scrollcontato() {
        window.scrollTo({
            top:2000,
            left:0,
            behavior: "smooth" // scroll suave
    
        })
    }
