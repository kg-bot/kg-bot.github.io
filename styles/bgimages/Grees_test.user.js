// ==UserScript==
// @name        AntiSpam
// @namespace   erep_test
// @description Testna eRep skripta
// @include     http://www.erepublik.com/*
// @include     http://*.erepublik.com/*
// @version     1
// @grant       none
// ==/UserScript==
function obrisiSpamera() {
	var divs = document.getElementById("notification_area");
	divs.removeChild(divs.childNodes[0]);
	divs.removeChild(divs.childNodes[1]);
	divs.removeChild(divs.childNodes[2]);
	divs.removeChild(divs.childNodes[3]);
	divs.removeChild(divs.childNodes[4]);
	divs.removeChild(divs.childNodes[5]);
	divs.removeChild(divs.childNodes[6]);
}
function obrisiCupidDonacije() {
	if (document.getElementsByClassName("cupid_2014_gift_a_friend"))
		{
		var cupid = document.getElementsByClassName("cupid_2014_gift_a_friend");
		cupid[0].parentNode.removeChild(cupid[0]);
		}
}
function obrisiDonjiBaner() {
	if (document.getElementsByClassName("sidebar_banners_area"))
		{
		var banner = document.getElementsByClassName("sidebar_banners_area");
		banner[0].parentNode.removeChild(banner[0]);
		}
}
function obrisiGiftSliku() {
	if (document.getElementById("donate_to_friend"))
		{
		var gift = document.getElementById("donate_to_friend");
		var gift_slika = gift.childNodes[1];
		gift_slika.style.backgroundImage='none';
		gift_slika.style.backgroundColor='transparent';
		gift_slika.style.backgroundClip='inherit';
		gift_slika.style.border='inherit';
		gift_slika.style.boxShadow='inherit';
		gift_slika.innerHTML='Send a gift<img width="13" height="21" alt="" src="http://s2.www.erepublik.net/images/modules/citizenprofile/left_arrow.png">';
		}
}
function napraviListu() {
	var dete = document.getElementById("content");
	var prvoDete = dete.childNodes[6].childNodes[1].childNodes[1];
	var novoDete = document.createElement("div");
	prvoDete.appendChild(novoDete);
	var novoDete_text = document.createTextNode("Whats uuuuuuuup");
	novoDete.appendChild(novoDete_text);
	novoDete.id="moja_lista";
	novoDete.style.backgroundColor="transparent";
	var dugme = document.createElement("button");
	var dugme_text = document.createTextNode("Please Click Me");
	novoDete.appendChild(dugme);
	dugme.appendChild(dugme_text);
	dugme.type="button";
	dugme.id="dugmeZaFirme";
	console.log("Now going to add events");
	dugme.addEventListener("dblclick", dbklik, true);
	console.log("dblclick added");
	dugme.addEventListener("click", jedanklik, true);
	console.log("click added");
}
function napraviListuAko() {
	if (document.URL == "http://www.erepublik.com/en/economy/myCompanies")
		{
		if (document.getElementById("moja_lista"))
			{
			return
			}
		else
			{
			napraviListu()
			}
		}
}
function alertMe() {
	alert("Hellooooo");
}
function dbklik(){
	var lista = document.getElementById("moja_lista");
	lista.style.backgroundColor='transparent';
}
function jedanklik() {
	var lista = document.getElementById("moja_lista");
	lista.style.backgroundColor='red';
}
document.body.addEventListener("load", obrisiSpamera, true);
document.body.addEventListener("load", obrisiCupidDonacije, true);
document.body.addEventListener("load", obrisiDonjiBaner, true);
document.body.addEventListener("load", obrisiGiftSliku, true);
document.body.addEventListener("load", napraviListuAko, true);
document.addEventListener("load", alertMe, false);