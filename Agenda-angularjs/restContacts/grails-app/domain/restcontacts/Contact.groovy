package restcontacts

import grails.rest.*
import restcontacts.Operadora

class Contact {

    String serial
    String nome
    String telefone
    Date date
    Operadora operadora


    static constraints = {
    }
}
