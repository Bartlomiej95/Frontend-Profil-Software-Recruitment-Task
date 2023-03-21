import { Block } from "./Block";

export class FormBuilderApp {
    constructor(){}

    amountOfBlocks = 0;
    buttonAddBlock = document.querySelector('.btn-first-block');
    formBuilder = document.querySelector('.form-builder');

    block = new Block(this.amountOfBlocks);
    blockObj = {
        q: "",
        t: "",
    }

    mainButtonEventListener() {
        this.buttonAddBlock.addEventListener('click', (e) => {
            e.preventDefault();
            this.amountOfBlocks++;
            const block = this.block.addNewBlock(this.blockObj);
            this.formBuilder.appendChild(block);
        })
    }

    checkLocalStorage() {
        const amountOfBlocks = Number(localStorage.getItem("amountOfBlocks"));
        let blockObj = {
            q: "",
            t: "",
        };

        for(let i = 1; i <= amountOfBlocks; i++){
            blockObj.q = localStorage.getItem(`b${i}f1q`);
            blockObj.t = localStorage.getItem(`b${i}f1t`);
            const block = this.block.addNewBlock(blockObj);
            this.formBuilder.appendChild(block);
        }
    }

    initialApp(){
        this.mainButtonEventListener();
        this.checkLocalStorage();
    }

}