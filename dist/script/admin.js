//*Admin page
const addNewMealBtn = document.getElementById('add-new-meal');
const breakfastMeals = document.getElementById('breakfast-meals');
const starterMeals = document.getElementById('starter-meals');
const chickenMeals = document.getElementById('chicken-meals');
const beefMeals = document.getElementById('beef-meals');
const porkMeals = document.getElementById('pork-meals');
const lambMeals = document.getElementById('lamb-meals');
const seafoodMeals = document.getElementById('seafood-meals');
const pastaMeals = document.getElementById('pasta-meals');
const dessertMeals = document.getElementById('dessert-meals');
const drinksMeals = document.getElementById('drinks-meals');
const newMealMeals = document.getElementById('new-meal-meals');
const managementDiv = document.getElementById('management-div');
const allMealsDiv = document.getElementById('all-meals-div');
const addNewMealDiv = document.getElementById('add-new-meal-div');
const newMealPicture = document.getElementById('new-meal-picture');
const newMealName = document.getElementById('new-meal-name');
const newMealDescription = document.getElementById('new-meal-description');
const newMealPrice = document.getElementById('new-meal-price');
const newMealStock = document.getElementById('new-meal-stock');
const newMealPrepTime = document.getElementById('new-meal-prep-time');
const newMealRecipe = document.getElementById('new-meal-recipe');
const newMealId = document.getElementById('new-meal-id');
const newMealCategory = document.getElementById('new-meal-category');
const editMealDiv = document.getElementById('edit-meal-div');
const editMealPicture = document.getElementById('edit-meal-picture');
const editMealName = document.getElementById('edit-meal-name');
const editMealDescription = document.getElementById('edit-meal-description');
const editMealPrice = document.getElementById('edit-meal-price');
const editMealStock = document.getElementById('edit-meal-stock');
const editMealPrepTime = document.getElementById('edit-meal-prep-time');
const editMealRecipe = document.getElementById('edit-meal-recipe');
const editMealId = document.getElementById('edit-meal-id');
const editMealCategory = document.getElementById('edit-meal-category');
//-show all meals with GET - onload event
function showAllMeals() {
    showLoader();
    setTimeout(() => {
        getAllMealsInBreakfastFromAPI();
        getAllMealsInStarterFromAPI();
        getAllMealsInChickenFromAPI();
        getAllMealsInBeefFromAPI();
        getAllMealsInPorkFromAPI();
        getAllMealsInLambFromAPI();
        getAllMealsInSeafoodFromAPI();
        getAllMealsInPastaFromAPI();
        getAllMealsInDessertFromAPI();
        getAllMealsInDrinksFromAPI();
        getAllMealsInNewMealFromAPI();
        //pentru a afisa respectivele informatii produs la click pe produs
        if (window.location.search !== '') {
            let val = window.location.search;
            const id = val.split('=')[1];
            // console.log(id);
            showLoader();
            showEditMealDiv();
            showMealInputsForEdit(id);
        }
    }, 1900);
}

async function getAllMealsInBreakfastFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            breakfastMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInStarterFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            starterMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInChickenFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            chickenMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInBeefFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            beefMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInPorkFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            porkMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInLambFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            lambMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInSeafoodFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            seafoodMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInPastaFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            pastaMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInDessertFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            dessertMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInDrinksFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    ids.forEach((key) => {
        if (data[key] != null) {
            drinksMeals.innerHTML += `
                <tr>
                    <td><img src="${data[key].mealPicture}"></td>
                    <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                    <td>$${data[key].mealPrice}</td>
                    <td>${data[key].mealStock}</td>
                    <td style="display: none;">${data[key].mealId}</td>
                    <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                </tr>
            `;
        }
    });
    //add events funtion for all remove btns
    addEventsForRemoveBtns();
}

