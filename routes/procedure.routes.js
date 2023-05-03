const procedureController = require('../controllers/procedure.controller')

module.exports = [
    {
        method: 'GET',
        path: '/procedure',
        handler: procedureController.list
    },
    {
        method: 'POST', 
        path: '/procedure',
        handler: procedureController.create
    },
    {
        method: 'DELETE', 
        path: '/procedure/{procedureId}',
        handler: procedureController.remove
    },
    {
        method: 'GET',
        path: '/procedure/{procedureId}',
        handler: procedureController.getProcedureById
    }
]