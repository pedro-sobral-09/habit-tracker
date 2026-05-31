import { hasEmptyField } from "../utils/utils.js";
import { saveCategories, loadCategories, removeStorage } from "../storage/storage.js";
import { Category } from "../habits/category.js";

const controller = {
    categories: (() => {
        const localCategories = loadCategories();
        if (localCategories == null){
            return [];
        } else {
            return localCategories;
        }
    })(),

    findCategory(idCategory) {
        return this.categories.find((category) => category.id === idCategory);
    },

    createCategory(name = ``) {
        // validation
        if (hasEmptyField(name)) {
            console.log(`Validation failed: missing required field`);
            return;
        }

        this.categories.push(new Category(name));
        
        saveCategories(this.categories);
    },

    removeCategory(idCategory = ``) {
        // validation
        if (hasEmptyField(idCategory)) {
            console.log(`Validation failed: missing required field`);
            return;
        }

        if (this.categories.length <= 1){
            console.log("Cannot delete the last category.");
            return;
        }

        this.categories = this.categories.filter((elem) => elem.id !== idCategory);
        
        saveCategories(this.categories);
    },

    renameCategory(idCategory = ``, newName = ``) {
        // validation
        if (hasEmptyField(idCategory, newName)) {
            console.log(`Validation failed: missing required field`);
            return;
        }

        const category = this.findCategory(idCategory);

        if (category === undefined){
            console.log("Category not found.");
        } else {
            category.name = newName;
            
            saveCategories(this.categories);
        }
    },

    createHabit(idCategory = ``, name = ``, description = ``) {
        // validation
        if (hasEmptyField(idCategory, name)) {
            console.log(`Validation failed: missing required field`);
            return;
        }

        const category = this.findCategory(idCategory);

        if (category === undefined){
            console.log("Category not found.");
        } else {
            category.createHabit(name, description);
            
            saveCategories(this.categories);
        }
    },

    removeHabit(idCategory = ``, idHabit = ``) {
        // validation
        if (hasEmptyField(idCategory, idHabit)) {
            console.log(`Validation failed: missing required field`);
            return;
        }

        const category = this.findCategory(idCategory);

        if (category === undefined){
            console.log("Category not found.");
        } else {
            category.removeHabit(idHabit);
            
            saveCategories(this.categories);
        }
    },

    renameHabit(idCategory = ``, idHabit = ``, prop = ``, newText = ``) {
        // validation
        if (hasEmptyField(idCategory, idHabit, prop, newText)) {
            console.log(`Validation failed: missing required field`);
            return;
        }

        if (prop !== `name` && prop !== `description`) return;

        const category = this.findCategory(idCategory);
        
        if (category === undefined){
            console.log("Category not found.");
        } else {
            const habit = category.findHabit(idHabit);

            if (habit === undefined){
                console.log(`Habit not found`);
            } else {
                habit.renameText(prop, newText);
                
                saveCategories(this.categories);
            }
        }
    },

    listCategories() {
        console.table(this.categories);
    },

    listHabits(idCategory) {
        // validation
        if (hasEmptyField(idCategory)){
            console.log(`Validation failed: missing required field`);
            return;
        }
        const category = this.findCategory(idCategory);

        if (category === undefined){
            console.log("Category not found.");
        } else {
            category.listHabit();
        }
    },

    removeStorage(){
        removeStorage();
    }
}

export default controller;