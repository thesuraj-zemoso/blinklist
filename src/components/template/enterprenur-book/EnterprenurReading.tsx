import React from 'react';
import book1 from "../../atoms/assets/book1.png";
import book2 from "../../atoms/assets/book2.png";
import book3 from "../../atoms/assets/book3.png";
import book4 from "../../atoms/assets/book4.png";
import book5 from "../../atoms/assets/book5.png";
import bookimage from "../../atoms/assets/bookimage.png";
import { CardAdd } from '../../organisms/cards/card-add/CardAdd';

const readingbooks= [
    {image:bookimage, name:"Beyond Entrepreneurship 2.0", author:"Erica Keswin", time :"13-minute read"},
    {image:book1, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read"},
    {image:book2, name:"Employee to Entrepreneur", author:"Steve Glaveski", time :"15-minute read"},
    {image:book3, name:`Doesn't Hurt to Ask`, author:"Trey Gowdy", time :"13-minute read"},
    {image:book4, name:"The Fate of Food", author:"Amanda Little", time :"12-minute read"},
    {image:book5, name:"Lives of the Stoics", author:"Ryan Holiday, Stephen Hansel", time :"13-minute read"}
  ];

  interface Handle{
      value:string,
  }

export const EnterprenurReading = (props:Handle) => {
    
    const tempBooks=readingbooks.filter(e=>e.name.toLowerCase().indexOf(props.value)>-1)
  return (
      <div data-testid="Enterprenur">
        <CardAdd  details={tempBooks}/>
    </div>
  );
};
