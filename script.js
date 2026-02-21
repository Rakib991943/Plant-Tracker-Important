const maincontainer = document.querySelector('main');
const thrivingLists = [];
const strugglingLists = [];

let allcards = document.getElementById('allcard');
let totalElement = document.getElementById("total");
let thrivingElement = document.getElementById('thrivingCount');
let strugglingElement = document.getElementById('strugglingCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const thrivingFilterBtn = document.getElementById('thriving-filter-btn');
const strugglingFilterBtn = document.getElementById('struggling-filter-btn');

// Filter Section
const filteredSection = document.getElementById('filtered-section');

function calculateCount(){
    totalElement.innerText = allcards.children.length;
    thrivingElement.innerText = thrivingLists.length;
    strugglingElement.innerText = strugglingLists.length;
}



function toggleStyle(id){
    allFilterBtn.classList.remove('bg-black','text-white');
    thrivingFilterBtn.classList.remove('bg-black','text-white');
    strugglingFilterBtn.classList.remove('bg-black','text-white');

    allFilterBtn.classList.add('bg-gray-200','text-black');
    thrivingFilterBtn.classList.add('bg-gray-200','text-black');
    strugglingFilterBtn.classList.add('bg-gray-200','text-black');

    const selected = document.getElementById(id);
    if(!selected) return;

    selected.classList.remove('bg-gray-200','text-black');
    selected.classList.add('bg-black','text-white');

    // ✅ FIX filter logic
    if(id =='thriving-filter-btn'){
        filteredSection.classList.remove('hidden');
        allcards.classList.add('hidden');

    }else if (id== 'all-filter-btn'){
        filteredSection.classList.remove('hidden');
        allcards.classList.remove('hidden');
    }
}

maincontainer.addEventListener('click', function(event){

    if(event.target.classList.contains('thriving-btn')){
        const parentNode = event.target.closest('.card');

        const plantName = parentNode.querySelector('.plantName').innerText;
        const latinName = parentNode.querySelector('.latinName').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        const light = parentNode.querySelector('.light').innerText;
        const water = parentNode.querySelector('.water').innerText;

        // ✅ FIX spelling + status logic
        parentNode.querySelector('.status').innerText = 'Thrive';
         parentNode.querySelector('.status').classList.add('text-green-400','font-bold')

        const cardInfo = {
            plantName,
            latinName,
            status: 'Thrive',
            notes,
            water,
            light
        };

        const plantExist = thrivingLists.find(item => item.plantName === cardInfo.plantName);

        if(!plantExist){
            thrivingLists.push(cardInfo);
            calculateCount(); // ✅ FIX count update
        }
        calculateCount();
        renderThriving();
    }else  if(event.target.classList.contains('struggling-btn')){
        const parentNode = event.target.closest('.card');

        const plantName = parentNode.querySelector('.plantName').innerText;
        const latinName = parentNode.querySelector('.latinName').innerText;
        const notes = parentNode.querySelector('.notes').innerText;
        const light = parentNode.querySelector('.light').innerText;
        const water = parentNode.querySelector('.water').innerText;

        // ✅ FIX spelling + status logic
        parentNode.querySelector('.status').innerText = 'Struggle';
         parentNode.querySelector('.status').classList.add('text-red-400','font-bold')

        const cardInfo = {
            plantName,
            latinName,
            status: 'Struggling',
            notes,
            water,
            light
        };

        const plantExist = strugglingLists.find(item => item.plantName === cardInfo.plantName);

        if(!plantExist){
        strugglingLists.push(cardInfo);
            calculateCount(); // ✅ FIX count update
        }
        calculateCount();
        renderStruggling();
    }

});

function renderThriving(){
    filteredSection.innerHTML = '';

    for(let thrive of thrivingLists){
        const div = document.createElement('div');
        div.className = 'card flex border p-8 justify-between';
        div.innerHTML = `
        <div class="card-right space-y-6">
            <div>
                <div class="plantName text-3xl font-bold">${thrive.plantName}</div>
                <div class="latinName">${thrive.latinName}</div>
            </div>
            <div class="flex gap-4">
                <p class="px-4 py-2 bg-gray-200 light">${thrive.light}</p>
                <p class="px-4 py-2 bg-gray-200 water">${thrive.water}</p>
            </div>
            <p class="status">${thrive.status}</p>
            <p class="notes">${thrive.notes}</p>
            <div class="flex gap-4">
                <button class="thriving-btn btn bg-green-300 px-4 py-2 rounded-xl">Thrive</button>
                <button class="struggling-btn btn bg-red-300 px-4 py-2 rounded-xl">Struggling</button>
            </div>
        </div>
        <div class="card-left">
            <button class="delete-btn bg-red-300 px-5 py-2">Delete</button>
        </div>
        `;
        filteredSection.appendChild(div);
    }
}
function renderStruggling(){
    filteredSection.innerHTML = '';

    for(let struggle of thrivingLists){
        const div = document.createElement('div');
        div.className = 'card flex border p-8 justify-between';
        div.innerHTML = `
        <div class="card-right space-y-6">
            <div>
                <div class="plantName text-3xl font-bold">${struggle.plantName}</div>
                <div class="latinName">${struggle.latinName}</div>
            </div>
            <div class="flex gap-4">
                <p class="px-4 py-2 bg-gray-200 light">${struggle.light}</p>
                <p class="px-4 py-2 bg-gray-200 water">${struggle.water}</p>
            </div>
            <p class="status">${struggle.status}</p>
            <p class="notes">${struggle.notes}</p>
            <div class="flex gap-4">
                <button class="thriving-btn btn bg-green-300 px-4 py-2 rounded-xl">Thrive</button>
                <button class="struggling-btn btn bg-red-300 px-4 py-2 rounded-xl">Struggling</button>
            </div>
        </div>
        <div class="card-left">
            <button class="delete-btn bg-red-300 px-5 py-2">Delete</button>
        </div>
        `;
        filteredSection.appendChild(div);
    }
}