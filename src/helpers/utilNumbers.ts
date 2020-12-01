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

export const formatDateDifference = (dateStr: string) => {
	let date = new Date(dateStr);
	let curDate = new Date();

	let diff = Math.abs(curDate.getTime() - date.getTime());
	let msInMin = 1000 * 60;
	let msInHour = msInMin * 60;
	let msInDay = msInHour * 24;

	if (diff < msInMin) return Math.round(diff / 1000) + ' с';
	else if (diff < msInHour) return Math.round(diff / msInMin) + ' м';
	else if (diff < msInDay) return Math.round(diff / msInHour) + ' ч';

	let formated = `${date.getDate()} ${
		[
			'янв.',
			'фев.',
			'мар.',
			'апр.',
			'мая',
			'июня',
			'июля',
			'авг.',
			'сент.',
			'окт.',
			'нояб.',
			'дек.',
		][date.getMonth()]
	}`;

	if (curDate.getFullYear() !== date.getFullYear())
		formated += ` ${date.getFullYear()}`;

	return formated;
};

export const formatDateFull = (dateStr: string) => {
	let date = new Date(dateStr);

	const getFullMinutes = () => {
		let min = date.getMinutes();
		return min < 10 ? '0' + min : min;
	};

	return (
		`${
			date.getHours() <= 12
				? `${date.getHours()}:${getFullMinutes()} AM`
				: `${date.getHours() - 12}:${getFullMinutes()} PM`
		} · ` +
		date.getDate() +
		' ' +
		[
			'янв.',
			'фев.',
			'мар.',
			'апр.',
			'мая',
			'июня',
			'июля',
			'авг.',
			'сент.',
			'окт.',
			'нояб.',
			'дек.',
		][date.getMonth()] +
		' ' +
		date.getFullYear() +
		' г.'
	);
};

export const generateNum = (max: number) => Math.round(Math.random() * max);
