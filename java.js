/*
Uppgift 1: 
Använd variabeln blue för att "toggla" bakrgrundsfärgen mellan blå och vit
för diven med id answer-one när man klickar på knappen
*/

let blue = false; 


function taskOne() {
  if (!blue) {
    blue = true;
    document.getElementById("answer-one").style.backgroundColor = "blue";
    return;
  }

    if (blue){
      blue = false;
      document.getElementById("answer-one").style.backgroundColor = "white";
      return;
      }
    }
/*
Uppgift 2: 
Varje gång man klickar på knappen ska ett nytt random-värde 
läggas till i numbers-arrayen, innan arrayen renderas ut i diven med id answer-two
*/

const numbers = [234, 986, 784];



function taskTwo() {

  var random_number = Math.floor(Math.random()* 2000);

  numbers.push(random_number);
  console.log(numbers);
  document.getElementById("answer-two").innerHTML = numbers; //skriver ut på skärmen och låter sig gå genom html 
}

/*
Uppgift 3: 
Identifiera vilken dag i veckan det är, ifall det är helg (lördag eller söndag) 
ska du trigga en alert med meddelandet "Woohooo it's weekend" annars om det 
inte är helg ska du trigga en alert med meddelandet "FML"
*/

function taskThree() {
    let day = new Date().getDay();
    
    
    if (day == [6] || day == [0]) {
    alert("Woho its weekend");
    }  else {
      alert ("Fuck");
    }
    }
/*
Uppgift 4: 
Anropa funktionen multiplier och förse den med två argument (värden), multiplier ska sedan 
undersöka om dessa värden är nummer, om så är fallet ska värdena multipliceras och resultatet 
ska sedan visas i en alert-box utefter följande: Produkten är: [RESULTATET], annars om ett av 
eller båda värdena inte är ett nummer ska en alertbox med meddelandet "Jag kan bara multiplicera numer" triggas
*/

function multiplier(valueOne, valueTwo) {

    if(typeof valueOne && typeof valueTwo === "number"){ 
      
     BothValues = valueOne * valueTwo;
     alert ("Produkten är: " + BothValues);
    } else {
      alert("Jag kan bara multiplicera nummer");
    
    }
    }
    
    function taskFour() {
     multiplier(9,5.5);
    }
/*
Uppgift 5: 
Börja med att iterera över arrayen fruits, om värdet är "apelsin" eller "päron" 
ska du pusha värdet till trash-arrayen, annars ska du pusha värdet till eatable-arrayen, 
du ska sedan rendera ut båda arrayerna i diven "answer-five", där eatable arrayen ska 
prefixas av "Ätligt:" i bold och trash-arrayens värden ska prefixas av "Skräp:" i bold

Det kommer alltså att se ut såhär
Ätligt: banan, äpple, citron
Skräp: apelsin, päron
*/

const fruits = ["banan", "äpple", "citron", "apelsin", "päron"];
const eatable = [];
const trash = [];

  for (let h = 0; h < fruits.length; h++){
  
  if (fruits[h] == "apelsin" || fruits[h] == "päron"){ 
    trash.push(fruits[h]);
} else {
  eatable.push(fruits[h]);
}
}

function taskFive(){
document.getElementById("answer-five").innerHTML = "<strong>Ätlig: </strong>" + eatable + "<br>" + "<strong>Skräp: </strong>" + trash;
}

/*
Uppgift 6: 
Börja med att iterera över arrayen persons, om personens age-attribut är över eller lika med 30
ska du pusha personens namn till overThirty-arrayen, annars ska du pusha värdet till underThirty-arrayen,
du ska sedan kolla om personens married-attribut är true eller false, är det true ska du pusha personens 
namn till married-arrayen, annars ska du pusha personens namn till notMarried-arrayen.

Du ska sedan rendera ut alla arrayerna i diven "answer-six", där overThirty arrayens värden ska 
prefixas av "Över 30:" i bold, underThirty-arrayens värden ska prefixas av "Under 30:" i bold, 
married-arrayens värden ska prefixas av "Gift:" i bold och notMarried-arrayens värden ska prefixas av "Ogift:" i bold

Det kommer alltså att se ut såhär
Över 30: Christian
Under 30: Diana,Carl,Karin
Gift: Christian,Diana
Ogift: Carl,Karin
*/

