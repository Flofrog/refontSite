 //-------------POUR FAIRE TOURNER LE CAROUSEL
 var angle = 0;
function galleryspin(sign) { 
spinner = document.querySelector("#spinner");
if (!sign) { angle = angle + 45; } else { angle = angle - 45; }
spinner.setAttribute("style","-webkit-transform: rotateY("+ angle +"deg); -moz-transform: rotateY("+ angle +"deg); transform: rotateY("+ angle +"deg);");
}

//--------------POUR FAIRE DEFILER LES IMAGES ET LEUR TEXTE

//déclaration des images activées
var $totem = $('#totem');
var img0 = new Image();
img0.src = 'images/totem_tactile';

var $borne = $('#borne');
var img1 = new Image();
img1.src = 'images/borne_tactile';

var $pupitre = $('#pupitre');
var img2 = new Image();
img2.src = 'images/pupitre_tactile';

var $vitrine = $('#vitrine');
var img3 = new Image();
img3.src = 'images/vtrine_tactile';

var $table = $('#table');
var img4 = new Image();
img4.src = 'images/table_modulaire_tactile';

var $ecran = $('#ecran');
var img5 = new Image();
img5.src = 'images/ecran_tactile';

var $dev = $('#dev');
var img6 = new Image();
img6.src = 'images/application_developpement';

var $service = $('#service');
var img7 = new Image();
img7.src = 'images/services_max';

//déclaration du tableau
var tab = [[$totem,[img0,'totem']],[$borne,[img1,'borne']],[$pupitre,[img2,'pupitre']],[$vitrine,[img3,'vitrine']],[$table,[img4,'table modulable']],[$ecran,[img5,'ecran']],[$dev,[img6,'application']],[$service,[img7,'service']]];

//lier le carousel

var $carrousel = $('#carousel'), // on cible le bloc du carrousel
    $img = $('#carousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

//définit bouton + et -
$plus = $('.btnPlus');
$moins = $('.btnMoins');

//incrémentation bouton + et -
$plus.click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= tab.length ){
       alert(tab[i]);
    }
    else{
        i = 0;
    }

});

$moins.click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        alert(tab[i]);
    }
    else{
        i = 0;
    }

});
//------------------------------------------------------------------------------------------
$(document).ready(function(){
    
var $carrousel = $('#carrousel'), // on cible le bloc du carrousel
    $img = $('#carrousel img'), // on cible les images contenues dans le carrousel
    indexImg = $img.length - 1, // on définit l'index du dernier élément
    i = 0, // on initialise un compteur
    $currentImg = $img.eq(i); // enfin, on cible l'image courante, qui possède l'index i (0 pour l'instant)

$img.css('display', 'none'); // on cache les images
$currentImg.css('display', 'block'); // on affiche seulement l'image courante

$carrousel.append('<div class="controls"> <span class="prev">Precedent</span> <span class="next">Suivant</span> </div>');

$('.next').click(function(){ // image suivante

    i++; // on incrémente le compteur

    if( i <= indexImg ){
        $img.css('display', 'none'); // on cache les images
        $currentImg = $img.eq(i); // on définit la nouvelle image
        $currentImg.css('display', 'block'); // puis on l'affiche
    }
    else{
        i = indexImg;
    }

});

$('.prev').click(function(){ // image précédente

    i--; // on décrémente le compteur, puis on réalise la même chose que pour la fonction "suivante"

    if( i >= 0 ){
        $img.css('display', 'none');
        $currentImg = $img.eq(i);
        $currentImg.css('display', 'block');
    }
    else{
        i = 0;
    }

});

function slideImg(){
    setTimeout(function(){ // on utilise une fonction anonyme
						
        if(i < indexImg){ // si le compteur est inférieur au dernier index
	    i++; // on l'incrémente
	}
	else{ // sinon, on le remet à 0 (première image)
	    i = 0;
	}

	$img.css('display', 'none');

	$currentImg = $img.eq(i);
	$currentImg.css('display', 'block');

	slideImg(); // on oublie pas de relancer la fonction à la fin

    }, 7000); // on définit l'intervalle à 7000 millisecondes (7s)
}

slideImg(); // enfin, on lance la fonction une première fois

});



//-------------POUR LES ONGLETS SERVICES
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})