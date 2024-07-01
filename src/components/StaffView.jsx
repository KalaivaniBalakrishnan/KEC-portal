import React, { useState } from 'react';
import './StaffView.css';

const StaffView = () => {
    const [students, setStudents] = useState([
        { name: 'kalai', rollNo: '01', mark1: '80', mark2: '75', mark3: '85', total: 240 },
        { name: 'magesh', rollNo: '02', mark1: '70', mark2: '65', mark3: '75', total: 210 },
        { name: 'raji', rollNo: '03', mark1: '85', mark2: '90', mark3: '95', total: 270 },
        { name: 'divi', rollNo: '04', mark1: '60', mark2: '55', mark3: '70', total: 185 },
        { name: 'kavin', rollNo: '05', mark1: '75', mark2: '80', mark3: '85', total: 240 },
        { name: 'john', rollNo: '06', mark1: '95', mark2: '90', mark3: '95', total: 280 },
        { name: 'jibi', rollNo: '09', mark1: '75', mark2: '82', mark3: '82', total: 239 },
        { name: 'sash', rollNo: '10', mark1: '80', mark2: '80', mark3: '92', total: 252 }
    ]);

    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState(true); // true for ascending, false for descending

    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSort = () => {
        const sortedStudents = [...students].sort((a, b) => {
            return sortOrder ? a.total - b.total : b.total - a.total;
        });
        setStudents(sortedStudents);
        setSortOrder(!sortOrder);
    };

    const handleEdit = (index) => {
        // Handle edit action
        console.log("Edit student at index:", index);
    };

    const handleDelete = (index) => {
        // Handle delete action
        const updatedStudents = students.filter((_, i) => i !== index);
        setStudents(updatedStudents);
        // Assuming you have a function to update the JSON file on the server
        // updateJSONFile(updatedStudents);
    };

    const filteredStudents = students.filter(student =>
        student.rollNo.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="staff-container">
            <input
                type="text"
                placeholder="Search by RollNo"
                value={searchTerm}
                onChange={handleSearch}
                className="search-input"
            />

            <table className="submitted-data">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>RollNo</th>
                        <th>Mark1</th>
                        <th>Mark2</th>
                        <th>Mark3</th>
                        <th onClick={handleSort}>
                            Total {sortOrder ? '▲' : '▼'}
                        </th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStudents.map((student, index) => (
                        <tr key={index}>
                            <td>{student.name}</td>
                            <td>{student.rollNo}</td>
                            <td>{student.mark1}</td>
                            <td>{student.mark2}</td>
                            <td>{student.mark3}</td>
                            <td>{student.total}</td>
                            <td className="action-buttons">
                                <button onClick={() => handleEdit(index)}>Edit</button>
                                <button onClick={() => handleDelete(index)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StaffView;
