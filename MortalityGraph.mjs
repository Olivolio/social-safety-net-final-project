import{drawGraph} from "./Graph.mjs";

const numH1 = 11194;
const numH13 = 4664;
const numH185 = 107695;
const numHE = 70137;

function getMortalityAtYear(years, pop) {
	return 100 * (((10.55 - 8.97) / 40) * ((pop - 332639) / 1796) + 8.97); // Per 100,000 people per year
}


function mortality1(years, pop) {
	let mortalityRate = getMortalityAtYear(years, pop);
	return mortalityRate;
}

function mortality2(threshold, bound, years, pop) {
	let mortalityRate = getMortalityAtYear(years, pop); 
	let percentIncrease = 0; // number of 1% increases
	let qualified = 0.8 * numH1 + 0.6 * numH13;
	if (threshold <= 1.0) {
		percentIncrease = Math.log((0.8 * numH1/ qualified)) / Math.log(1.01);
	}
	else if (threshold <= 1.30) {
		percentIncrease = 0;
	}
	else if (threshold <= 1.85) {
		percentIncrease = Math.log((0.8 * numH1 + 0.6 * numH13 + 0.02 * numH185)/ qualified) / Math.log(1.01);
	}
	else {
		percentIncrease = Math.log((0.8 * numH1 + 0.6 * numH13 + 0.02 * numH185 + 0.01 * numHE)/ qualified) / Math.log(1.01);
	}
	if (bound == "lower") {
		mortalityRate = mortalityRate - 3.73 * percentIncrease ;
	}
	else if (bound == "average") {
		mortalityRate = mortalityRate - 6.68 * percentIncrease;
	}
	else if (bound == "upper") {
		mortalityRate = mortalityRate - 7.23 * percentIncrease;
	}
	return mortalityRate;
}

export function drawMortalityGraph(gID, threshold, bound, years) {
	function eq1(pop) {
		return mortality1(years, pop);
	}

	function eq2(pop) {
		return mortality2(threshold, bound, years, pop);
	}
	
	drawGraph("canvas-" + gID, years, eq1, eq2);

}