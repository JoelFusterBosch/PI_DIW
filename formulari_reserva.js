/*
 Esta funció ocultara i mostrara els camps necessaris 
 segons correspon amb la opció seleccionada del desplegable 
*/
function mostrarCamps(){
    // Ocultem tots els camps
    document.getElementById('piscina').classList.add('ocult');
    document.getElementById('biblioteca').classList.add('ocult');
    document.getElementById('futbol').classList.add('ocult');
    document.getElementById('actes').classList.add('ocult');
    document.getElementById('gimnas').classList.add('ocult');
    document.getElementById('padel').classList.add('ocult');
    document.getElementById('tenis').classList.add('ocult');
    document.getElementById('cultura').classList.add('ocult');
    document.getElementById('musica').classList.add('ocult');

    // Agafem el valor de la opció seleccionada amb el desplegable
    const opcioSeleccionada = document.getElementById('equipament').value;
    
    // I comparem els valors per a mostrar uns camps o altres
    switch (opcioSeleccionada){
        case "Piscina":
            document.getElementById('piscina').classList.remove('ocult')
            break;
        case "Biblioteca":
            document.getElementById('biblioteca').classList.remove('ocult')
            break;
        case "Camp de futbol":
            document.getElementById('futbol').classList.remove('ocult')
            break;
        case "Salo d'actes":
            document.getElementById('actes').classList.remove('ocult')
            break;
        case "Gimnas":
            document.getElementById('gimnas').classList.remove('ocult')
            break;
        case "Pista de padel":
            document.getElementById('padel').classList.remove('ocult')
            break;
        case "Pista de tenis":
            document.getElementById('tenis').classList.remove('ocult')
            break;
        case "Aula de cultura":
            document.getElementById('cultura').classList.remove('ocult')
            break;
        case "Casa de la musica":
            document.getElementById('musica').classList.remove('ocult')
            break;
        default:
            console.log("Opció no seleccionada")
            break;
    }
}
/*
Esta funció reiniciara els valors afegits al formulari
pels valors per defecte al apretar el botó de "Reset"
*/
window.addEventListener('DOMContentLoaded', () => {
    // Pasem el id del formulari
    const formEquipament = document.forms['formularireserva'];
     
    /*
    I quan apretem el botó de "Reset" es posaran els valors
     per defecte, si no n'hi han és buidaran 
    */
    formEquipament.addEventListener('reset', () => {
        document.getElementById('piscina').classList.add('ocult');
        document.getElementById('biblioteca').classList.add('ocult');
        document.getElementById('futbol').classList.add('ocult');
        document.getElementById('actes').classList.add('ocult');
        document.getElementById('gimnas').classList.add('ocult');
        document.getElementById('padel').classList.add('ocult');
        document.getElementById('tenis').classList.add('ocult');
        document.getElementById('cultura').classList.add('ocult');
        document.getElementById('musica').classList.add('ocult');
        document.getElementById('equipament').selectedIndex = 0;
    });

});