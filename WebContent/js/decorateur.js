//Entités
function updateEntite(idEntite, entite) {
	document.getElementById('idEntite').value = idEntite;
	document.getElementById('entite').value = entite;
}
function deleteEntite(idEntite) {
	document.getElementById('idEntite_Supprimer').value = idEntite;
}
//Filières
function updateFiliere(idFiliere, filiere) {
	alert(idFiliere+ filiere);
	document.getElementById('idFiliere').value = idFiliere;
	document.getElementById('filiere').value = filiere;
}
function deleteFiliere(idFiliere) {
	alert(idFiliere);
	document.getElementById('idFiliere_Supprimer').value = idFiliere;
}
//Spécialités
function updateSpecialite(idSpecialite, specialite) {
	alert(idSpecialite+ specialite);
	document.getElementById('idSpecialite').value = idSpecialite;
	document.getElementById('specialite').value = specialite;
}
function deleteSpecialite(idSpecialite) {
	alert(idSpecialite);
	document.getElementById('idSpecialite_Supprimer').value = idSpecialite;
}
//Niveaux d'études
function updateNiveauxEtude(idNiveauxEtude, niveauxEtudes) {
	alert(idNiveauxEtude+ niveauxEtudes);
	document.getElementById('idNiveauxEtude').value = idNiveauxEtude;
	document.getElementById('niveauxEtudes').value = niveauxEtudes;
}
function deleteNiveauxEtude(idNiveauxEtude) {
	document.getElementById('idNiveauxEtude_Supprimer').value = idNiveauxEtude;
}
//Départements
function updateDepartement(idDepartement, departement) {
	alert(idDepartement+departement);
	document.getElementById('idDepartement').value = idDepartement;
	document.getElementById('departement').value = departement;
}
function deleteDepartement(idDepartement) {
	alert(idDepartement);
	document.getElementById('idDepartement_Supprimer').value = idDepartement;
}
//Services
function updateService(idService, service, choose_DepartementUpdate) {

	document.getElementById('idService').value = idService;
	document.getElementById('service').value = service;
	
	var dd = document.getElementById('choose_DepartementUpdate');
	for (var i = 0; i < dd.options.length; i++) {
	    if (dd.options[i].text === choose_DepartementUpdate) {
	        dd.selectedIndex = i;
	        break;
	    }
	}
}
function deleteService(idService) {
	alert(idService);
	document.getElementById('idService_Supprimer').value = idService;
}
//Motifs d'absence
function updateMotifsAbsence(idMotifsAbsence, motifAbsence) {
	alert(idMotifsAbsence+motifAbsence);
	document.getElementById('idMotifsAbsence').value = idMotifsAbsence;
	document.getElementById('motifAbsence').value = motifAbsence;
}
function deleteMotifsAbsence(idMotifsAbsence) {
	alert(idMotifsAbsence);
	document.getElementById('idMotifsAbsence_Supprimer').value = idMotifsAbsence;
}
//Absences
function updateAbsence(idAbsence, idStagiaire, dateDebut, dateFin,idMotifsAbsence) {
	alert(idAbsence+ idStagiaire+ dateFin+ dateDebut+ idMotifsAbsence);
	document.getElementById('idAbsence').value = idAbsence;
	document.getElementById('choose_idStagiaire_chzn').value = idStagiaire;
	document.getElementById('idMotifsAbsence').value = idMotifsAbsence;
	document.getElementById('dateDebut').value = dateDebut;
	document.getElementById('dateFin').value = dateFin;
}
function deleteAbsence(idAbsence) {
	alert(idMotifsAbsence);
	document.getElementById('idAbsence_Supprimer').value = idMotifsAbsence;
}
//Stagiaires
function updateAbsence(idAbsence, idStagiaire, idMotifsAbsence, dateDebut, dateFin) {

}
function deleteAbsence(idAbsence) {
	
}
function getTheme(idStagiaire, themeStage) {
	alert(idStagiaire+ themeStage);
	//document.getElementById('idAbsence_Supprimer').value = idMotifsAbsence;
}