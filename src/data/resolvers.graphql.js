import { EmployeeData } from "../db/dbConnector.js";


export const resolvers = {
    Query: {
        getemployeeData: (root) => {
            return new Promise((resolve, reject) => {
                EmployeeData.find((err, employeeData) => {
                    if (err) reject(err);
                    else resolve(employeeData)
                });
            });
        },

        findAemployeeData: (root, { empId}) => {
            return new Promise((resolve, reject) => {
                EmployeeData.findOne({ empId: empId}, (err, employeeData) => {
                    if (err) reject(err);
                    else resolve(employeeData);
                });
            });
        },
    },

    Mutation: {
        addemployeeData: (root, { employeeData }) => {
            const { ...rest } = employeeData;
            const newEmployeeData = new EmployeeData({ ...rest });

            return new Promise((resolve, reject) => {
                newEmployeeData.save((err, employeeData) => {
                    if (err) reject(err);
                    else resolve(employeeData);
                });
            });
        },
    },
};


Query : {

}