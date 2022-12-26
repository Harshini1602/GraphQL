import { gql } from "apollo-server-express";

export const typeDefs = gql`

    type employeeData {
        empId : ID
        empName : String
        empAge : Int
        empContacts : [empPhone]
        empEmail : [empEmails]
        gender : String
        empDob : String
        empMaritalStatus : String
        employementType : String
        empAddress : String
        empDesignation : String
        jobName : String
        managerId : Int
        dateOfJoining : String
        ctc : Int
        bankName : String
        accountNumber : String
        departmentId : ID
        location : String
        projectId : Int 
        projectName : String
        projectLocation : String
        projectManagerId : ID
        projectManagerName : String
        projectAllocatedDate : String
        taskAssignedDate : String
        taskAssignedBy : String
        taskStatus : String
        taskDescription : String
        reporter : String
        taskStarted : Boolean

    }
    type empPhone {
        personalMobileNumber : String
        alternateMobileNumber : String
    }
    type empEmails {
        personalEmailId : String
        empCorpEmail : String
    }

    input employeeDataInput {
        empId : ID
        empName : String
        empAge : Int
        empContacts : [empPhoneInput]
        empEmail : [empEmailsInput]
        gender : String
        empDob : String
        empMaritalStatus : String
        employementType : String
        empAddress : String
        empDesignation : String
        jobName : String
        managerId : Int
        dateOfJoining : String
        ctc : Int
        bankName : String
        accountNumber : String
        departmentId : ID
        location : String
        projectId : Int 
        projectName : String
        projectLocation : String
        projectManagerId : ID
        projectManagerName : String
        projectAllocatedDate : String
        taskAssignedDate : String
        taskAssignedBy : String
        taskStatus : String
        taskDescription : String
        reporter : String
        taskStarted : Boolean
    }
    
    input empPhoneInput {
        personalMobileNumber : String
        alternateMobileNumber : String
    }

    input empEmailsInput {
        personalEmailId : String 
        empCorpEmail : String
    }

type Query {
    getemployeeData : [employeeData]
    findAemployeeData(empId : Int) : employeeData
}

type Mutation {
    addemployeeData(employeeData : employeeDataInput) : employeeData
}
`;


