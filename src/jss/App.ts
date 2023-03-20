import { Block } from "./Block";

export class FormBuilderApp {
    constructor(){}

    amountOfBlocks = 0;
    buttonAddBlock = document.querySelector('.btn-first-block');
    formBuilder = document.querySelector('.form-builder');

    block = new Block();

    mainButtonEventListener() {
        this.buttonAddBlock.addEventListener('click', (e) => {
            e.preventDefault();
            this.amountOfBlocks++;
            const block = this.block.addNewBlock(this.amountOfBlocks) ;
            this.formBuilder.appendChild(block);
        })
    }

}