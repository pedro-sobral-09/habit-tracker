import controller from "./modules/controller/controller.js";

(
    () => {
        // start a category
        if (controller.categories.length == 0){
            controller.createCategory(`default`);
        }
    }
)()

window.app = {
    controller,
}