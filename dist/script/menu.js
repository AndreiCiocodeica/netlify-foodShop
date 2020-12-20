//-Menu_page
const breakfastList = document.getElementById('breakfast-list');
const starterList = document.getElementById('starter-list');
const chickenList = document.getElementById('chicken-list');
const beefList = document.getElementById('beef-list');
const porkList = document.getElementById('pork-list');
const lambList = document.getElementById('lamb-list');
const seafoodList = document.getElementById('seafood-list');
const pastaList = document.getElementById('pasta-list');
const dessertList = document.getElementById('dessert-list');
const drinksList = document.getElementById('drinks-list');
const newMealAddedList = document.getElementById('new-meal-added-list');

//*Menu_page onload function to show menu
function showMenu() {
    showLoader();
    setTimeout(() => {
        getBreakfastFromAPI();
        getStarterFromAPI();
        getChickenFromAPI();
        getBeefFromAPI();
        getPorkFromAPI();
        getLambFromAPI();
        getSeafoodFromAPI();
        getPastaFromAPI();
        getDessertFromAPI();
        getDrinksFromAPI();
        getNewMealAddedFromAPI();
    }, 1900);
}

function getBreakfastFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/breakfast.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    breakfastList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getStarterFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/starter.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    starterList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getChickenFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/chicken.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    chickenList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getBeefFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/beef.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    beefList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getPorkFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pork.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    porkList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getLambFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/lamb.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    lambList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getSeafoodFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/seafood.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    seafoodList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getPastaFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/pasta.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    pastaList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getDessertFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/dessert.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    dessertList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getDrinksFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals/0/drinks.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            ids.forEach((key) => {
                if (data[key] != null) {
                    drinksList.innerHTML += `
                        <div class="list">
                            <img src="${data[key].mealPicture}">
                            <div class="list-text">
                                <div class="list-name-price">
                                    <p>${data[key].mealName}</p>
                                    <p>$${data[key].mealPrice}</p>
                                </div>
                                <small>${data[key].mealDescription}</small>
                                <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                            </div>
                        </div>
                    `;
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function getNewMealAddedFromAPI() {
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            // console.log(ids);
            if (ids != 0) {
                ids.forEach(function (key) {
                    if (key != 0 && data[key] != null) {
                        newMealAddedList.innerHTML += `
                            <div class="list">
                                <img src="${data[key].mealPicture}">
                                <div class="list-text">
                                    <div class="list-name-price">
                                        <p>${data[key].mealName}</p>
                                        <p>$${data[key].mealPrice}</p>
                                    </div>
                                    <small>${data[key].mealDescription}</small>
                                    <a href="details.html?id=${data[key].mealId}">View Recipe</a>
                                </div>
                            </div>
                        `;
                    }
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}
//- Loader
function showLoader() {
    let loaderSVG = document.querySelector('.loader');
    loaderSVG.style.display = 'block';

    setTimeout(() => {
        loaderSVG.remove();
    }, 2000);
}