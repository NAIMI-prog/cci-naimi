function showCity() {
  // 1. Récupérer la valeur courante du menu 
  // Pour ça on va faire :
  let nomVilleSelectionnee = document.getElementById(choix);

  // 2. Récupérer la liste de toutes les div correspondant à une div de météo 
  // Pour ça on va faire :
  let cities = document.getElementsByClassName("city");

  // 3. Parcourir la liste des div et cacher celles qui ne sont pas sélectionnées.
  // TODO : definir l : la taille max de votre tableau cities
  for (i=0; i<4; i++) {
    if (cities[i].id == nomVilleSelectionnee) {
      // garder l'element visible -> 
	  cities[i].style.display= "none";
    } else {
      // cacher l'element -> 
	  cities[i].style.display= "";
    }
  }
}