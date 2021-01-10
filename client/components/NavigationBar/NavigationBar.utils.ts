const getNameIconFromRoute = (routeName: string): string => {
  if (routeName === "Accueil") {
    return "home-sharp";
  }
  if (routeName === "Recherche") {
    return "search";
  }
  if (routeName === "Biblioteque") {
    return "library";
  }
  if (routeName === "Parametres") {
    return "settings";
  }
  return "exclamationcircleo";
};

export default getNameIconFromRoute;
