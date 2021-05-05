
function getMortalityAtYear(years) {
	return ((10.55 - 8.97) / 40) * years + 8.97; // Per 1000 people per year
}


export function mortality1(years, pop) {
	let mortalityRate = getMortalityAtYear(years);
	return mortalityRate / 100 * pop;
}

export function mortality2(threshold, bound, years, pop) {
	let mortalityRate = getMortalityAtYear(years); 
	if (bound == "lower") {
		mortalityRate = mortalityRate - (3.73 / 100);
	}
	else if (bound == "average") {
		mortalityRate = mortalityRate - (6.68 / 100);
	}
	else if (bound == "upper") {
		mortalityRate = mortalityRate - (7.23 / 100);
	}
	return mortalityRate / 100 * pop;
}