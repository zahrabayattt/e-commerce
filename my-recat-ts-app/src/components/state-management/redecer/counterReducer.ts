type Action = {
    type: "INCREAMENT"|"RESET";
}

const counterReducer = (value:number,action:Action): number => {
    switch(action.type){
        case "INCREAMENT":
            return value+1;
            break;
        case "RESET":
            return 0;
        default:
            return value;
    }
}

export default counterReducer;