import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Profile } from './components';
import axios from 'axios';

const Container = styled.div`
	padding: 2rem;
	box-shadow: 0 3px 3px rgba(0, 0, 0, 0.5);

	max-width: 1000px;
	margin: auto;
	margin-top: 30px;
	border-radius: 4px;
`;

const App = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [profile, setProfile] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		const fetchData = async () => {
			try {
				const data = await axios.get(
					'https://jsonplaceholder.typicode.com/users'
				);

				const newData = data.data.map((each) => {
					return {
						...each,
						img: `https://randomuser.me/api/portraits/men/6${each.id}.jpg`,
					};
				});
				setProfile(newData);
				setTimeout(() => {
					setIsLoading(false);
				}, 2000);
			} catch (e) {
				console.log(e);
			}
		};

		fetchData();
	}, []);

	console.log(profile);

	if (isLoading) {
		return (
			<Container>
				Profile 10
				{Array(7)
					.fill()
					.map((each) => (
						<Profiles loading={isLoading} />
					))}
				{/* {profile.map((each) => (
					<Profiles loading={isLoading} />
				))} */}
			</Container>
		);
	}

	return (
		<Container>
			Profile
			{profile.map((each) => (
				<Profiles key={each.id} profile={each} />
			))}
		</Container>
	);
};

export default App;
