import{drawGraph} from "./Graph.mjs";

const numH1 = 11194;
const numH13 = 4664;
const numH185 = 107695;
const numHE = 70137;

const qualifyPercent = (numH1 + numH13) / (numH1 + numH13 + numH185 + numHE);

const lowincomePercent = (numH1 + numH13 + numH185) / (numH1 + numH13 + numH185 + numHE);

function hcs1(pop) {
	let qual = pop * qualifyPercent;
	let all = pop * lowincomePercent;
	return (qual * 0.2 * 5831) + (qual * 0.8 * 4421) + (all - qual) * 5831;
}

function hsc2(threshold, bound, years, pop) {
	let lowincome = pop * lowincomePercent;
	let using = 0;
	if (threshold <= 1.0) {
		using = 0.8 * numH1;
	}
	else if (threshold <= 1.3) {
		using = 0.8 * numH1 + 0.8 * numH13;
	}
	else {
		using = 0.8 * numH1 + 0.8 * numH13 + 0.8 * numH185;
	}
	let notusing = lowincome - using;
	let spending = 0;
	if (bound == "lower") {
		spending = using * 3976 + notusing * 5144;
	}
	else if (bound == "average") {
		spending = using * 4421 + notusing * 5831;
	}
	else if (bound == "upper") {
		spending = using * 4437 + notusing * 6998;
	}
	return spending;
}

export function drawHealthcareSpendingGraph(gID, threshold, bound, years) {
	function eq1(pop) {
		return hcs1(pop);
	}

	function eq2(pop) {
		return hsc2(threshold, bound, years, pop);
	}
	
	drawGraph("canvas-" + gID, years, eq1, eq2);

}