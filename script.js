// les petits point quand ils marche 
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

// Gestion du carousel
var slideIndex = 1;
showSlides(slideIndex);
// les buttons 
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// la lecture automatique
function autoplay() {
            setTimeout(autoplay, 4500);
            plusSlides(1);
        }
autoplay();

$(function(){
  
  // C'est ici que nous definissons les images qui doivent ouvrir une lightbox au click.
  // Pour nous, toutes les images dans les élément ovec la classe "thumbnail"
  $(".thumbnail img").click(function(){
    // Récupérationdu body, pour la suite
    var $body = $('body');
    // L'image qui as ete ouverte
    $thumbnail = $(this);
    
    // Nous créons ici nos elements
    var $blackout = $("<div id='blackout'>").css("display", "none");
    
    // La source de notre image provient bien du "data-img" de la thumbnail
    var $img = $("<img>").attr("src", $thumbnail.data("img"));
    $blackout.append($img);
    
    // Nous créons le titre si l'attribut alt existe
    if($(this).attr("alt")){
      var $title = $("<div class='title'>"+ $thumbnail.attr("alt") +"</div>");
      $blackout.append($title);
    }
    
    // Ce block ne s'execute pas maintenant, mais au prochain click sur notre "blackout". Il se lit comme suit :
    // Au clic sur le fond...
    $blackout.click(function(){
      // On fait disparaitre progressivement la lightbox...
      $blackout.fadeOut(function(){
        // Puis on la supprime.
        $blackout.remove();
      })
    });
    
    // On ajoute notre lightbox au body.
    $body.append($blackout);
    //Et enfin nous la faisons apparaitre progressivement.
    $blackout.fadeIn();
    
    // Ces trois petites lignes permettent de centrer l'image en hauteur
    if($img.height() < $blackout.height()){
      $img.css("marginTop", ($blackout.height() - $img.height()) / 2);
    }
    
  })
})