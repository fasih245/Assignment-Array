var StudentNames=[];
console.log(StudentNames);

var stringArray=['string1' , 'string2','string3'];
console.log(stringArray);

var numArray=[0,1,2,3,4,5,6,7,8,9,];
console.log(numArray);

var booleanArray=[true,false];
console.log(booleanArray);

var mixedArray=[1,'abc',true];
console.log(mixedArray);

var cellNetworks=['Ufone','Zong','Telenor','Jazz','Warid'];
console.log(cellNetworks);

var eduDegree=['SSC','HSC','BCS','BS','BCOM','MS','M.Phil','PhD'];
console.log(eduDegree);

document.write("<p>Qualifications:</p>")
document.write("<ol><li>SSC</li><li>HSC</li><li>BCS</li><li>BS</li><li>BCOM</li><li>MS</li><li>M.Phil</li><li>PhD</li></ol>");
// document.write(eduDegree.indexOf('BS'));

var topMovies2024=[];
topMovies2024.push('Dead Pool','Damsel','Atlas','Rad House');
document.write("<p>Top Movies 2024</p>")

// function generateListItems(arg){
//  let items="";
//  for(let i=0; i< arg.length; i++){
//     items += `<li>${arg[i]}</li>`;

// }
// return items;
// }

// document.querySelector("main").innerHTML = 
// `
// <ol>
// ${generateListItems(topMovies2024)}
// </ol>`;


console.log(topMovies2024);
document.querySelector("#movies").innerHTML = document.write('<ol>','<li>'+topMovies2024[0],'</li>', '</li>')
document.write('<li>'+topMovies2024[1],'</li>','<li>'+topMovies2024[2],'</li>','<li>'+topMovies2024[3],'</li>','</ol>')
document.write('<b> Length of the array: </b>', topMovies2024.length);



// Fav Cars
var favCars=["Audi","Aston Martin","Paggani","Rolls Royce"];
document.write('<br><br><br><b>Favorite Cars</b>')
document.write('<br><br>',favCars,);
document.write('<br>','First Index of the array: ',favCars.indexOf("Audi"));
document.write('<br>','Car at First Index of the array: ',favCars[0]);
document.write('<br>','Lasst Index of the array: ',favCars.indexOf("Rolls Royce"));
document.write('<br>','Car at Lasst Index of the array: ',favCars[3]);


var fruits=["Strawberry","Apple","Orange","Banana"];

document.write('<br><br> Fruit List <br>',fruits);
var sortedFruits= fruits.sort();
document.write('<br><br> Ordered Fruit List: <br>',sortedFruits);
