# BackpackAzure
Angular SPA skeleton calling azure function

# Application serveur
L'application serveur est faite avec azure fonction. Pour la lancer, ouvrir avec visual studio (violet) la solution (le fichier.sln), et lancer l'application en debug.

# Base de donnees
L'applicaiton utilise une base de donee mySql, il fout tout d'abord creer un schema : `Backpack` puis a partir de postman appeller la methode init (http://localhost:7054/api/InitDB en POST). Pour lancer le script de creation de la table.

# Application Angular
Pour lancer l'application Angular:
- Ouvrir le terminal de commande
- Se placer dans BackpackClient
- Lancer la commande `npm install`
- Lancer la commande `ng serve`
