import { v4 as uuid4 } from 'uuid';
import { Frame } from './Frame';

export class Block {
    constructor(amount: number){
        this.blockNumber = amount; 

    }
    blockNumber = 0;
    amountOfFrames = 0;
    uuid = uuid4();

    frameObj = {
        q: '',
        t: '',
        ci: '',
        cs: '',
    }


    frame = new Frame();

    addNewBlock(blockObj: { Q: string, T: string }){
        // const uuid = uuid4();

        localStorage.setItem("amountOfBlocks", `${this.blockNumber}`);
        console.log(this.blockNumber);
        this.amountOfFrames = 1;
        const block = document.createElement("div");
        block.classList.add("block");
        block.setAttribute("id", `${this.blockNumber}`);
        const frame = this.frame.buildHTMLFirstFrame(this.uuid, blockObj, this.blockNumber, this.amountOfFrames);
        block.appendChild(frame);
        const button = this.addNewButtonForNewFrame(this.uuid);
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
            this.addNewFrameToBlock(button, this.frameObj);
            button.setAttribute("disabled", "true");
        });
        return button;
    }

    addNewFrameToBlock(btn: Element, frameObj: { q: string, t: string, ci: string, cs: string }){
        const uuid = uuid4();
        this.amountOfFrames++;

        const searchBlock = this.findBlock(btn);
        const searchType = this.searchTypeCondition(btn);
        
        const newFrame = new Frame()
        const frame = newFrame.buildHTMLInnerFrame(this.blockNumber, this.amountOfFrames-1, searchType, frameObj, uuid);
        
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