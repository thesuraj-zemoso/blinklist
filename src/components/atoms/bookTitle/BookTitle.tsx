import { Typography } from '@mui/material';
import React from 'react';
import useStyle from '../../../Theme';


interface BookDet{
    bookName:string,
}
const BookTitle = (props:BookDet) => {
    
  return (
        <>
            <Typography
                variant='subtitle1'
                sx={useStyle.bookTitleOne}
            >
                {props.bookName}
            </Typography>
        </>
  );
};


export default BookTitle;