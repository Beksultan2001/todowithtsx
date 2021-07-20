import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import { ListItemText } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import  DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import {makeStyles,createTheme} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) =>({

  base: {
   width: '100%',
   listStyleType: 'none'
  },
  listitemtext: {
   listStyleType: 'none'
  }

}));

interface Props  {
 id: number,
 text: string,
 status: boolean,
 setstatus: any,
}


const Item: React.FC<Props> = ({id,text,status,setstatus}) =>{

  const classes = useStyles();

  return (
    <ListItem className = {classes.base}>
      <ListItemText primary = {text} className = {classes.listitemtext}  />
      <ListItemSecondaryAction>
         <IconButton edge="end"  color = "primary" size = "small" onClick = {() => setstatus(id,text)}>
           <EditIcon />
         </IconButton>
         <IconButton edge="end"  color = "secondary" >
           <DeleteIcon />
         </IconButton>
       </ListItemSecondaryAction>
    </ListItem>
  )

}

export default Item;

