package restcontacts

class BootStrap {

    def init = { servletContext ->

                def vivo = new Operadora(nome: 'Vivo', categoria: "9999999", codigo: "32", preco: 1).save()
                println(vivo.getClass())
                println(vivo)

                def contatoUm = new Contact().save()
            def contacts = [
                [nome: 'clean', telefone: "9999999", operadora: vivo, date: new Date()]
//                [nome: ' the ', telefone: "9999999", date: new Date()],
//                [nome: '  house', telefone: "9999999", date: new Date()]
                ].each { new Contact(nome: it.nome, telefone: it.telefone, operadora: it.operadora, date: it.date).save() }
                println(contacts)
                println(contacts[0].operadora.nome)


    }
    def destroy = {
    }
}
