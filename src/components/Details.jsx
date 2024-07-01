import React, { useState } from 'react';
import './Details.css';

const Details = () => {
    const [searchType, setSearchType] = useState('student');
    const [searchName, setSearchName] = useState('');
    const [details, setDetails] = useState(null);

    const students = [
        { name: 'kalai', phone: '1234567890', address: '123 Street A' },
        { name: 'magesh', phone: '1234567891', address: '456 Street B' },
        { name: 'raji', phone: '1234567892', address: '789 Street C' },
        { name: 'divi', phone: '1234567893', address: '101 Street D' },
        { name: 'kavin', phone: '1234567894', address: '102 Street E' },
        { name: 'john', phone: '1234567895', address: '103 Street F' },
        { name: 'kavya', phone: '1234567896', address: '104 Street G' },
        { name: 'jaya', phone: '1234567897', address: '105 Street H' },
        { name: 'jibi', phone: '1234567898', address: '106 Street I' },
        { name: 'sash', phone: '1234567899', address: '107 Street J' }
    ];

    const staff = [
        { name: 'Smith', roomNo: '201', phone: '9876543210' },
        { name: 'Ms. Johnson', roomNo: '202', phone: '9876543211' },
        { name: 'Mrs. Williams', roomNo: '203', phone: '9876543212' },
        { name: 'Mr. Brown', roomNo: '204', phone: '9876543213' },
        { name: 'Ms. Jones', roomNo: '205', phone: '9876543214' }
    ];

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
        setDetails(null); // Reset details when search type changes
    };

    const handleSearchNameChange = (e) => {
        setSearchName(e.target.value);
    };

    const handleSearch = () => {
        let detail = null;
        if (searchType === 'student') {
            detail = students.find(student => student.name.toLowerCase() === searchName.toLowerCase());
        } else {
            detail = staff.find(staffMember => staffMember.name.toLowerCase() === searchName.toLowerCase());
        }
        setDetails(detail);
    };

    return (
        <div className="details-container">
            <div className="search-controls">
                <select value={searchType} onChange={handleSearchTypeChange} className="search-type">
                    <option value="student">Student</option>
                    <option value="staff">Staff</option>
                </select>
                <input
                    type="text"
                    placeholder={`Search by ${searchType === 'student' ? 'Student' : 'Staff'} Name`}
                    value={searchName}
                    onChange={handleSearchNameChange}
                    className="search-input"
                />
                <button onClick={handleSearch} className="search-button">Search</button>
            </div>

            {details && (
                <div className="details-info">
                    <h3>Details:</h3>
                    {searchType === 'student' ? (
                        <div>
                            <p><strong>Name:</strong> {details.name}</p>
                            <p><strong>Phone:</strong> {details.phone}</p>
                            <p><strong>Address:</strong> {details.address}</p>
                        </div>
                    ) : (
                        <div>
                            <p><strong>Name:</strong> {details.name}</p>
                            <p><strong>Room No:</strong> {details.roomNo}</p>
                            <p><strong>Phone:</strong> {details.phone}</p>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Details;
