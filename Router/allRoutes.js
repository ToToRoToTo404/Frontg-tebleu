import Route from "./route.js";
//Définir ici vos routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "La galerie", "/pages/galerie.html"),
    new Route("/contact", "Contact", "/pages/contact.html"),
    new Route("/reservations", "Réservations", "/pages/reservations.html"),
    new Route("/region", "La région", "/pages/region.html"),
];



//Le titre s'affiche comme ceci : Route.titre - websitename
export const websiteName = "Gîte bleu";