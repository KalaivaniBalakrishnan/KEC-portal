import React from 'react';

const StudentTable = ({ students }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Roll Number</th>
          <th>Name</th>
          <th>Mark 1</th>
          <th>Mark 2</th>
          <th>Mark 3</th>
          <th>Mark 4</th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => (
          <tr key={student.rollNumber}>
            <td>{student.rollNumber}</td>
            <td>{student.name}</td>
            <td>{student.mark1}</td>
            <td>{student.mark2}</td>
            <td>{student.mark3}</td>
            <td>{student.mark4}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default StudentTable;
