import { SvgIcon, SvgIconProps } from '@material-ui/core';
import React from 'react';

const GifIcon: React.FC<SvgIconProps> = (props): React.ReactElement => {
	return (
		<SvgIcon {...props} viewBox={'0 0 512 512'}>
			<path d='m456.832031 0h-401.664062c-30.421875 0-55.167969 24.746094-55.167969 55.167969v401.664062c0 30.417969 24.746094 55.167969 55.167969 55.167969h401.664062c30.417969 0 55.167969-24.75 55.167969-55.167969v-401.664062c0-30.421875-24.75-55.167969-55.167969-55.167969zm25.167969 456.832031c0 13.878907-11.289062 25.167969-25.167969 25.167969h-401.664062c-13.878907 0-25.167969-11.289062-25.167969-25.167969v-401.664062c0-13.878907 11.289062-25.167969 25.167969-25.167969h401.664062c13.878907 0 25.167969 11.289062 25.167969 25.167969zm0 0' />
			<path d='m175.828125 215.109375c13.65625 0 16.226563 8.355469 16.710937 15.90625.160157 4.980469 4.816407 6.585937 10.441407 6.585937 6.910156 0 10.445312-1.925781 10.445312-9.960937 0-19.28125-16.230469-30.851563-38.402343-30.851563-20.40625 0-36.957032 9.960938-36.957032 36.796876v44.828124c0 26.832032 16.390625 36.792969 37.601563 36.792969 21.207031 0 37.757812-9.960937 37.757812-36.792969v-19.121093c0-3.535157-2.410156-6.75-6.585937-6.75h-27.316406c-4.175782 0-6.425782 4.179687-6.425782 8.195312 0 4.179688 2.25 8.195313 6.425782 8.195313h13.015624v9.480468c0 12.53125-6.425781 18.476563-16.871093 18.476563-10.605469 0-16.710938-5.945313-16.710938-18.476563v-44.832031c0-12.527343 6.105469-18.472656 16.871094-18.472656zm0 0' />
			<path d='m256.476562 196.792969c-5.300781 0-10.441406 1.925781-10.441406 6.425781v104.4375c0 4.339844 5.144532 6.589844 10.441406 6.589844 5.144532 0 10.445313-2.25 10.445313-6.589844v-104.4375c0-4.5-5.300781-6.425781-10.445313-6.425781zm0 0' />
			<path d='m367.503906 196.792969h-56.078125c-4.65625 0-9.15625 2.246093-9.15625 6.585937v104.277344c0 4.339844 5.140625 6.589844 10.441407 6.589844 5.144531 0 10.445312-2.25 10.445312-6.589844v-44.023438h24.582031c4.5 0 6.425781-4.339843 6.425781-8.035156 0-4.335937-2.25-8.351562-6.425781-8.351562h-24.582031v-32.136719h44.347656c4.175782 0 6.425782-4.339844 6.425782-9.320313 0-4.335937-1.929688-8.996093-6.425782-8.996093zm0 0' />
		</SvgIcon>
	);
};

export default GifIcon;