import React from 'react';
import Student from './Student';
import { HarryProfile, RonProfile  } from './students-data';


function HogwartsStudents() {
   return (
      <>
         <Student student={ HarryProfile }/>
         <Student student={ RonProfile } />
      </>
   ); 
}

export default HogwartsStudents;