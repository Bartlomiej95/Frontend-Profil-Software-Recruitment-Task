import { ConditionTypes } from "./enums/condition-types.enum";

export class Utils {
    constructor(){}

    createOptionElement(content: string, value: string) {
        const option = document.createElement("option");
        option.setAttribute("value", value);
        option.innerHTML = content;
    
        return option;
    }

    createConditionSelect(type: ConditionTypes, cs: string ){
        const selectCondition = document.createElement("select");
        if(type === ConditionTypes.YesNo){
        
            const optionCond1 = this.createOptionElement("Yes", "Yes");
            if(cs === "Yes") optionCond1.setAttribute("selected", "true");
            const optionCond2 = this.createOptionElement("No", "No");
            if(cs === "No") optionCond1.setAttribute("selected", "true");

            selectCondition.appendChild(optionCond1);
            selectCondition.appendChild(optionCond2);

            return selectCondition;

        } else if( type === ConditionTypes.Text){
            const optionCond1 = this.createOptionElement("Equals", "Equals");
            optionCond1.setAttribute("selected", "true");
            selectCondition.appendChild(optionCond1);

            return selectCondition;

        } else if( type === ConditionTypes.Number){
            const optionCond1 = this.createOptionElement("Grater than", "Grater than");
            if(cs === "Grater than") optionCond1.setAttribute("selected", "true");
            const optionCond2 = this.createOptionElement("Less than", "Less than");
            if(cs === "Less than") optionCond1.setAttribute("selected", "true");
            const optionCond3 = this.createOptionElement("Equals", "Equals");
            if(cs === "Equals") optionCond1.setAttribute("selected", "true");

            selectCondition.appendChild(optionCond1);
            selectCondition.appendChild(optionCond2);
            selectCondition.appendChild(optionCond3);

            return selectCondition;
        }
        return selectCondition;
    }

    handleSelectValue(select: Element, blockNumber: number, frameNumber:number, type: string, e: Event){
        const { target } = e;
        select.setAttribute("value", ( target as HTMLButtonElement).value);
        this.handleLocalStorage(`b${blockNumber}f${frameNumber}${type}`, ( target as HTMLButtonElement).value);      
    }

    handleInput(input: Element, blockNumber: number, frameNumber:number, type: string, e: Event) {
        const { target } = e;
        input.setAttribute("value", ( target as HTMLButtonElement).value );
        this.handleLocalStorage(`b${blockNumber}f${frameNumber}${type}`, ( target as HTMLButtonElement).value);        
    }

    handleLocalStorage(key: string, valueKey: string) {
        localStorage.setItem(key, valueKey);
    }
}