import{drawGraph} from "./Graph.mjs";


export const years = [2020,2021,2022,2023,2024,2025,2026,2027,2028,2029,2030,2031,2032,2033,2034,2035,2036,2037,2038,2039,2040,2041,2042,2043,2044,2045,2046,2047,2048,2049,2050,2051,2052,2053,2054,2055,2056,2057,2058,2059,2060];

export const pop = [332639,334998,337342,339665,341963,344234,346481,348695,350872,353008,355101,357147,359147,361099,363003,364862,366676,368448,370179,371871,373528,375152,376746,378314,379861,381390,382907,384415,385918,387419,388922,390431,391947,393473,395009,396557,398118,399691,401277,402874,404483];


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

export function drawFoodInsecurity(gID,which, howMuch){
    
    /*
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
        drawGraph(gID, years, pop, insecure13,insecure185);
    }
    if(which == 100){
        drawGraph(gID, years, pop, insecure13,insecureE);
    }
    if(which == 1){
        drawGraph(gID, years, pop, insecure13, insecure1);
    }*/
}