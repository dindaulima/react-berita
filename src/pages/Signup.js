import React, {useState} from 'react';
import '../assets/css/App.css';
import styled from "styled-components";
import { 
  Container,
  Row,
  Col
 } from 'react-bootstrap';


const Title = styled.h1`
  color: black;
  padding: 20px;
`;


const FormRegis = styled.div`
  background: #fff;
  margin: 0 auto;
  display: flex;
  padding:  5px;
  justify-content: center;
  width : 50%;
  border: 1px solid #b8b8b8;

`;

const DataItem = styled.div`
  padding: 2px 5px;
  margin: 5px auto 1px;
  border-radius: 2px;
  display: flex;
  width : 70%;
`;


const Button = styled.button`
  background: #4996d1;
  border-radius: 5px;
  color : white;
  font-size: 1em;
  border: 2px solid
  font-weight: bold;
  padding: 5px 5px;
  margin: 20px auto 30px;
  width : 70%;


`;

function RegisForm({ addData }) {
  const [data, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!data) return;
    addData(data);
    setValue("");
  };

  return (
      <FormRegis>
        <form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Title>Registrasi</Title>
            </Col>
          </Row>
          <Row>
            <Col>
              <p>Sign up to see news from all over the world</p>
            </Col>
          </Row>
            <Row>
              <Col>
                <DataItem>
                  <input type="text" className="input form-control" value={data.email} name="email" placeholder="Email" onChange={e => setValue(e.target.value)}/>
                </DataItem>
              </Col>
            </Row>
            <Row>
              <Col>
                <DataItem>
                  <input type="password" className="input form-control" value={data.password} name="password" placeholder="Password" onChange={e => setValue(e.target.value)}/>
                </DataItem>
              </Col>
            </Row>
            <Row>
              <Col>
                <DataItem>
                  <input type="password" className="input form-control" value={data.confpassword} name="confpassword" placeholder="Retype Password" onChange={e => setValue(e.target.value)}/>
                </DataItem>
              </Col>
            </Row>
            <Row>
              <Col>
                <Button className="button" onClick={handleSubmit}>Sign up</Button>
              </Col>
            </Row>

            <Row>
              <Col>
                <p>By signing up, you agree to our Terms , Data Policy and Cookies Policy .</p>
              </Col>
            </Row>
        </form>
      </FormRegis>
  );
}

function Signup(){
    
  let [datas, setDatas] = useState([
    {
        email: '',
        password: '',
        confpassword: '',
    }
  ]);

  const addData = text => {
    alert('A name was submitted: ' + this.state.value);
    text.preventDefault();
  };

  return (
    <div className="App">
    <Container>
      <RegisForm addData={addData} />
    </Container>
    </div>
  )
};


export default Signup;
