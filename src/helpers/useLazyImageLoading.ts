import { useEffect, useState } from 'react';
import { LoadingState } from '../store/ducks/loading';

export const useLazyImageLoading = (src?: string) => {
	const [loading, setLoading] = useState<LoadingState>(LoadingState.NEVER);

	useEffect(() => {
		if (!src) {
			setLoading((prev) => LoadingState.LOADED);
			return;
		}

		const img = new Image();

		const loadListener = () => setLoading((prev) => LoadingState.LOADED);
		const errorListener = () => setLoading((prev) => LoadingState.ERROR);

		img.addEventListener('load', loadListener);
		img.addEventListener('error', errorListener);

		setLoading((prev) => LoadingState.LOADING);
		img.src = src;

		return () => {
			img.removeEventListener('load', loadListener);
			img.removeEventListener('error', errorListener);
		};
	}, [src]);

	return {
		loadingState: loading,
		isLoaded: loading === LoadingState.LOADED,
		isLoading: loading === LoadingState.LOADING,
		isError: loading === LoadingState.ERROR,
	};
};
