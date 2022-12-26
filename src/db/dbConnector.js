const mongoose = require("mongoose");
const { environment } = require('../config/config');
const { employeeDataSchema } = require('./schema/employeeDataSchema.js');
const env = process.env.NODE_ENV || "development";

mongoose.connect(environment[env].dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

let db = mongoose.connection;
db.on('error', () => {
    console.error("Error while connecting to the database..");
});

const EmployeeData = mongoose.model('EmployeeData', employeeDataSchema);

export { EmployeeData };
