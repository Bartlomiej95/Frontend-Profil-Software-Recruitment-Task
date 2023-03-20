import { v4 as uuid4 } from 'uuid';
import { Frame } from './Frame';

export class Block {
    constructor(){}

    frame = new Frame();

    addNewBlock(amountOfBlocks: number){
        const uuid = uuid4();
        amountOfBlocks++;
        const block = document.createElement("div");
        block.classList.add("block");
        block.setAttribute("id", `${amountOfBlocks}`);
        const frame = this.frame.buildHTMLFirstFrame(uuid);
        block.appendChild(frame);
        const button = this.addNewButtonForNewFrame(uuid);
        block.appendChild(button);
        return block;
    }

    addNewButtonForNewFrame(uuid: string){
        const button = document.createElement("button");
        button.className = "btn-second-frame";
        button.innerHTML = 'Dodaj następne pytanie';
        button.setAttribute("data-frame-id", uuid);
        button.addEventListener('click', (e) => {
            e.preventDefault();
            this.addNewFrameToBlock(button);
            button.setAttribute("disabled", "true");
        });
        return button;
    }

    addNewFrameToBlock(btn: Element){
        const uuid = uuid4();
        console.log(btn);
        const searchBlock = this.findBlock(btn);
        const searchType = this.searchTypeCondition(btn);
       
        const frame = this.frame.buildHTMLInnerFrame(searchType, uuid);
        
        searchBlock.appendChild(frame);

        const button = this.addNewButtonForNewFrame(uuid);
        button.style.marginLeft = "15px";
        searchBlock.appendChild(button);
    }

    findBlock(element: Element){
        const idParent = element.parentElement.id;
        const blockDiv = document.getElementById(idParent);
        return blockDiv
    }

    searchTypeCondition(element: Element){
        console.log(element);
        const btnDataBlockId = element.getAttribute("data-frame-id");
        const searchSelect = document.querySelector(`select[data-frame-id="${btnDataBlockId}"`);
        console.log(searchSelect);
        return searchSelect.value;
    }
}