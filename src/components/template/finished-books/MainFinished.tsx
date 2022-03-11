import React from 'react';
import CardMui from '../../organisms/cards/card-mui/CardMui';

interface Books {
    finishedReading: {
      image: string;
      name: string;
      author: string;
      time: string;
      finished:boolean,
    }[];
    handleReadAgain:(item:string)=>void;
    handleFinish:(item:string)=>void;
  }

const MainFinished = (props : Books) => {
  return (
      <div data-testid="MainFinished">
        <CardMui handleReadAgain = {props.handleReadAgain} handleFinish = {props.handleFinish} details = {props.finishedReading}/>
      </div>
  );
};


export default MainFinished;