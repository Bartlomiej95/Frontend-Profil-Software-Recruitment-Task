import { v4 as uuid4 } from 'uuid';
import { Frame } from './Frame';

export class Block {
    constructor(amount: number){
        this.blockNumber = amount; 

    }
    blockNumber = 0;
    frameNumber = 0;

    frame = new Frame();

    addNewBlock(blockObj: { q: string, t: string}){
        const uuid = uuid4();
        this.blockNumber++;
        localStorage.setItem("amountOfBlocks", `${this.blockNumber}`);

        this.frameNumber = 1;
        const block = document.createElement("div");
        block.classList.add("block");
        block.setAttribute("id", `${this.blockNumber}`);
        const frame = this.frame.buildHTMLFirstFrame(uuid, blockObj, this.blockNumber, this.frameNumber);
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
        this.frameNumber++;

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
        const btnDataBlockId = element.getAttribute("data-frame-id");
        const searchSelect = document.querySelector(`select[data-frame-id="${btnDataBlockId}"`);
        return searchSelect.value;
    }
}