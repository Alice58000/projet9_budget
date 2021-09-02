 let budget = document.getElementById('budget');
 let ajouter = document.getElementById('ajouter');
 

function getValue() {

      let libelle = document.getElementById('libelle').value;
    
      let montant = document.getElementById('montant').value;

      let categories = document.getElementById('categories').value;

      let resultat = document.getElementById('resultat');

      let dépenses = document.getElementById('depenses');

      let revenus = document.getElementById('revenus');

     let totalrevenus = document.getElementById('totalrevenus');

     let totaldepenses = document.getElementById('totaldepenses');

     let budget = documentgetElementById('budget');
     
     //  resultat.innerHTML= libelle;

     //crée un nouvel élément 

     let newcalcul = document.createElement('p');
     newcalcul.id ='libelle2';

     let newcalcul2 = document.createElement('p');
     newcalcul2.id ='montant2';

     let newcalcul3 = document.createElement('p');
     newcalcul3.id ='categories2';


     newcalcul.textContent = libelle;
     newcalcul2.textContent = montant;
     newcalcul3.textContent = categories;

     // et lui donne du contenu 

     // let calcul = document.createTextNode('libelle');
     // let calcul2 = document.createTextNode('montant');
     // let calcul3 = document.createTextNode('categories');
     

     // ajoute le  texte à l'élément 

     // newcalcul.appendChild('calcul');
     // newcalcul2.appendChild('calcul2');
     // newcalcul3.appendChild('calcul3');


     // resultat.appendChild(newcalcul);
     // resultat.appendChild(newcalcul2);
     // resultat.appendChild(newcalcul3);


     if (categories==="depenses") {
          dépenses.appendChild(newcalcul);
          dépenses.appendChild(newcalcul2);
    
     }


          else if (categories==="revenus") {
               revenus.appendChild(newcalcul);
               revenus.appendChild(newcalcul2);
              
          }



     }



