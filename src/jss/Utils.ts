import { ConditionTypes } from "./enums/condition-types.enum";

export class Utils {
    constructor(){}

    createOptionElement(content: string, value: string) {
        const option = document.createElement("option");
        option.setAttribute("value", value);
        option.innerHTML = content;
    
        return option;
    }

    createConditionSelect(type: ConditionTypes ){
        const selectCondition = document.createElement("select");
        if(type === ConditionTypes.YesNo){
        
            const optionCond1 = this.createOptionElement("Yes", "Yes");
            const optionCond2 = this.createOptionElement("No", "No");

            selectCondition.appendChild(optionCond1);
            selectCondition.appendChild(optionCond2);
            return selectCondition;

        } else if( type === ConditionTypes.Text){
            const optionCond1 = this.createOptionElement("Equals", "Equals");
            selectCondition.appendChild(optionCond1);

            return selectCondition;

        } else if( type === ConditionTypes.Number){
            const optionCond1 = this.createOptionElement("Grater than", "Grater than");
            const optionCond2 = this.createOptionElement("Less than", "Less than");
            const optionCond3 = this.createOptionElement("Equals", "Equals");

            selectCondition.appendChild(optionCond1);
            selectCondition.appendChild(optionCond2);
            selectCondition.appendChild(optionCond3);

            return selectCondition;
        }
        return selectCondition;
    }

    handleSelectValue(select: Element, e: Event){
        select.setAttribute("value", e.target.value);
    }
}