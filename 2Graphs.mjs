//Does this do stuff?
import{drawGraph} from "./Graph.mjs";

const numH1 = 11194;
const numH13 = 4664;
const numH185 = 107695;
const numHE = 70137;

const numH = numH1 + numH13 + numH185 + numHE; 

const numHI1 = 3907;
const numHI13 = 1326;
const numHI185 = 2123;
const numHIE = 3577;

const numHI = numHI1 + numHI13 + numHI185 + numHIE;


const percOfPop1 = numH1/numH;
const percOfPop13 = numH13/numH;
const percOfPop185 = numH185/numH;
const percOfPopE = numHE/numH;

const percIns1 = numHI1/numH1;
const percIns13 = numHI13/numH13;
const percIns185 = numHI185/numH185;
const percInsE = numHIE/numHE;

const percI = numHI/numH;

export function drawFoodInsecurity(gID,which, howMuch, howlong){
    
    
    function insecure1(pop){
        const old = pop*perI;
        var new1 = pop*percOfPop1*percIns1*howMuch;
        
        return Math.round(old + new1);
    }

    function insecure13(pop){
    
        return Math.round(pop*percI);
    }

    function insecure185(pop){
        const old = pop*percI;
        var new185 = pop*percOfPop185*percIns185*howMuch;
        
        return Math.round(old-new185);
    }
    
    function insecureE(pop){
        const old = pop*percI;
        var new185 = pop*percOfPop185*percIns185*howMuch;
        var newE = pop*percOfPopE*percInsE*howMuch;
        
        return Math.round(old-new185-newE);
    }
    
    if(which == 1.85){
        drawGraph(gID, howlong, insecure13,insecure185);
    }
    if(which == 100){
        drawGraph(gID, howlong, insecure13,insecureE);
    }
    if(which == 1){
        drawGraph(gID, howlong, insecure13, insecure1);
    }
}