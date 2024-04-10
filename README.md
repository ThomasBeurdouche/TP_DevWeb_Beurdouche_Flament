# web-01
TP1 web developpement

Question pdf :
1. `npm install` command also generated a package-lock.json file along with package.json. What is the purpose of this file?

package-lock.json permet de définir la version exact des dépendances et sous-dépendance installé. A chaque fois que l’on installe une dépendance , le npm va chercher des versions qui sont compatibles avec celle utilisés dans le projet.

2. By convention, all NPM dependencies use a 3-digit format for version numbers. How do you call this?

On appelle cela le "semantic versioning" ce qui correspont au faite que chaque digit a une signification précise. Le premier chiffre correspond aux différentes versions non compatibles, le deuxième correspond aux updates et le troisième aux patchs.

3. What is a devDependency exactly? What are the differences with a dependency?

devDependency est une dépendance qui est nécessaire pour le développeur mais pas nécessaire pour l'utilisateur final contrairement a une dependency. C’est-à-dire les dépendances de paquets dont les développeurs ont besoin pour construire et tester l’application.

4. What is a closure/iife ? What was it used for ? What replaced it?

closure une option de javascript qui permet d'utiliser des variables présente dans une fontion pour les utiliser dans d'autres fonction interne notament les fonctions iife qui sont des fonctions spontanément créé et utilisé. 
Les deux méthodes sont utilisé pour éviter de poluer le scop local ou global de variable supplémentaire.
Les version suivante de ES vont apporté comme solution à ce problème de polution de scop les appelations de variable "let" et "const".

5. What is the difference between import * from './utils' and import { parseUrl } from './utils'? What can be the consequences of using one instead of the other?

import * from './utils' permet d'importer tous les lasses importables depuis /utils. import { parseUrl } from './utils' permet d'importer seulement "parseUrl" depuis /utils.
Cela permet de faire en sorte de ne pas poluer le code avec des classes qui ne nous intérèsse pas dans /utils. Cela peut aussi avoir un effet sur la taille du fichier bundle.

6. Can you think of at least 2 things that are possible with Java classes, but cannot be done with ES6 classes?

Java class peut utiliser un constructeur et des interfaces contrairement aux ES6 classes.

7. What are the differences between var and let;

let permet de créer des variables avec une portée limité à un block scope contrairement à var qui a un scop global

8. What is the .bind(this) stuff? What happens if you delete it? Is it needed when using an arrow function ? why ?

.bind(this) permet de spécifier à quel élément on applique la fonction voulue.
Si on enlève le .bind(this) alors la fonction utilisera l'objet du scop parent.
Le .bind(this) n'est en l'occurence pas nécessaire pour une arrow function car elle a déjà pour but d'utiliser d'utliser l'objet du scop parent dans lequel elle est présente.

9. What does the @ symbol mean in @babel/***?

@ permet d'indiquer que babel est un npm package.

10. What are the advantages of Promises?

L'avantge d'une promesse est que l'on peut continuer d'autre partie de code en attendant la réponse de la promesse. De plus elles permettent de chainer des évènements.

11. What version of ECMAScript async / await was released in ?

async et await sont apparue avec ES8

12. Component-oriented programming for the web is considered more maintainable. Why?

Une programation orienté component est considéré plus maintenable car elle présente une bonne organisation des ressources avec une séparation des technologie (html,css,js), une séparation des "concerns" qui permet de séparer les différents élémnents en fonctions de leurs utilisations. Tout ceci permet aussi de faciliter la ré-utilisation et modifications individuel des éléments bien séparés.

13. What is Functional programming?

La programmation fonctionnelle est la programmation qui se base sur l’utilisation des fonctions pour le développement logiciel. Les functions sont alors pures c’est à dire qu’elle fonctionne toujours de la même manière et produisent toujours le même résultat

14. Explain what the map() function does ?

map() permet d'appliquer une fonction à une list d'objets

15. Explain what the filter() function does ?

filter() permet de filtrer les objets d'une list à l'aide d'une condition

16. Explain what the reduce() function does ?

Applique une fonction à chaque valeur du tableau jusqu’à réduire le tableau en une seule valeur. A chaque étape on a en entrée le total et l’ancienne valeur.

17. What is the difference between .then() and async/await when handling asynchronous functions?

avec async/await pas besoin de configurer la chaine de promesse

18. What does the _ prefix mean on a sass file?

C'est une convention de nom utilisé pour indiquer que le fichier sass est partiel, c'est à dire qu'il est utilisé pour compléter d'autre fichier sass

Question Bonus:

Question 1: 247 kB + 556 kB + 257 kB pour les 3 vues donc environ 1 MB est transféré.

Question 2: 581 kB de transféré pour les 3 vue.

Question 3: 17 fichiers ont été téléchargé au total.

Question 4: Le fichier dist/main.js créé fait une taille de 4,63 Ko
Les codes source de "welcome.js", "game.js" et "score.js" n'ont pas été bundled car ils sont déjà importés ("à l'ancienne" avec une balise script) dans index.html

Question 5: dist/main.js fait 4,62 Ko

Question 6: dist/main.js fait 4,62 Ko
Il y a 2,8 kB (12 fichiers) de fichier transféré durant le passage des 3 vues

Question 7: "let" nous permet de créer plusieurs instances différentes d'une carte ce qui évite d'écrasé les cartes précédement créées

Question 8: Il a ajouté les "require", les "Object" et les "function" de utils dans game.component.js et a transformé la classe GameComponent en variable
Quand on réduit le taux de compatibilité, utils et gameComponent n'ont pas beacoup changer (peut être une ou deux function ou require supplémentaire).Le dossier "dist" fait 62Ko.