import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import Message from '../Components/Message';

const Messages = () => {
  return (
    <div className='App'>
      <Container>
        <ListGroup>
          <Message contactName="Admin" dateOfLastContact="01.01.2022" lastMessage="The Pick-A-Tutor team wishes you a happy new year!" />
          <Message contactName="Edna Mode" dateOfLastContact="31.12.2021" lastMessage="No capes!" />
          <Message contactName="Norman Bates" dateOfLastContact="30.12.2021" lastMessage="I wouldn't hurt a fly." />
          <Message contactName="Inigo Montoya" dateOfLastContact="30.12.2021" lastMessage="I want my father back, you *** ** * *****!" />
          <Message contactName="Samwise Gamgee" dateOfLastContact="30.12.2021" lastMessage="I can't carry it for you...but I can carry you!" />
          <Message contactName="Tony Montana" dateOfLastContact="30.12.2021" lastMessage="In this country, you gotta make the money first. Then when you get the money, you get the power. Then when you get the power, then you get the women." />
          <Message contactName="Lester Burnham" dateOfLastContact="30.12.2021" lastMessage="I can’t feel anything but gratitude for every single moment of my stupid little life." />
          <Message contactName="Tommy DeVito" dateOfLastContact="30.12.2021" lastMessage="Funny how? What’s funny about it?" />
          <Message contactName="Anton Chigurh" dateOfLastContact="30.12.2021" lastMessage="Call it, friend-o." />
          <Message contactName="Lou Bloom" dateOfLastContact="30.12.2021" lastMessage="And remember: I would never ask you to do something I wouldn't do myself." />
          <Message contactName="Walter Sobchak" dateOfLastContact="30.12.2021" lastMessage="Mark it zero!" />
        </ListGroup>
      </Container>
    </div>
  );
};

export default Messages;