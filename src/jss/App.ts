export class FormBuilderApp {
    constructor(){}

    amountOfBlocks = 0;
    buttonAddBlock = document.querySelector('.btn-first-block');
    formBuilder = document.querySelector('.form-builder');

    mainButtonEventListener() {
        this.buttonAddBlock.addEventListener('click', (e) => {
            e.preventDefault();
            this.amountOfBlocks++;
            console.log('hello');
        })
    }

}