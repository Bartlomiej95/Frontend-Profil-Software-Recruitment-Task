import { ConditionTypes } from "./enums/condition-types.enum";
import { Utils } from "./Utils";

export class Frame {
    constructor(){}

    amountOfFrames: number | null = null;
    frameId: string = null;
    utils = new Utils();

    buildHTMLFirstFrame(uuid: string, blockObj: { Q: string, T: string}, blockNumber: number, frameNumber: number){
        const subFrame = document.createElement("div");
        subFrame.setAttribute("data-frame-id", uuid);
        subFrame.className = "frame";

        const labelQuestion = document.createElement("label");
        labelQuestion.innerHTML = "Question";

        const inputQuestion = document.createElement("input");
        inputQuestion.setAttribute("value", blockObj.Q);
        inputQuestion.setAttribute("type", "text");
        inputQuestion.setAttribute("placeholder", "Your Question...");
        inputQuestion.addEventListener('keyup', (e) => {
            e.preventDefault();
            this.utils.handleInput(inputQuestion, blockNumber, frameNumber, "Q",  e);
        });
       

        labelQuestion.appendChild(inputQuestion);

        const labelType = document.createElement("label");
        labelType.innerHTML = "Type";
        const selectEl = document.createElement("select");
        selectEl.setAttribute("value", "Text")
        selectEl.setAttribute("data-frame-id", uuid);
        selectEl.addEventListener('change', (e) => {
            e.preventDefault();
            this.utils.handleSelectValue(selectEl, blockNumber, frameNumber, "T", e);
        });

        const optionEl1 = this.utils.createOptionElement("Yes/No", "Yes/No");
        if(blockObj.T === "Yes/No") optionEl1.setAttribute("selected", "true");
        const optionEl2 = this.utils.createOptionElement("Text", "Text");
        if(blockObj.T === "Text") optionEl2.setAttribute("selected", "true");
        const optionEl3 = this.utils.createOptionElement("Number", "Number");
        if(blockObj.T === "Number") optionEl3.setAttribute("selected", "true");

        selectEl.appendChild(optionEl1);
        selectEl.appendChild(optionEl2);
        selectEl.appendChild(optionEl3);
        labelType.appendChild(selectEl);

        subFrame.appendChild(labelQuestion);
        subFrame.appendChild(labelType);

        return subFrame;

    }

    buildHTMLInnerFrame(blockNumber: number, amountOfFrames: number, typeOfPreviousQuestion: ConditionTypes, frameObj: { q: string, t: string, ci: string, cs: string }, uuid: string){
        localStorage.setItem(`b${blockNumber}frames`, `${amountOfFrames}`);

        const frameDiv = document.createElement("div");
        const marginLeftNewFrame = amountOfFrames * 15;
        frameDiv.className = "frame";
        frameDiv.style.marginLeft = `${marginLeftNewFrame}px`;

        const labelCondition = document.createElement("label");
        labelCondition.innerHTML = "Condition";

        const selectCondition = this.utils.createConditionSelect(typeOfPreviousQuestion, frameObj.cs);
        selectCondition.setAttribute("value", frameObj.cs);
        selectCondition.addEventListener('change', (e) => {
            e.preventDefault();
            this.utils.handleSelectValue(selectEl, blockNumber, amountOfFrames, "cs", e);
        });

        const inputCondition = document.createElement("input");
        inputCondition.setAttribute("value", frameObj.ci);
        inputCondition.setAttribute("placeholder", "Your answer...")
        inputCondition.addEventListener('keyup', (e) => {
            e.preventDefault();
            this.utils.handleInput(inputCondition, blockNumber, amountOfFrames, "ci",  e);
        });

        labelCondition.appendChild(selectCondition);
        labelCondition.appendChild(inputCondition);
        const labelQuestion= document.createElement("label");
        labelQuestion.innerHTML = "Question";

        const inputQuestion = document.createElement("input");
        inputQuestion.setAttribute("value", frameObj.q);
        inputQuestion.setAttribute("placeholder", "Your Question...")
        inputQuestion.addEventListener('keyup', (e) => {
            e.preventDefault();
            this.utils.handleInput(inputQuestion, blockNumber, amountOfFrames, "q",  e);
        });
        labelQuestion.appendChild(inputQuestion);

        const labelType = document.createElement("label");
        labelType.innerHTML = "Type";
        const selectEl = document.createElement("select");
        selectEl.setAttribute("data-frame-id", uuid);
        selectEl.setAttribute("value", frameObj.t);
        selectEl.addEventListener('change', (e) => {
            e.preventDefault();
            this.utils.handleSelectValue(selectEl, blockNumber, amountOfFrames, "t", e);
        });

        const optionEl1 = this.utils.createOptionElement("Yes/No", "Yes/No");
        if(frameObj.t === "Yes/No") optionEl1.setAttribute("selected", "true");
        const optionEl2 = this.utils.createOptionElement("Text", "Text");
        if(frameObj.t === "Text") optionEl2.setAttribute("selected", "true");
        const optionEl3 = this.utils.createOptionElement("Number", "Number");
        if(frameObj.t === "Number") optionEl3.setAttribute("selected", "true");
    
        selectEl.appendChild(optionEl1);
        selectEl.appendChild(optionEl2);
        selectEl.appendChild(optionEl3);
        labelType.appendChild(selectEl);

        frameDiv.appendChild(labelCondition);
        frameDiv.appendChild(labelQuestion);
        frameDiv.appendChild(labelType);

        return frameDiv;
    }

}