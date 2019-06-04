import React from 'react';
import Student from './Student';
import { HarryProfile } from './students-data';

function HogwartsStudents() {
   return (
      <Student student={ HarryProfile }/>
   ); 
}

export default HogwartsStudents;