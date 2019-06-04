import React from 'react';

function Student(props) {
    console.log(props)
    return (
        <div className="student-card">
            <img src={ props.student.img } />
            <div className="student-info">
                <h1><strong>Name: </strong>{props.student.name}</h1>
                <p><strong>Age: </strong>{props.student.age}</p>
                <p><strong>Identity: </strong>{props.student.identity}</p>
                <p><strong>Best Friends: </strong>{props.student.bestFriend}</p>
            </div>
        </div>
    );
}

export default Student;