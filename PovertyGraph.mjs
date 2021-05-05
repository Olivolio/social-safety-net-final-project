import{drawGraph} from "./Graph.mjs";


const usPop = 323100000;
const numChild = 7200000;
const numE = 3300000;

const percChild = numChild/usPop;
const percE = numE/usPop;

export function drawPovertyGraph(gID, years){

    function child(pop){
        return Math.round(pop*percChild);
    }
    
    function everyone(pop){
        return Math.round(pop*percE);
    }
    
    drawGraph(gID, years, child, everyone);
    
}