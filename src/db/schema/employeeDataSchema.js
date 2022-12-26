"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.employeeDataSchema = void 0;
const mongoose = require("mongoose");
exports.employeeDataSchema = new mongoose.Schema({

    empId: {
        type: Number
    },
    empName: {
        type: String
    },
    empAge: {
        type: Number
    },
    empContacts: {
        type: Array
    },
    empEmail: {
        type: Array
    },
    gender: {
        type: String
    },
    empDob: {
        type: String
    },
    empMaritalStatus: {
        type: String
    },
    employementType: {
        type: String
    },
    empAddress: {
        type: String
    },
    empDesignation: {
        type: String
    },
    jobName: {
        type: String
    },
    managerId: {
        type: Number
    },
    dateOfJoining: {
        type: String
    },
    ctc: {
        type: Number
    },
    bankName: {
        type: String
    },
    accountNumber: {
        type: String
    },
    departmentId: {
        type: Number
    },
    location: {
        type: String
    },
    projectId: {
        type: Number
    },
    projectName: {
        type: String
    },
    projectLocation: {
        type: String
    },
    projectManagerId: {
        type: Number
    },
    projectManagerName: {
        type: String
    },
    projectAllocatedDate: {
        type: String
    },
    taskAssignedDate: {
        type: String
    },
    taskAssignedBy: {
        type: String
    },
    taskStatus: {
        type: String
    },
    taskDescription: {
        type: String
    },
    reporter: {
        type: String
    },
    taskStarted: {
        type: Boolean
    },
})