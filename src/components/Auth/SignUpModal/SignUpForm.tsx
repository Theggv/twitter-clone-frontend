import { Link, makeStyles } from '@material-ui/core';
import React from 'react';
import { SelectElement } from '../SelectElement';
import { EmailInput } from './EmailInput';
import { NameInput } from './NameInput';
import { SignUpReducer } from './reducer/SignUpReducer';

const useStyles = makeStyles((theme) => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	dialogContent: {
		margin: '0px 5px',
	},
	headerIcon: {
		fontSize: 28,
		marginRight: '15px',
	},
	headerButtonNext: {
		marginRight: 5,
		marginTop: 5,
		padding: '0px 16px',
		minHeight: 30,
	},
	headerWrapper: {
		display: 'flex',
		justifyContent: 'flex-end',
		flex: 1,
		maxWidth: '100%',
	},
	dialogTitle: {
		fontSize: 23,
		fontWeight: 700,
		marginBottom: 15,
	},
	phoneMailButton: {
		fontSize: 15,
		marginTop: 7,
	},
	birthdayText: {
		fontSize: 15,
		marginTop: 28,
		lineHeight: '20px',
		color: 'rgb(101, 119, 134)',

		'& b': {
			color: 'black',
		},
	},
	birthdayInputs: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		margin: '15px 0 30px',
		flex: '0 0 auto',
	},
	birthdayMonth: {
		flex: '10',
		paddingRight: 10,
	},
	birthdayDay: {
		flex: '5',
		paddingRight: 10,
	},
	birthdayYear: {
		flex: '6',
	},
}));

export const SignUpForm: React.FC = () => {
	const classes = useStyles();

	const [usePhone, setUsePhone] = React.useState(true);
	const [isValidationPassed, setValidationPassed] = React.useState(false);

	const [state, dispatch] = SignUpReducer();

	const [bdayState, setBdayState] = React.useState({
		months: [
			{ name: 'января', maxDays: 31 },
			{ name: 'февраля', maxDays: 29 },
			{ name: 'марта', maxDays: 31 },
			{ name: 'апреля', maxDays: 30 },
			{ name: 'мая', maxDays: 31 },
			{ name: 'июня', maxDays: 30 },
			{ name: 'июля', maxDays: 31 },
			{ name: 'августа', maxDays: 31 },
			{ name: 'сентября', maxDays: 30 },
			{ name: 'октября', maxDays: 31 },
			{ name: 'ноября', maxDays: 30 },
			{ name: 'декабря', maxDays: 31 },
			{ name: '', maxDays: 31, hidden: true },
		],
		days: (maxDays: number) =>
			Array(maxDays)
				.fill(0)
				.map((_, i) => i + 1),
		years: (isFebruary: boolean) =>
			Array(new Date().getFullYear() - 1900 + 1)
				.fill(0)
				.map((_, i) => new Date().getFullYear() - i)
				.filter((i) => {
					if (isFebruary) return i % 4 === 0;
					return i;
				}),
		selectedMonth: '',
		selectedDay: '',
		selectedYear: '',
	});

	return (
		<div>
			<div className={classes.dialogTitle}>Создайте учетную запись</div>
			<NameInput />
			<EmailInput usePhone={usePhone} />
			<Link
				className={classes.phoneMailButton}
				onClick={() => setUsePhone((prev) => !prev)}
				component='button'
				variant='body2'
			>
				{usePhone ? 'Использовать эл. почту' : 'Использовать телефон'}
			</Link>

			<div className={classes.birthdayText}>
				<b>Дата рождения</b>
				<br></br>
				Эта информация не будет общедоступной. Подтвердите свой возраст,
				даже если эта учетная запись предназначена для компании,
				домашнего животного и т. д.
				<div className={classes.birthdayInputs}>
					<SelectElement
						className={classes.birthdayMonth}
						title='Месяц'
						items={bdayState.months
							.filter((i) => !i.hidden)
							.map((i) => i.name)}
						onItemChange={(item: string) => {
							setBdayState((prev) => ({
								...prev,
								selectedMonth: item,
							}));
						}}
					></SelectElement>
					<SelectElement
						className={classes.birthdayDay}
						title='День'
						items={bdayState.days(
							bdayState.months.find(
								(i) => i.name === bdayState.selectedMonth
							)!.maxDays
						)}
						onItemChange={(item: string) =>
							setBdayState((prev) => ({
								...prev,
								selectedDay: item,
							}))
						}
					></SelectElement>
					<SelectElement
						className={classes.birthdayYear}
						title='Год'
						items={bdayState.years(
							bdayState.selectedMonth === 'февраля' &&
								bdayState.selectedDay === '29'
						)}
						onItemChange={(item: string) =>
							setBdayState((prev) => ({
								...prev,
								selectedYear: item,
							}))
						}
					></SelectElement>
				</div>
			</div>
		</div>
	);
};
