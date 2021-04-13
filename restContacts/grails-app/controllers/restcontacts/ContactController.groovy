package restcontacts


import grails.rest.*
import grails.converters.*
import restcontacts.Operadora

class ContactController extends RestfulController {
    static responseFormats = ['json', 'xml']
    ContactController() {
        super(Contact)
    }
}
