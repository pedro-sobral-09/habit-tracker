import { Habit } from "./habit.js";

class Category{
    constructor(name){
        this.name = name;
        this.id = crypto.randomUUID();
        this.habits = [];
    }

    findHabit(idHabit){
        return this.habits.find((habit) => habit.id === idHabit);
    }

    createHabit(name, description){
        this.addHabit(new Habit(name, description));
    }

    addHabit(habit){
        this.habits.push(habit);
    }

    removeHabit(idHabit){
        this.habits = this.habits.filter((habit) => habit.id !== idHabit);
    }

    listHabit(){
        console.table(this.habits);
    }
}

export { Category };