async function getAllMealsInNewMealFromAPI() {
    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json');
    const data = await res.json();
    // console.log(data);
    let ids = Object.keys(data);
    // console.log(ids);
    if (ids != 0) {
        ids.forEach((key) => {
            if (key != 0 && data[key] != null) {
                newMealMeals.innerHTML += `
                    <tr>
                        <td><img src="${data[key].mealPicture}"></td>
                        <td><a href="admin.html?id=${data[key].mealId}" class="meal-edit">${data[key].mealName}</a></td>
                        <td>$${data[key].mealPrice}</td>
                        <td>${data[key].mealStock}</td>
                        <td style="display: none;">${data[key].mealId}</td>
                        <td><button class="btn-x delete" id="${data[key].mealId}">Remove</button></td>
                    </tr>
                `;
            }
        });
        //add events funtion for all remove btns
        addEventsForRemoveBtns();
    }
}
//-'add new meal' BTN - show hidden div
function showAddNewMealDiv() {
    showLoader();
    addNewMealDiv.classList.add('show-div-block');
    managementDiv.classList.add('hide-div');
    allMealsDiv.classList.add('hide-div');
    managementDiv.classList.remove('show-div-flex');
    allMealsDiv.classList.remove('show-div-flex');
}
//-button 'cancel' from add new meal div go back to meals list
function goBackToMealsList() {
    addNewMealDiv.classList.remove('show-div-block');
    managementDiv.classList.remove('hide-div');
    allMealsDiv.classList.remove('hide-div');
    managementDiv.classList.add('show-div-flex');
    allMealsDiv.classList.add('show-div-flex');
    window.location = 'admin.html';
}
//-function clear inputs on save is clicked
function clearNewMealInputs() {
    newMealName.value = '';
    newMealPrice.value = '';
    newMealPicture.value = '';
    newMealDescription.value = '';
    newMealStock.value = '';
    newMealPrepTime.value = '';
    newMealRecipe.value = '';
    newMealId.value = '';
    newMealCategory.value = '';
}
//-button 'save' add new meal with POST
//! add new meal POST
async function addNewMealInAPI() {
    if (newMealName.value && newMealPrice.value && newMealPicture.value && newMealDescription.value && newMealStock.value && newMealPrepTime.value && newMealRecipe.value && newMealId.value && newMealCategory.value) {
        const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json', {
            method: 'POST',
            body: JSON.stringify({
                mealName: newMealName.value,
                mealPrice: newMealPrice.value,
                mealPicture: newMealPicture.value,
                mealDescription: newMealDescription.value,
                mealStock: newMealStock.value,
                mealPrepTime: newMealPrepTime.value,
                mealRecipe: newMealRecipe.value,
                mealId: newMealId.value,
                mealCategory: newMealCategory.value
            }),
        });
        const data = await res.json();
        // console.log(data);
        clearNewMealInputs();
        mealAddedMessage();
    }
    else {
        alert('Please fill all fields!!');
    }
}
//show meal added message
function mealAddedMessage() {
    let adminDiv = document.querySelector('.admin');
    let addNewMealDiv = document.querySelector('.add-new-meal');
    let messageMealAdded = document.createElement('p');
    messageMealAdded.className = 'item-added';
    messageMealAdded.innerText = 'New Meal Added!';
    adminDiv.insertBefore(messageMealAdded, addNewMealDiv);

    setTimeout(() => {
        messageMealAdded.remove();
    }, 3000);
}
//-edit meal with PUT by ID on button save(by ID)
//! EDIT SAVE BTN EVENT with PUT
function editMealInAPI() {
    if (window.location.search !== '') {
        let val = window.location.search;
        const id = val.split('=')[1];
        // console.log(id);
        editMealBreakfastInAPI(id);
        editMealStarterInAPI(id);
        editMealChickenInAPI(id);
        editMealBeefInAPI(id);
        editMealPorkInAPI(id);
        editMealLambInAPI(id);
        editMealSeafoodInAPI(id);
        editMealPastaInAPI(id);
        editMealDessertInAPI(id);
        editMealDrinksInAPI(id);
        editMealNewMealsAddedInAPI();
    }
    mealEditedMessage();
}
//breakfast meals
function editMealBreakfastInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//starter meals
function editMealStarterInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//chicken meals
function editMealChickenInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//beef meals
function editMealBeefInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//pork meals
function editMealPorkInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//lamb meals
function editMealLambInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//seafood meals
function editMealSeafoodInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//pasta meals
function editMealPastaInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//dessert meals
function editMealDessertInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//drinks meals
function editMealDrinksInAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks/' + key + '.json', {
                        method: 'PUT',
                        body: JSON.stringify({
                            mealName: editMealName.value,
                            mealPrice: editMealPrice.value,
                            mealPicture: editMealPicture.value,
                            mealDescription: editMealDescription.value,
                            mealStock: editMealStock.value,
                            mealPrepTime: editMealPrepTime.value,
                            mealRecipe: editMealRecipe.value,
                            mealId: editMealId.value,
                            mealCategory: editMealCategory.value
                        }),
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//new meals added
function editMealNewMealsAddedInAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            if (ids != 0) {
                ids.forEach(async (key) => {
                    // console.log(key);
                    if (key != 0) {
                        const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/' + key + '.json', {
                            method: 'PUT',
                            body: JSON.stringify({
                                mealName: editMealName.value,
                                mealPrice: editMealPrice.value,
                                mealPicture: editMealPicture.value,
                                mealDescription: editMealDescription.value,
                                mealStock: editMealStock.value,
                                mealPrepTime: editMealPrepTime.value,
                                mealRecipe: editMealRecipe.value,
                                mealId: editMealId.value,
                                mealCategory: editMealCategory.value
                            }),
                        });
                        const data = await res.json();
                        // console.log(data);
                    }
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
//-click on names link, show edit meal div (se apeleaza cand windows.location nu e null)
function showEditMealDiv() {
    editMealDiv.classList.add('show-div-block');
    managementDiv.classList.add('hide-div');
    allMealsDiv.classList.add('hide-div');
    managementDiv.classList.remove('show-div-flex');
    allMealsDiv.classList.remove('show-div-flex');
}
//-on click, show the meal for edit(se apeleaza cand windows.location nu e null)
//! Click on meal names
function showMealInputsForEdit(id) {
    showBreakfastInputsForEdit(id);
    showStarterInputsForEdit(id);
    showChickenInputsForEdit(id);
    showBeefInputsForEdit(id);
    showPorkInputsForEdit(id);
    showLambInputsForEdit(id);
    showSeafoodInputsForEdit(id);
    showPastaInputsForEdit(id);
    showDessertInputsForEdit(id);
    showDrinksInputsForEdit(id);
    showNewMealInputsForEdit(id);
}
//show properties of breakfast meals
function showBreakfastInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of starter meals
function showStarterInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of chicken meals
function showChickenInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of beef meals
function showBeefInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of pork meals
function showPorkInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of lamb meals
function showLambInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of seafood meals
function showSeafoodInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of pasta meals
function showPastaInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of dessert meals
function showDessertInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of drinks
function showDrinksInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null && id == data[key].mealId) {
                    editMealName.value = data[key].mealName;
                    editMealPrice.value = data[key].mealPrice;
                    editMealPicture.value = data[key].mealPicture;
                    editMealDescription.value = data[key].mealDescription;
                    editMealStock.value = data[key].mealStock;
                    editMealPrepTime.value = data[key].mealPrepTime;
                    editMealRecipe.value = data[key].mealRecipe;
                    editMealId.value = data[key].mealId;
                    editMealCategory.value = data[key].mealCategory;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}
