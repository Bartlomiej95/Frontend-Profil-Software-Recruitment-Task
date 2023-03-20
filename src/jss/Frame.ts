export class Frame {
    constructor(){}

    frameId: string = null;

    buildHTMLFirstFrame(uuid: string){
        const subFrame = document.createElement("div");
        subFrame.setAttribute("data-frame-id", uuid);

        subFrame.className = "frame";
        subFrame.setAttribute("data-frame-id", uuid);
        subFrame.setAttribute("id", uuid);

        const labelQuestion = document.createElement("label");
        labelQuestion.innerHTML = "Question";

        const inputQuestion = document.createElement("input");
        inputQuestion.setAttribute("type", "text");
        inputQuestion.setAttribute("value", "");
        inputQuestion.setAttribute("placeholder", "Your Question");
        labelQuestion.appendChild(inputQuestion);

        const labelType = document.createElement("label");
        labelType.innerHTML = "Type";
        const selectEl = document.createElement("select");
        selectEl.setAttribute("id", `${uuid}`);
        selectEl.setAttribute("data-frame-id", uuid);
        selectEl.addEventListener('change', (e) => {
            e.preventDefault();
            // funkcja
        });

        const optionEl1 = document.createElement("option");
        optionEl1.setAttribute("value", "Yes/No");
        optionEl1.innerHTML = "Yes/No";
    
        const optionEl2 = document.createElement("option");
        optionEl2.setAttribute("value", "Text");
        optionEl2.innerHTML = "Text";

        const optionEl3 = document.createElement("option");
        optionEl3.setAttribute("value", "Number");
        optionEl3.innerHTML = "Number";

        selectEl.appendChild(optionEl1);
        selectEl.appendChild(optionEl2);
        selectEl.appendChild(optionEl3);
        labelType.appendChild(selectEl);

        subFrame.appendChild(labelQuestion);
        subFrame.appendChild(labelType);

        return subFrame;

    }

    buildHTMLInnerFrame(typeOfPreviousQuestion: string, uuid: string){
        const frameDiv = document.createElement("div");
        frameDiv.className = "frame";
        frameDiv.style.marginLeft = "15px";

        const labelCondition = document.createElement("label");
        labelCondition.innerHTML = "Condition";

        // funkcja do zrobienia
        const selectCondition = this.utils.createConditionSelect(typeOfPreviousQuestion);

        const inputCondition = document.createElement("input");

        labelCondition.appendChild(selectCondition);
        labelCondition.appendChild(inputCondition);
        const labelQuestion= document.createElement("label");
        labelQuestion.innerHTML = "Question";

        const inputQuestion = document.createElement("input");
        labelQuestion.appendChild(inputQuestion);

        const labelType = document.createElement("label");
        labelType.innerHTML = "Type";
        const selectEl = document.createElement("select");
        selectEl.setAttribute("data-frame-id", uuid)

        const optionEl1 = document.createElement("option");
        optionEl1.setAttribute("value", "Yes/No");
        optionEl1.innerHTML = "Yes/No";
    
        const optionEl2 = document.createElement("option");
        optionEl2.setAttribute("value", "Text");
        optionEl2.innerHTML = "Text";

        const optionEl3 = document.createElement("option");
        optionEl3.setAttribute("value", "Number");
        optionEl3.innerHTML = "Number";
    
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