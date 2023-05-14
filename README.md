# PROJET INTERGICIEL

    Notre objectif est de pouvoir recupérer les fichiers aux format XML,

    lire le contenu via un webservice et afficher le fichier HTML resultant.
    Ce HTML est la présentation du CV d'un individus quelconque.

## Installation

Pour faire fonctionner le projet en local, il suffit de

### Côté Front

1.  Cloner le projet via le lien :

    ```
        git clone https://github.com/Rushclin/intergiciel
    ```

2.  Executer les commandes suivantes

    ```
        cd intergiciel/front
    ```

3.  Demarrer le projet via Live Server ou clicker simplement sur le fichier index.html

### Côté API

1. Executer la commande suivant :

   ```
       cd intergiciel/api
   ```

2. Creer l'environement virtuel de python

   ```
       python -m venv venv
   ```

3. Demarrer l'environement virtuel de python
   a. Sous Windows
   `       .\venv\Script\activate`
   b. Sous Linux
   `       source venv/bin/activate`

4. Installer les dépendences

   ```
       pip install -r requirements.txt
   ```

5. Demarrer le projet

   ```
       python scr/app.py
   ```

## Voir le projet

    Si le projet est demarré avec Live Server, visiter le lien (Côté front):

    ```
        http://localhost:5500
    ```

    Cote API

    ```
        http://localhost:5000
    ```

## Licence

    Ce projet n'est sous aucune licence.

## Credit

    1. DropZone JS
    2. JQUERY
    3. Flask
    4. lxml
    5. odfpy
    6. flask_cors
    7. urllib3
    8. xmlschema
    9. xmltodict

## Auteurs

Ce projet est le fruit du groupe 13 du cours d'intergiciel (Univ DSCHANG)

1. Takam Rushclin,
2. TCHEMBEU Leonel,
3. TCHINDA Cyrile,
4. NOKAM Christine,
5. TAKAM Platini,
6. FAYAM Alexandre.
