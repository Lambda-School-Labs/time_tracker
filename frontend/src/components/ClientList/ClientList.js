import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Card, CardText, CardBody, CardTitle, Button } from 'reactstrap';
import FaPlus from 'react-icons/lib/fa/plus';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import FaCircle from 'react-icons/lib/fa/plus-circle';

class ClientList extends Component {
  render() {
    if (this.props.loading) {
      return <div> Loading... </div>;
    } else {
      if (this.props.clients.length) {
        return (
          <div>
            <StyledButton
              onClick={() => this.props.history.push('/dashboard/clients/new')}
            >
              Add New Client <StyledIcon />
            </StyledButton>
            <Row>
              {this.props.clients.map((client, i) => {
                return (
                  <Link to={`/dashboard/clients/${client._id}`} key={i}>
                    <ClientCard name={client.name} />
                  </Link>
                );
              })}
            </Row>
          </div>
        );
      }
      return <MainDash />;
    }
  }
}

const ClientCard = props => {
  return (
    <Col sm="6">
      <Card>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
        </CardBody>
        <CardBody>
          <CardText>Add comments or description</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

const MainDash = props => {
  return (
    <div>
      <AddText>
        <div>New Client</div>
        <div>
          <Link to="/dashboard/clients/new">
            <FaCircle />
          </Link>
        </div>
      </AddText>
    </div>
  );
};

const StyledButton = styled(Button)`
  display: flex;
  justify-content: space-between;
  min-width: 20vw;
  align-items: center;
`;

const StyledIcon = styled(FaPlus)`
  margin-left: 1vw;
  font-size: 1.2em;
`;

const AddText = styled.div`
  padding-top: 15vh;
  font-size: 4em;
`;

const mapStateToProps = state => {
  return {
    clients: state.userReducer.clients,
    loading: state.userReducer.loading
  };
};

export default withRouter(connect(mapStateToProps, null)(ClientList));
