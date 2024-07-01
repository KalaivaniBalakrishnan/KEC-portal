import React from 'react';

function StudentView() {
  const studentData = {
    grade: 'A',
    subjects: {
      sub1: '80',
      sub2: '85',
      sub3: '90',
      sub4: '88',
      sub5: '92'
    }
  };

  return (
    <div className="view-container">
      <h2>Your Grade: {studentData.grade}</h2>
      <div className="form-container">
        <label>
          <span>Sub 1:</span>
          <input type="text" value={studentData.subjects.sub1} readOnly />
        </label>
        <label>
          <span>Sub 2:</span>
          <input type="text" value={studentData.subjects.sub2} readOnly />
        </label>
        <label>
          <span>Sub 3:</span>
          <input type="text" value={studentData.subjects.sub3} readOnly />
        </label>
        <label>
          <span>Sub 4:</span>
          <input type="text" value={studentData.subjects.sub4} readOnly />
        </label>
        <label>
          <span>Sub 5:</span>
          <input type="text" value={studentData.subjects.sub5} readOnly />
        </label>
      </div>
    </div>
  );
}

export default StudentView;
