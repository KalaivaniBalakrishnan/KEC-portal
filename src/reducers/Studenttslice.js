// src/studentsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    students: [
        { name: 'kalai', rollNo: '01', mark1: '80', mark2: '75', mark3: '85', total: 240 },
        { name: 'magesh', rollNo: '02', mark1: '70', mark2: '65', mark3: '75', total: 210 },
        { name: 'raji', rollNo: '03', mark1: '85', mark2: '90', mark3: '95', total: 270 },
        { name: 'divi', rollNo: '04', mark1: '60', mark2: '55', mark3: '70', total: 185 },
        { name: 'kavin', rollNo: '05', mark1: '75', mark2: '80', mark3: '85', total: 240 },
        { name: 'john', rollNo: '06', mark1: '95', mark2: '90', mark3: '95', total: 280 },
        { name: 'jibi', rollNo: '09', mark1: '75', mark2: '82', mark3: '82', total: 239 },
        { name: 'sash', rollNo: '10', mark1: '80', mark2: '80', mark3: '92', total: 252 }
    ],
    sortOrder: true,
    searchTerm: ''
};

const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        },
        setSortOrder: (state) => {
            state.sortOrder = !state.sortOrder;
            state.students.sort((a, b) => state.sortOrder ? a.total - b.total : b.total - a.total);
        },
        deleteStudent: (state, action) => {
            state.students = state.students.filter((_, index) => index !== action.payload);
        }
    }
});

export const { setSearchTerm, setSortOrder, deleteStudent } = studentsSlice.actions;

export default studentsSlice.reducer;
