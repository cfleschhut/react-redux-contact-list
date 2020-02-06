import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled.li`
  margin: 25px;
`;

const Card = styled.div`
  width: 400px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 10px 0 hsla(0, 0%, 0%, 0.05);
  background: #fff;
`;

const CardContent = styled.div`
  display: flex;
  padding: 0 20px 40px;
`;

const HeaderImage = styled.div`
  height: 150px;
  background: url('https://picsum.photos/800/300') no-repeat 0 0;
  background-size: cover;
`;

const Avatar = styled.img`
  display: block;
  width: 120px;
  height: 120px;
  margin-top: -60px;
  border-radius: 50%;
  border: 3px solid #fff;
`;

const Details = styled.div`
  padding: 10px;
  color: #111;
`;

const Name = styled.h3`
  margin: 0 0 3px;
  font-size: 22px;
`;

const Email = styled.p`
  margin: 0;
  font-size: 13px;
  color: #444;
`;

const ListItem = ({ contact }) => {
  const { first_name, last_name, avatar, email } = contact;

  return (
    <StyledListItem>
      <Card>
        <HeaderImage />
        <CardContent>
          <Avatar src={avatar} />
          <Details>
            <Name>{`${first_name} ${last_name}`}</Name>
            <Email>{email}</Email>
          </Details>
        </CardContent>
      </Card>
    </StyledListItem>
  );
};

export default ListItem;
