package restcontacts

class BootStrap {

    def init = { servletContext ->

                def vivo = new Operadora(nome: 'Vivo', categoria: "Celular", codigo: "31", preco: 1).save()
                def tim = new Operadora(nome: 'Tim', categoria: "Celular", codigo: "32", preco: 1).save()
                def claro = new Operadora(nome: 'Claro', categoria: "Celular", codigo: "33", preco: 1).save()
                def embratel = new Operadora(nome: 'Embratel', categoria: "Fixo", codigo: "34", preco: 1).save()
                def telemig = new Operadora(nome: 'Telemig', categoria: "Fixo", codigo: "35", preco: 1).save()

                def contacts = [
                [serial: "abc", nome: 'clean', telefone: "9999999", operadora: vivo, date: new Date()],
                [serial: "def", nome: ' the ', telefone: "9999999", operadora: tim, date: new Date()],
                [serial: "ghi", nome: '  house', telefone: "9999999", operadora: telemig, date: new Date()]
                ].each { new Contact(serial: it.serial, nome: it.nome, telefone: it.telefone, operadora: it.operadora, date: it.date).save() }

    }
    def destroy = {
    }
}
