/* 
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team. Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

- MILESTONE 0: Creare l’array di oggetti con le informazioni fornite.
- MILESTONE 1: Stampare su console le informazioni di nome, ruolo e la stringa della foto
- MILESTONE 2: Stampare le stesse informazioni su DOM sottoforma di stringhe

- BONUS 1: Trasformare la stringa foto in una immagine effettiva
- BONUS 2: Organizzare i singoli membri in card/schede 
*/

// prendo elemento DOM
const containerEl = document.querySelector(".container");
const ulEl = document.querySelector(".elenco");

// Creare l’array di oggetti con le informazioni fornite
const staff = [
    {
    name : "Wayne Barnett",
    role : "Founder & CEO",
    image : "wayne-barnett-founder-ceo.jpg",
    },
    {
    name : "Angela",
    role : "Chief Editor",
    image : "angela-caroll-chief-editor.jpg",
    },
    {
    name : "Walter gordon",
    role : "Chief Editor",
    image : "walter-gordon-office-manager.jpg",
    },
    {
    name : "Angela Lopez",
    role : "Social Media Manager",
    image : "angela-lopez-social-media-manager.jpg",
    },
    {
    name : "Scott Estrada",
    role : "Developer",
    image : "scott-estrada-developer.jpg",
    },
    {
    name : "Barbara Ramos",
    role : "Graphic designer",
    image : "barbara-ramos-graphic-designer.jpg",
    }
]

// Stampare su console  e nella Dom le informazioni di nome, ruolo e la stringa
for (let i = 0; i< staff.length; i++) {
    const thisPerson = staff[i];

    for (const key in thisPerson) {
        const value = thisPerson[key];
        console.log(key + " : " + value);
        ulEl.innerHTML += `<li>${key} : ${value}</li>`;
    }

}
