"use strict";

/* IMPORTER LE FICHIER ET FAIRE L'APPEL API */

const URL = "http://localhost:5000";

Dropzone.autoDiscover = false;
var myDropzone = new Dropzone("div#my-dropzone", {
  url: URL + "/api/upload/in_html",
  maxFilesize: 5,
  maxFiles: 1,
  acceptedFiles: ".xml",
  addRemoveLinks: true,
  dictDefaultMessage:
    "Glissez-déposez vos fichiers ici ou cliquez pour les sélectionner.",
  dictRemoveFile: "Supprimer le fichier",
  dictMaxFilesExceeded:
    "Vous avez atteint le nombre maximal de fichiers autorisés.",
  dictInvalidFileType: "Le type de fichier n'est pas autorisé.",
});

var body = $("body");

myDropzone.on("addedfile", (file) => {
  $.ajax({
    url: URL + "/api/upload/in_html",
    method: "POST",
    data: file,
    contentType: false,
    processData: false,
    success: (response) => {
      console.log("Le fichier est recu avec succès");
      const data = JSON.parse(response).CV;
      formatHTML(data);
    },
    error: (xhr, status, error) => {
      console.log("Une erreur s'est produite : " + error);
      alert("Une erreur s'est produite lors de l'importation du fichier");
    },
  });
});

const formatHTML = (elements) => {
  var container = $("<div>");
  container.addClass("container mt-5");

  var titre = $("<h1>Application de gestion de CV</h1>");
  container.append(titre);
  titre.addClass("title");
  formatInformationPersonnelles(elements.InformationsPersonnelles, container);
  formatExperiencesProfessionnelles(
    elements.ExperiencesProfessionnelles,
    container
  );
  formatFormations(elements.Formations, container);

  body.html(container);
};

const formatInformationPersonnelles = (element, html) => {
  var card = $("<div class='card'></div>");
  var title = $("<h3 class='card-title'>Informations personnelles</h3>");
  var card_body = $("<div class='card-body'></div>");
  var list = card_body.append("<ul></ul>");
  list.append(`<li><div>Nom : </div> <div>${element.Nom}</div></li>`);
  list.append(`<li><div>Prénom : </div> <div>${element.Prenom}</div></li>`);
  list.append(`<li><div>Emil : </div> <div>${element.Email}</div></li>`);
  list.append(
    `<li><div>Télephone : </div> <div>${element.Telephone}</div></li>`
  );
  card.append(title);
  card.append(list);

  html.append(card);
};

const formatExperiencesProfessionnelles = (elements, html) => {
  var card = $("<div class='card'></div>");
  var title = $("<h3 class='card-title'>Experiences Professionnelles</h3>");

  card.append(title);

  $.each(elements, (index, element) => {
    $.each(element, (index, elt) => {
      var sous_card = $("<div class='card'></div>");
      var sous_card_body = $("<div class='card-body'></div>");
      var list = sous_card_body.append("<ul></ul>");

      list.append(`<li><div>Poste : </div> <div>${elt.Poste}</div></li>`);
      list.append(
        `<li><div>Entreprise : </div> <div>${elt.Entreprise}</div></li>`
      );
      list.append(
        `<li><div>Date de debut : </div> <div>${elt.DateDebut}</div></li>`
      );
      list.append(
        `<li><div>Date de fin : </div> <div>${elt.DateFin}</div></li>`
      );
      list.append(
        `<li><div>Description : </div> <div>${elt.Description}</div></li>`
      );

      sous_card.append(list);
      card.append(sous_card);
    });
  });

  html.append(card);
};

const formatFormations = (elements, html) => {
  var card = $("<div class='card'></div>");
  var title = $("<h3 class='card-title'>Formations Professionnelles</h3>");

  card.append(title);

  $.each(elements, (index, element) => {
    $.each(element, (index, elt) => {
      var sous_card = $("<div class='card'></div>");
      var sous_card_body = $("<div class='card-body'></div>");
      var list = sous_card_body.append("<ul></ul>");

      list.append(`<li><div>Diplome : </div> <div>${elt.Diplome}</div></li>`);
      list.append(
        `<li><div>Etablissement : </div> <div>${elt.Etablissement}</div></li>`
      );
      list.append(
        `<li><div>Date d'optention : </div> <div>${elt.DateObtention}</div></li>`
      );

      sous_card.append(list);
      card.append(sous_card);
    });
  });

  html.append(card);
};
