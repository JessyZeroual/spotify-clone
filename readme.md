# spotify-clone

![alt text](https://res.cloudinary.com/dsqtadlcb/image/upload/v1610371839/Sans_titre_mryoif.png "Logo Title Text 1")

## Configuration

Dans le fichier `client/package.json` mettre votre adresse ip en hôte afin de pouvoir lancer l'application sur votre device.

Renommage du fichier `server/.env.example` en `server/.env` puis ajout des informations nécessaires

Installation des dépendances pour la partie serveur

```
cd server && yarn install && yarn start
```

Installation des dépendances pour la partie client

```
cd client yarn install && yarn start
```

## Docs

- [Expo](https://docs.expo.io/)
- [Styled-components](https://styled-components.com/docs/api)
- [Apollo-client](https://www.apollographql.com/docs/react/get-started/)
- [Apollo-server](https://www.apollographql.com/docs/apollo-server/getting-started/)

## Todo

- Revoir la gestion des images récuperées sur l'API, car celles-ci ne s'affichent pas sur Android.
- Pouvoir mettre pause quand on écoute une preview de musique.
- Mettre en place des tests

## Conclusion

Ce projet a été enrichissant, Il m'a permis de travailler avec typeScript que je n'utilise pas habituellement (Il est possible que certaines choses sont à revoir).
J'ai mis plus ou moins une semaine pour réaliser ce projet.
