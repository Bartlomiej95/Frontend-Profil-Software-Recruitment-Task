import { Block } from "./Block";
import { Frame } from "./Frame";

export class FormBuilderApp {
    constructor(){}

    amountOfBlocks = 0;
    buttonAddBlock = document.querySelector('.btn-first-block');
    formBuilder = document.querySelector('.form-builder');

    block = new Block(this.amountOfBlocks);
    blockObj = {
        Q: "",
        T: "",
    }

    mainButtonEventListener() {
        this.buttonAddBlock.addEventListener('click', (e) => {
            e.preventDefault();
            let amountOfBlocks = Number(localStorage.getItem("amountOfBlocks"));
            amountOfBlocks++;
            const newBlock = new Block(amountOfBlocks);
            const block = newBlock.addNewBlock(this.blockObj);
            this.formBuilder.appendChild(block);
        })
    }

    checkLocalStorage() {
        const amountOfBlocks = Number(localStorage.getItem("amountOfBlocks"));
        let blockObj = {
            Q: "",
            T: "",
        };

        let frameObj = {
            q: "", t: "", ci: "", cs: "" // question, type, condition input, condition select  
        }

        for(let x = 1; x <= amountOfBlocks; x++){
            blockObj.Q = localStorage.getItem(`b${x}f1Q`);
            blockObj.T = localStorage.getItem(`b${x}f1T`);
            const newBlock = new Block(x);
            const block = newBlock.addNewBlock(blockObj);
            this.formBuilder.appendChild(block);

            const framesAmount = Number(localStorage.getItem(`b${x}frames`));
            for(let y = 1; y <= framesAmount; y++ ){
                const newFrame = new Frame();
                frameObj.q = localStorage.getItem(`b${x}f${y}q`);
                frameObj.t = localStorage.getItem(`b${x}f${y}t`);
                frameObj.ci = localStorage.getItem(`b${x}f${y}ci`);
                frameObj.cs = localStorage.getItem(`b${x}f${y}cs`);
                
                newBlock.addNewFrameToBlock(block.lastChild as Element, frameObj);
            }
        }
    }

    initialApp(){
        this.mainButtonEventListener();
        this.checkLocalStorage();
    }

}