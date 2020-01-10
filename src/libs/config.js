module.exports = {
    database : 'tasks',
    username: '',
    password:'',
    params: {
        dialect: 'sqlite',
        storage: 'tasks-db.sqlite',
        define: {
            underscore: true
        }, 
        operatorsAliases: false
    
    }
}