# Inbox

Inbox est une mini-application permettant de lister des messages et d'en créer un.

Chaque message étant composé d'un texte ainsi que d'un champ indiquant s'il est privé.

Une API est utilisée et mockée pour l'accès et la modification des données.

## Architecture

Ce projet utilise l'Atomic Design pour l'organisation des fichiers et des dossiers.

Etant donné la taille du projet, utiliser cette organisation semble un peu lourde mais elle est permet d'isoler des composants et de les rendre plus facilement réutilisables.

Même si ce choix n'est pas parfait pour ce projet en particulier, il permet d'anticiper l'évolution du code et le partage des composants.

De plus, il permet d'instaurer une organisation particulière ce qui est primordial pour travailler à plusieurs sur un projet.

Prettier est aussi utilisé pour instaurer certaines guidelines en ce qui concerne le code.

Un hook de precommit a été configuré (en utilisant Husky) et lancera un formattage automatique du code avant chaque commit.

ESLint est aussi utilisé lors de la création du build et sera utilisé aussi dans VSCode si c'est l'éditeur utilisé grâce au fichier .vscode/settings.json présent dans le repository.

La liste des règles appliquées par défaut sont disponibles [ici](https://github.com/facebook/create-react-app/blob/master/packages/eslint-config-react-app/index.js)

## Frameworks

J'ai choisi d'utiliser les hooks de React ainsi que le framework de blueprintjs qui est très complet et très bien documenté.

Les hooks permettent notamment de réutiliser plus facilement certains concepts grâce à l'utilisation de fonctions et non des méthodes. Il regroupe de plus certaines logiques au même endroit (componentDidMount, componentWillUnmount -> useEffect()), etc...

Les tests sont faits avec Jest et react-testing-library, ainsi que jest-dom.

Pour la gestion des données, j'ai utilisé redux + react-redux qui est je pense le plus connu et maitrisé actuellement par les développeurs JavaScript.

La gestion des requêtes HTTP est utilisé avec axios qui peut très facilement être mocké.

## API

La récupération des données est effectuée via des requêtes REST qui sont pour l'instant mockées puisque l'API côté serveur n'a pour l'instant pas été développée.

La constante REACT_APP_MOCK_API définie dans le fichier `.env` présent à la racine du projet permet l'activation des mocks de l'API. Lorsqu'elle est définie, les données sont récupérées de fichiers .json présents dans src/constants/mocks.

Voir le fichier `src/helpers/api-mock.js` et `src/constants/mocks`.

Pour désactiver le mocking de l'API il suffit de supprimer la définition `REACT_APP_MOCK_API` dans el fichier .env (ou `.env-production` par exemple).

## Commandes npm disponibles

Toutes les commandes creat-react-app de bases sont disponibles:

- `npm start`: lancement de l'app en mode développement (ouvrir [http://localhost:3000](http://localhost:3000) une fois l'app lancée)
- `npm test`: lancement des tests en mode watch
- `npm run build`: création d'un build dans le dossier `build` 
- `npm run eject`: sortie de create-react-app

J'ai aussi rajouté ces scripts npm:

 - `npm run analyze`: lancement de l'analyze du bundle (un build doit avoir été lancé avec `npm run build`)
 - `npm run storybook`: lancement du storybook (non utilisé par manque de temps)

 ## Ce que je n'ai pas eu le temps de faire ou aurai fait différemment

 J'aurai souhaité créé des stoies storybook afin de pouvoir visualiser/tester les différents composants de l'applicaton.

 Si j'étais certain que TypeScript était déjà utilisé en interne je l'aurai aussi utilisé afin d'avoir un TypeChecking plus fort, même s'il y a déjà certains checks effectués grâce à eslint et à l'utilisation des proptypes/defaultprops sur les composants React.

 J'aurai aussi pu utiliser Cypress pour les tests, mais vu la taille du projet cela semblait pas nécessaire. Pour une interface plus riche et plus complexe c'est par contre un atout très utile et très pratique.