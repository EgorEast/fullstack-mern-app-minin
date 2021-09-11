import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { LinkCard } from '../components/LinkCard';
import { Loader } from '../components/Loader';
import { AuthContext } from '../context/AuthContext';
import { useHttp } from '../hooks/http.hook';

export const DetailPage = () => {
	const { token } = useContext(AuthContext);
	const { request, loading } = useHttp();
	const [link, setLink] = useState(null);
	const linkId = useParams().id;

	useEffect(async () => {
		try {
			const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
				authorization: `Bearer ${token}`,
			});
			setLink(fetched);
		} catch (e) {
			// empty
		}
	}, [token, linkId, request]);

	if (loading) {
		return <Loader />;
	}

	return <>{!loading && link && <LinkCard link={link} />}</>;
};
