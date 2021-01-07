const getNameIconFromRoute = (routeName: string): string => {
  if (routeName === "Accueil") {
    return "home";
  }
  if (routeName === "Recherche") {
    return "search1";
  }
  return "exclamationcircleo";
};

export default getNameIconFromRoute;