const persons = [
    { name: "Christian", age: 31, married: true },
    { name: "Diana", age: 29, married: true },
    { name: "Carl", age: 28, married: false },
    { name: "Karin", age: 29, married: false },
  ];
  
  const married = [];
  const notMarried = [];
  const overThirty = [];
  const underThirty = [];
  
  
  
  for (let j = 0; j < persons.length; j++){
    if(persons[j].married == true) {
      married.push(persons[j].name);
    } else {
      notMarried.push(persons[j].name);
    
  
  
  for (let k = 0; k < persons.lenght; k++){
    if(persons[k].age >= 30){
      overThirty.push(persons[k].name);
    }else {
      underThirty.push(persons[k].name);
    }
  }
}
}
  
  function taskSix() {
    document.getElementById("answer-six").innerHTML = 
    "<strong>över 30: </strong>" + overThirty + "<br>" +
    "<strong>under 30: </strong>" + underThirty + "<br>" + 
    "<strong>  married: </strong>" + married + "<br>" +
    "<strong>ogift: </strong>" + notMarried;
  }
  

/*
Uppgift 7: 
Dela upp strängen addMeSomeLineBreaks vid varje komma och skriv 
ut texten på en ny rad i diven "answer-seven"
*/

const addMeSomeLineBreaks =
  "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";

let linebreak  = "";

for (let g of addMeSomeLineBreaks){
  switch(g){
    case ",":
      linebreak += ", <br>";
        break;
    default:
      linebreak += g;

  }
}

function taskSeven() {
  document.getElementById("answer-seven").innerHTML = linebreak;
}

/*
Uppgift 8: 
Dölj diven med id card-eight i 3 sekunder efter att du klickat på knappenn,
efter att tre sekunder har gått ska diven visas som vanligt igen
*/

/*function taskEight() {
    document.getElementById("card-eight").style.display = "none";
  }
  
  setTimeout(() => {
    document.getElementById("card-eight").style.display = "block"
  }, 4000);
  +

/*
Uppgift 9: 
Om klockan är över 17.00 ska bakgrundsfärgen ändras på alla divar med klassen 
answer-container till blå, annars ska den ändras till röd
*/

function taskNine() {
  const date = new Date();
  const color = document.getElementsByClassName("answer-container");

  for (let f = 0; f < color.length; f++){
      if (date.getHours() >= 17) {
          color[f].style.backgroundColor = "blue";
      } else {
            color[f].style.backgroundColor = "red";
      }
   }
}

/*
Uppgift 10: 
Sista uppgiften är att bygga en miniräknare genom att anropa och förse 
calculator-funktionen med tre argument (se taskTen-funktionen), 
i calculator-funktionen ska du sedan göra olika beräkningar (plus, minus, gånger, delat med) på de två 
första parametrarna beroende av vad den tredje parametern är satt till ("add", "subtract", "multiply", "divide"). 
När resultatet har beräknats ska detta visas i en alert-box. 

Ytterligare så ska du innan beräkningen görs kontrollera att argument 1 och 2 är satta till nummer 
och att argument nummer tre antingen är satt till "add", "subtract", "multiply" eller "divide", 
om någon av dessa conditions inte uppfylls ska du visa en alertbox med texten "Något är fel"
*/

function calculator(valueOne, valueTwo, operator) {
  if (typeof valueOne && typeof valueTwo == "number") {
      switch (operator) {
          case "add":
              alert(valueOne + valueTwo);
              break;
          case "subtract":
              alert(valueOne - valueTwo);
              break;
          case "multiply":
                alert(valueOne + valueTwo);
                break;
          case "divide":
                alert(valueOne - valueTwo);
                break;
          default: 
                alert("något är fel");
      }
    } else {
        alert("något är fel")
    }
}

function taskTen() {
  //första och andra argumentet ska vara nummer, tredje argumentet ska
  //vara en sträng med något av värdena "add", "subtract", "multiply", "divide"
  calculator(78,90,"divide");
}