//show properties of new Meals added
function showNewMealInputsForEdit(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            if (ids != 0) {
                ids.forEach((key) => {
                    if (data[key] != null && id == data[key].mealId && key != 0) {
                        editMealName.value = data[key].mealName;
                        editMealPrice.value = data[key].mealPrice;
                        editMealPicture.value = data[key].mealPicture;
                        editMealDescription.value = data[key].mealDescription;
                        editMealStock.value = data[key].mealStock;
                        editMealPrepTime.value = data[key].mealPrepTime;
                        editMealRecipe.value = data[key].mealRecipe;
                        editMealId.value = data[key].mealId;
                        editMealCategory.value = data[key].mealCategory;
                    }
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
//-button 'cancel' from edit div go back to meals list
function goBackToMealsListFromEdit() {
    editMealDiv.classList.remove('show-div-block');
    managementDiv.classList.remove('hide-div');
    allMealsDiv.classList.remove('hide-div');
    managementDiv.classList.add('show-div-flex');
    allMealsDiv.classList.add('show-div-flex');
    window.location = 'admin.html';
}
//show meal edited message
function mealEditedMessage() {
    let adminDiv = document.querySelector('.admin');
    let editMealDiv = document.querySelector('.edit-meal');
    let messageMealEdited = document.createElement('p');
    messageMealEdited.className = 'item-added';
    messageMealEdited.innerText = 'Meal Edited!';
    adminDiv.insertBefore(messageMealEdited, editMealDiv);

    setTimeout(() => {
        messageMealEdited.remove();
    }, 3000);
}
//-delete meal with DELETE by ID
//! Remove Btn Event
//add events for all remove btns (called in all functions onload function)
function addEventsForRemoveBtns() {
    let deleteMealBtns = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteMealBtns.length; i++) {
        let deleteBtn = deleteMealBtns[i];
        deleteBtn.addEventListener('click', deleteMealFromDOMandAPI);
    }
}
//remove meal from DOM&API function
//! Remove from API
function deleteMealFromDOMandAPI(event) {
    let removeClicked = event.target;
    removeClicked.parentElement.parentElement.remove();
    mealDeleteMessage();
    let tableRow = removeClicked.parentElement;
    let clickedMealId = tableRow.previousElementSibling;
    let id = clickedMealId.innerHTML;
    deleteBreakfastFromAPI(id);
    deleteStarterFromAPI(id);
    deleteChickenFromAPI(id);
    deleteBeefFromAPI(id);
    deletePorkFromAPI(id);
    deleteLambFromAPI(id);
    deleteSeafoodFromAPI(id);
    deletePastaFromAPI(id);
    deleteDessertFromAPI(id);
    deleteDrinksFromAPI(id);
    deleteNewMealsFromAPI(id);
}

function deleteBreakfastFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deleteStarterFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deleteChickenFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deleteBeefFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deletePorkFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deleteLambFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deleteSeafoodFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deletePastaFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deleteDessertFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deleteDrinksFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            ids.forEach(async (key) => {
                // console.log(key);
                if (id == data[key].mealId && data[key] != null) {
                    const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks/' + key + '.json', {
                        method: 'DELETE'
                    });
                    const data = await res.json();
                    // console.log(data);
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function deleteNewMealsFromAPI(id) {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            if (ids != 0) {
                ids.forEach(async (key) => {
                    // console.log(key);
                    if (id == data[key].mealId && key != 0) {
                        const res = await fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/' + key + '.json', {
                            method: 'DELETE'
                        });
                        const data = await res.json();
                        // console.log(data);
                    }
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
//delete meal message function
function mealDeleteMessage() {
    let adminDiv = document.querySelector('.admin');
    let managementDiv = document.querySelector('.management');
    let messageMealRemoved = document.createElement('p');
    messageMealRemoved.className = 'item-removed';
    messageMealRemoved.innerText = 'Meal Removed!';
    adminDiv.insertBefore(messageMealRemoved, managementDiv);

    setTimeout(() => {
        messageMealRemoved.remove();
    }, 3000);
}
//- Loader
//poate sa fac cu set interval unde apelez loaderul, ca intai sa se apeleze el, apoi alta functie
function showLoader() {
    let loaderSVG = document.querySelector('.loader');
    loaderSVG.style.display = 'block';

    setTimeout(() => {
        loaderSVG.remove();
    }, 2000);
}