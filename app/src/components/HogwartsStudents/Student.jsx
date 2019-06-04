import React from 'react';

function Student(props) {
    console.log(props)
    return (
        <div className="student-card">
            <img src={ props.student.img } />
            <div className="student-info">
                
            </div>
        </div>
    );
}

export default Student;