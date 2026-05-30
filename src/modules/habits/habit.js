class Habit{
    constructor(name, description = ``){
        this.id = crypto.randomUUID();
        this.name = name;
        this.description = description;
        this.dates = [];
        this.streak = 0;
    }
    
    renameText(prop, newText){
        this[prop] = newText;
    }
}

export { Habit };