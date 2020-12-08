import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link, makeStyles } from '@material-ui/core';

import TwitterIcon from '@material-ui/icons/Twitter';
import {
	ContainerModal,
	ContainerModalProps,
} from '../../../containers/Containers';
import { InputElement } from '../InputElement';
import { SelectElement } from '../SelectElement';
import { NameInput } from './NameInput';

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

interface SignUpDialogProps extends ContainerModalProps {}

export const SignUpModal: React.FC<SignUpDialogProps> = ({
	visible = false,
	onClose,
}) => {
	const classes = useStyles();

	const [usePhone, setUsePhone] = useState(true);
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [isValidationPassed, setValidationPassed] = useState(false);

	const [bdayState, setBdayState] = useState({
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

	const phoneValidation = (text: string): string | undefined => {
		if (email !== text) setEmail((prev) => text);
		return undefined;
	};

	const emailValidation = (text: string): string | undefined => {
		if (email !== text) setEmail((prev) => text);
		return undefined;
	};

	useEffect(() => {
		if (visible) document.title = 'Зарегистрироваться в Твиттере / Твиттер';
	}, [visible]);

	useEffect(() => {
		let isValidationFailed =
			!name ||
			!email ||
			!bdayState.selectedMonth ||
			!bdayState.selectedDay ||
			!bdayState.selectedYear;

		if (isValidationFailed !== isValidationPassed)
			setValidationPassed((prev) => isValidationFailed);
	}, [name, email, bdayState, isValidationPassed]);

	const titleBlock = (
		<div className={classes.header}>
			<div className={classes.headerWrapper}></div>
			<TwitterIcon color='primary' className={classes.headerIcon} />
			<div className={classes.headerWrapper}>
				<Button
					className={classes.headerButtonNext}
					variant='contained'
					color='primary'
					disabled={isValidationPassed}
				>
					Далее
				</Button>
			</div>
		</div>
	);

	return (
		<ContainerModal
			visible={visible}
			onClose={onClose}
			title={() => titleBlock}
			disableExitButton
		>
			<div className={classes.dialogTitle}>Создайте учетную запись</div>
			<NameInput onChange={(text) => {}} />
			<InputElement
				fullWidth
				title={usePhone ? 'Телефон' : 'Адрес электронной почты'}
				validationFunc={(text) =>
					usePhone ? phoneValidation(text) : emailValidation(text)
				}
				useDebounceDelay={250}
			></InputElement>
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
		</ContainerModal>
	);
};
