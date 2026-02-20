const trivingList = [ ];
const strugglingList = [ ];

let allcards = document.getElementById('allcard');
let totalElement = document.getElementById("total");
let trivingElement = document.getElementById('trivingCount');
let strugglingElement = document.getElementById('strugglingCount');


function CalculateCount(){
    totalElement.innerText = allcards.children.length;
    trivingElement.innerText = trivingList.length ;
    strugglingElement.innerText = strugglingList.length ;
}

CalculateCount()
