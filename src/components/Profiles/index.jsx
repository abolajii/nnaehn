import React from 'react';
import { Skeleton } from '..';
import {
	Container,
	Email,
	Image,
	ImageContainer,
	Name,
	UserName,
} from './styles';

const Profiles = ({ profile, loading }) => {
	if (loading === true) {
		return (
			<Container>
				<ImageContainer>
					<Skeleton border={25} />
					{/* <Image src={profile.img} /> */}
				</ImageContainer>
				<div>
					<Name>
						<Skeleton border={4} />
					</Name>
					<UserName>
						<Skeleton border={4} />
					</UserName>
					<Email>
						<Skeleton border={4} />
					</Email>
				</div>
			</Container>
		);
	}
	return (
		<Container>
			<ImageContainer>
				{/* <Skeleton /> */}
				<Image src={profile.img} />
			</ImageContainer>
			<div>
				<Name>{profile.name}</Name>
				<UserName>{profile.username}</UserName>
				<Email>{profile.email}</Email>
			</div>
		</Container>
	);

	// return <Name>{profile.name}</Name>;
};

export default Profiles;
