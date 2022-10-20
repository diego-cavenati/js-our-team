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
const rowEl = document.querySelector(".row");

// Creare l’array di oggetti con le informazioni fornite
const staff = [
    {
    name : "Wayne Barnett",
    role : "Founder & CEO",
    image : `<img src="./assets/img/wayne-barnett-founder-ceo.jpg" alt="">`,
    },
    {
    name : "Angela",
    role : "Chief Editor",
    image : `<img src="./assets/img/angela-caroll-chief-editor.jpg" alt="">`,
    },
    {
    name : "Walter gordon",
    role : "Chief Editor",
    image : `<img src="./assets/img/walter-gordon-office-manager.jpg" alt="">`,
    },
    {
    name : "Angela Lopez",
    role : "Social Media Manager",
    image : `<img src="./assets/img/angela-lopez-social-media-manager.jpg" alt="">`,
    },
    {
    name : "Scott Estrada",
    role : "Developer",
    image : `<img src="./assets/img/scott-estrada-developer.jpg" alt="">`,
    },
    {
    name : "Barbara Ramos",
    role : "Graphic designer",
    image : `<img src="./assets/img/barbara-ramos-graphic-designer.jpg" alt="">`,
    }
]

// Stampare su console  e nella Dom le informazioni di nome, ruolo e la stringa
for (let i = 0; i< staff.length; i++) {
    const thisPerson = staff[i];

    rowEl.innerHTML += `
    <div class="col">
        <div class="card">
            ${thisPerson.image}
            <h3>${thisPerson.name}</h3>
            <h5>${thisPerson.role}</h5>
        </div>
    </div>
    `;

}

// Trasformare la stringa foto in una immagine effettiva