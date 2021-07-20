import React,{useState,useEffect, ChangeEvent, FormEvent} from 'react';
import { Container,InputLabel,Input,FormHelperText, Button } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import {makeStyles,createTheme} from '@material-ui/core/styles';
import {useGlobalContext} from '../Context';


const useStyles = makeStyles((theme) =>({

  root: {
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
  },
  input: {
    width: '20rem',
  },
  send: {
    marginLeft: '0.5rem',
    alignSelf: 'flex-end',
    height: '2rem',

  }

}));

export type kindObject = {
  id: number,
  text: string
}

type Props = {
  list: any,
  setlist: any,
  setText: any,
  text: any,
  status: boolean,
  state: object
}


const Each: React.FC<Props> = ({
  list,
  setlist,
  setText,
  text,
  status
}) =>{


  const classes = useStyles()

  const handleSubmit = (e:  React.FormEvent) =>{

    e.preventDefault();
    
    const inputText: kindObject = {
      id: new Date().getTime(),
      text: text
    }

    setText('');
    setlist([...list,inputText]);

  };

  const inputSubmit = (e: ChangeEvent<HTMLInputElement> ): void => {

    setText(e.currentTarget.value);

  }
  

 return (
  <form className= {classes.root} onSubmit={handleSubmit}> 
      <FormControl size = "medium" >
            <InputLabel htmlFor="my-input">Email address</InputLabel>
            <Input className = {classes.input} id="my-input" aria-describedby="my-helper-text" required   onChange={inputSubmit}  value = {text} />
      </FormControl>
      <Button type = "submit" className = {classes.send} color = "primary" variant="contained" size = "small"> 
        Send
    </Button>
  </form>
 )
 
};

export default Each;