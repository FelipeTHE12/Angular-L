package restcontacts


import grails.rest.*
import grails.converters.*

class OperadoraController extends RestfulController {
    static responseFormats = ['json', 'xml']
    OperadoraController() {
        super(Operadora)
    }
}
