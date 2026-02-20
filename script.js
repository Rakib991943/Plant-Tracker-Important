const trivingList = document.querySelectorAll('.triving');
const strugglingList = document.querySelectorAll('.struggling');

let allcards = document.getElementById('allcard');
let totalElement = document.getElementById("total");
let trivingElement = document.getElementById('trivingCount');
let strugglingElement = document.getElementById('strugglingCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const trivingFilterBtn = document.getElementById('triving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');

function CalculateCount(){
    totalElement.innerText = allcards.children.length;
    trivingElement.innerText = trivingList.length;
    strugglingElement.innerText = strugglingList.length;
}

CalculateCount();

function togleStyle(id){
allFilterBtn.classList.remove('bg-black','text-white');
trivingFilterBtn.classList.remove('bg-black','text-white');
strugglingFilterBtn.classList.remove('bg-black','text-white');

allFilterBtn.classList.add('bg-gray-200','text-black');
trivingFilterBtn.classList.add('bg-gray-200','text-black');
strugglingFilterBtn.classList.add('bg-gray-200','text-black');

const selected = document.getElementById(id);
if(!selected) return;

selected.classList.remove('bg-gray-200','text-black');
selected.classList.add('bg-black','text-white');
}