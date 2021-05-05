import{drawGraph} from "./Graph.mjs";

const numH1 = 11194;
const numH13 = 4664;
const numH185 = 107695;
const numHE = 70137;

const numH = numH1 + numH13 + numH185 + numHE; 

const percOfPop1 = numH1/numH;
const percOfPop13 = numH13/numH;
const percOfPop185 = numH185/numH;
const percOfPopE = numHE/numH;

export function drawFirstGraph(gID,years, threshold){
    if(threshold == "1.0"){
        drawGraph(gID,years,thresh13,thres1);
    }
    if(threshold == "1.3"){
        drawGraph(gID,years,thresh13,thresh13);
    }
    if(threshold == "1.85"){
        drawGraph(gID,years,thresh13,thresh185);
    }
    if(threshold == "Everyone"){
        drawGraph(gID,years,thresh13,threshE);
        console.log("running");
    }
    
    
    
    function thres1(pop){
        return Math.round(percOfPop1*pop);
    }
    function thresh13(pop){
        return Math.round(percOfPop1*pop + percOfPop13*pop);
    }
    function thresh185(pop){
        return Math.round(percOfPop1*pop + percOfPop13*pop + percOfPop185*pop);
    }
    function threshE(pop){
        return pop;
    }
    
}