import { Error } from 'mongoose';
import { useState, useCallback } from 'react';

export const useHttp = () => {
	const [loading, setsLoading] = useState(false);
	const [error, setsError] = useState(null);
	const request = useCallback(
		async (url, method = 'GET', body = null, headers = {}) => {
			setsLoading(true);
			try {
				if (body) {
					body = JSON.stringify(body);
					headers['Content-Type'] = 'application/json';
				}

				const responce = await fetch(url, { method, body, headers });
				const data = await responce.json();

				if (!responce.ok) {
					throw new Error(data.message || 'Что-то пошло не так');
				}

				setsLoading(false);

				return data;
			} catch (e) {
				setsLoading(false);
				setsError(e.message);
				throw e;
			}
		},
		[]
	);

	const clearError = useCallback(() => setsError(null), []);

	return { loading, request, error, clearError };
};
