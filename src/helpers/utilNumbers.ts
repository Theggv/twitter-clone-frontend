export const cutNumber = (num: number): string => {
	if (num < 1000) return num.toString();
	else if (num < 10000) {
		const x = num.toString().split('');
		x.splice(1, 0, ' ');
		return x.join('');
	} else if (num < 100000) return Math.round(num / 100) / 10 + ' тыс.';
	else if (num < 1000000) return Math.round(num / 1000) + ' тыс.';
	else if (num < 10000000) return Math.round(num / 10000) / 100 + ' млн';
	else if (num < 100000000) return Math.round(num / 100000) / 10 + ' млн';
	else return Math.round(num / 1000000) + ' млн';
};

export const cutNumber2 = (num: number): string => {
	if (num < 1000) return num.toString();
	else if (num < 1000000) return Math.round(num / 100) / 10 + ' тыс.';
	else if (num < 10000000) return Math.round(num / 10000) / 100 + ' млн';
	else if (num < 100000000) return Math.round(num / 100000) / 10 + ' млн';
	else return Math.round(num / 1000000) + ' млн';
};

export const generateNum = (max: number) => Math.round(Math.random() * max);
