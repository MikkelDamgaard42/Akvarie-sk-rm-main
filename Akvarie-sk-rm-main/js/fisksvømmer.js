// --- Fiskdata: liste over fiskobjekter ---
// Hver post beskriver en fisk og bruges af sider, der viser
// detaljer om den enkelte art (navn, størrelse, farve, bosted osv.).
// Hold datastrukturen enkel; hvert objekt har følgende felter:
//  - navn: streng (bruges til matching/mod navigation)
//  - storrelse, farve, bosted, mad, fun_fact: metadata til visning
const fisk = [
{
navn: "Hvidstrubet kirurg",
storrelse: "Op til 25 cm",
farve: "Blågrå med lys, hvid stribe under hagen",
bosted: "Korallrev i det Indiske Ocean og Stillehavet",
mad: "Alger",
fun_fact: "Har en skarp pig ved haleroden, der fungerer som en 'kirurgkniv' til forsvar."
},
{
navn: "Gul kirurg",
storrelse: "20–25 cm",
farve: "Klar gul over hele kroppen",
bosted: "Rev omkring Hawaii og Stillehavsøerne",
mad: "Alger og små planktonplanter",
fun_fact: "Når mange svømmer sammen, ligner de en gul sky under vandet."
},
{
navn: "Palet kirurg",
storrelse: "Op til 30 cm",
farve: "Blå krop, sort mønster og gul hale",
bosted: "Korallrev i det Indiske Ocean og Stillehavet",
mad: "Alger og plankton",
fun_fact: "Kendt som 'Dory' fra Find Nemo – lidt glemsom, men meget venlig."
},
{
navn: "Sortbåndet kirurg",
storrelse: "20–25 cm",
farve: "Lys krop med sorte tværstriber",
bosted: "Korallrev i det Indiske Ocean",
mad: "Alger",
fun_fact: "Ligner en zebra med sine mørke bælte-lignende striber."
},
{
navn: "Orangeplettet kirurg",
storrelse: "20–25 cm",
farve: "Gråblå krop med små orange prikker",
bosted: "Det Indiske Ocean",
mad: "Alger og smådyr",
fun_fact: "De orange prikker ligner små stjerner på en nattehimmel."
},
{
navn: "Pincetfisk",
storrelse: "12–20 cm",
farve: "Gul og hvid med sort plet ved halen",
bosted: "Korallrev i Stillehavet og Det Indiske Ocean",
mad: "Små krebsdyr og orme i sprækker",
fun_fact: "Den lange snude virker som en pincet – perfekt til at finde mad i små huller."
},
{
navn: "Kanarie gylte",
storrelse: "10–12 cm",
farve: "Klar gul som en kanariefugl",
bosted: "Korallrev i det Indiske Ocean og Stillehavet",
mad: "Små krebsdyr og orme",
fun_fact: "En hurtig og nysgerrig fisk, der ofte holder revet fri for smådyr og parasitter."
},
{
navn: "Dværgkejser",
storrelse: "8–10 cm",
farve: "Blå, orange eller rød med skinnende mønstre",
bosted: "Korallrev i tropiske oceaner",
mad: "Alger og små krebsdyr",
fun_fact: "Selvom den er lille, opfører den sig som en ægte kejser og vogter sit lille territorium."
},
{
navn: "Kleins fanefisk",
storrelse: "15–18 cm",
farve: "Hvid, sort og gul med en lang fane på ryggen",
bosted: "Korallrev i Det Indiske og Stillehavet",
mad: "Smådyr og alger",
fun_fact: "Dens lange rygfinne ligner et flag, der svajer i vandet – derfor kaldes den 'fanefisk'."
},
{
navn: "Klovnefisk",
storrelse: "8–12 cm",
farve: "Orange med hvide og sorte striber",
bosted: "Korallrev i det Indiske og Stillehavet",
mad: "Små planktondyr og rester fra anemoner",
fun_fact: "Lever i symbiose med søanemoner, som beskytter den med giftige fangarme."
},
{
navn: "Konge febars",
storrelse: "20–25 cm",
farve: "Mørkeblå med lodrette hvide striber",
bosted: "Korallrev i det Indiske Ocean",
mad: "Små krebsdyr og fisk",
fun_fact: "Ungerne har et helt andet mønster end de voksne – de skifter farve med alderen."
}
];

// Gør alle billeder med `data-navn` klikbare.
// Når et billede klikkes, læses `data-navn` og siden navigerer til en
// matchende artsside hvis sådan en findes. Vi beholder den eksisterende
// adfærdslogik men tilføjer kommentarer for at gøre koden nemmere at følge.
document.querySelectorAll('img[data-navn]').forEach(img => {
	img.style.cursor = 'pointer';
	img.addEventListener('click', function() {
		const navn = img.getAttribute('data-navn');

		// Her er den oprindelige if/else-kæde der vælger destination.
		// Bemærk: sammenligningen er strengfølsom; values i `data-navn`
		// i HTML skal matche disse nøjagtigt (inkl. store/små bogstaver og
		// specialtegn). Hvis der ikke findes en match, gøres der ingenting.
		if (navn === 'Dværgkejser') {
			// Naviger til dværgkejser.html
			window.location.href = 'dværgkejser.html';
		} else if (navn === 'Klovnefisk') {
			window.location.href = 'klovnefisk.html';
		} else if (navn === 'Kleins fanefisk') {
			window.location.href = 'kleinsFanefisk.html';
		} else if (navn === 'Pincetfisk') {
			window.location.href = 'pincetfisk.html';
		} else if (navn === 'Kanarie gylte') {
			window.location.href = 'kanarieGylte.html';
		} else if (navn === 'Hvidstrubet kirurg') {
			window.location.href = 'hvidstrubetkirurg.html';
		} else if (navn === 'Orangeplettet kirurg') {
			window.location.href = 'orangeplettetkirurg.html';
		} else if (navn === 'Gul kirurg') {
			window.location.href = 'gulKirurg.html';
		} else if (navn === 'Sortbåndet kirurg') {
			window.location.href = 'sortbåndetkirurg.html';
		} else if (navn === 'Palet kirurg') {
			window.location.href = 'paletKirurg.html';
		} else if (navn === 'Konge Febars') {
			window.location.href = 'kongeFebars.html';
		}
		// Hvis der ikke findes en match, forbliver brugeren på samme side.
	});
});

