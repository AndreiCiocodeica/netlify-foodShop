const showRecipesById = document.getElementById('show-recipes');

//-window onload event
window.onload = () => {
    showMenu();
    if (window.location.search !== '') {
        let val = window.location.search;
        const id = val.split('=')[1];
        // console.log(id);
        showRecipe(id);
    }
}
//-showRecipe by ID
function showRecipe(id) {
    setTimeout(() => {
        showRecipeForBreakfast(id);
        showRecipeForStarter(id);
        showRecipeForChicken(id);
        showRecipeForBeef(id);
        showRecipeForPork(id);
        showRecipeForLamb(id);
        showRecipeForSeafood(id);
        showRecipeForPasta(id);
        showRecipeForDessert(id);
        showRecipeForNewMeal(id);
    }, 1600);
}

function showRecipeForBreakfast(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].breakfast.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForStarter(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].starter.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForChicken(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].chicken.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForBeef(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].beef.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForPork(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].pork.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForLamb(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].lamb.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForSeafood(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].seafood.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForPasta(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].pasta.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForDessert(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            data[0].dessert.forEach((e) => {
                if (e) {
                    if (id == e.mealId) {
                        showRecipesById.innerHTML = `
                            <h2>${e.mealName}</h2>
                            <div>
                                <img src="${e.mealPicture}">
                                <p>${e.mealRecipe}</p>
                            </div>
                        `;
                    }
                }
            });
        })
        .catch(function (err) {
            console.log(err);
        });
}

function showRecipeForNewMeal(id) {
    // console.log(id);
    fetch('https://myfirstproject-b0fb4.firebaseio.com/meals.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            // console.log(data);
            let ids = Object.keys(data);
            if (ids != 0) {
                ids.forEach((key) => {
                    if (data[key]) {
                        if (id == data[key].mealId && key != 0) {
                            showRecipesById.innerHTML = `
                                <h2>${data[key].mealName}</h2>
                                <div>
                                    <img src="${data[key].mealPicture}">
                                    <p>${data[key].mealRecipe}</p>
                                </div>
                            `;
                        }
                    }
                });
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}