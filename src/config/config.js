export const PORT = 5000;
export const environment ={
    development : {
        serverURL : `http://localhost:${PORT}/`,
        dbString : 'mongodb://localhost:27017/employeeData'
    },
    production : {
        serverURL : `http://localhost:${PORT}/`,
        dbString : 'mongodb://localhost:27017/employeeDataProduction'
    }
}