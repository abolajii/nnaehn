import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: row;
	margin: 40px 0px;
`;

export const Name = styled.div`
	width: 300px;
	height: 20px;
	color: #8a99c0;
`;

export const ImageContainer = styled.div`
	width: 50px;
	height: 50px;
	margin-right: 20px;
	border-radius: 50%;
	/* overflow: hidden; */
`;

export const Image = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 25px;
	box-shadow: 0px 2px 6px -1px rgba(0, 0, 0, 0.31);
`;

export const UserName = styled.div`
	width: 300px;
	height: 20px;
	margin-top: 5px;
	color: #a5a5a5;
`;

export const Email = styled.div`
	width: 300px;
	height: 20px;
	margin-top: 5px;
	color: #a5a5a5;
`;
