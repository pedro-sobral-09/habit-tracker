function saveCategories(categories){
    localStorage.setItem("categories", JSON.stringify(categories));
}

function loadCategories(){
    return JSON.parse(localStorage.getItem(`categories`));
}

function removeStorage(){
    localStorage.removeItem(`categories`);
}

export { saveCategories, loadCategories, removeStorage };