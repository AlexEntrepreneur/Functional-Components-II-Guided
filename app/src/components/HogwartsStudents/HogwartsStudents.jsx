import React from 'react';
import Student from './Student';
import { students } from './students-data';


function HogwartsStudents() {
   return (
      <>
       {
          students.map((lemon, index) => (
            lemon.name === 'Harry Potter'
             ? <Student student={lemon} key={index} />
             : null
          ))
       }
      </>
   ); 
}

export default HogwartsStudents;