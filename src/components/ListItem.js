import React from 'react';
import styled from 'styled-components';
import Button from './Button';

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
  padding: 0 20px 30px;
`;

const DetailsWrapper = styled.div`
  display: flex;
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
  background: #fff;

  &:not([src]) {
    border-radius: 0;
  }
`;

const Details = styled.div`
  padding: 20px 10px 0;
  color: #111;
`;

const Name = styled.h3`
  margin: 0 0 3px;
  font-size: 21px;
`;

const Star = styled.span`
  margin-left: 2px;
  color: ${props => (props.favorited ? 'hsl(45, 90%, 50%)' : '#eee')};
`;

const Email = styled.p`
  margin: 0;
  font-size: 13px;
  color: #444;
`;

const Actions = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const ListItem = ({ contact, favoriteContact, deleteContact }) => {
  const { id, first_name, last_name, avatar, email, favorited } = contact;

  return (
    <StyledListItem>
      <Card>
        <HeaderImage />
        <CardContent>
          <DetailsWrapper>
            <Avatar src={avatar} />
            <Details>
              <Name>
                {`${first_name} ${last_name}`}{' '}
                <Star favorited={favorited}>★</Star>
              </Name>
              <Email>{email}</Email>
            </Details>
          </DetailsWrapper>
          <Actions>
            <Button primary onClick={() => favoriteContact(id)}>
              Favorite
            </Button>
            <Button onClick={() => deleteContact(id)}>Delete</Button>
          </Actions>
        </CardContent>
      </Card>
    </StyledListItem>
  );
};

export default ListItem;
