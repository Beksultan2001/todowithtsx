import React,{useState,useReducer} from 'react';
import Each from './components/each';
import {Container} from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles,createTheme} from '@material-ui/core/styles';
import {kindObject} from './components/each';
import Item from './components/item';
import styled from 'styled-components';
import {Reducer,bigData} from './components/reducer';

const Main = styled.ul` 

  display: flex;
  flex-direction: column;
  width: 60%;
  margin: 1rem auto;
  list-style-type: none;
  padding: 0;
  @media(max-width: 850px){
    width: 85%;
  }

`;



function App() {

  const [state,dispatch] = useReducer(Reducer,bigData);

  const [status,setStatus] = useState<boolean>(true);
  const [text,setText] = useState<any>();
  const [list,setList] = useState<kindObject[]>([]);

  const test = (id : React.FormEvent<HTMLInputElement>,text: React.FormEvent<HTMLInputElement>) =>{

    setStatus(true);

    const newList: any = {
      id: id,
      text: text
    }


  }

  return (
    <Container fixed >
      <Each state = {state} text = {text} setText = {setText} list = {list} setlist = {setList}  status = {status} />
      <Main>
        {
            list.map((eve) =>{

              const {id,text} = eve;

              return (
                <Item key = {id} id = {id} text = {text} status = {status} setstatus = {test} />
              )
            })
          }
      </Main>
    </Container>
  );
}

export default App;
