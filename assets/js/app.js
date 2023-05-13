"use strict";

/* IMPORTER LE FICHIER ET FAIRE L'APPEL API */

Dropzone.autoDiscover = false;
var myDropzone = new Dropzone("div#my-dropzone", {
  url: "/upload",
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

myDropzone.on("addedfile", (file) => {
  console.log("Le nom du fichier est : ", file.name);

  var formData = new FormData();
  formData.append("file", file);

  $.ajax({
    url: "/upload", // L'URL a fournir par le groupe precedent
    method: "POST",
    data: formData,
    contentType: false,
    processData: false,
    success: (response) => {
      console.log("Le fichier a été envoyé avec succès : " + response);
    },
    error: (xhr, status, error) => {
      console.log("Une erreur s'est produite : " + error);
    },
  });
});
