curl -i -X PUT -H "Content-Type: application/json" -d '{"id":1,"date":"2021-04-14T02:07:02Z","telefone":"9999999","nome":"DEPOIS DE DO COMANDO PUT PELO TERMINAL","operadora":{"id":1}}' localhost:8080/contact/1
$ curl -i -X POST -H "Content-Type: application/json" -d '{"title":"Along Came A Spider"}' localhost:8080/contact
curl -i -X DELETE localhost:8080/contact/1

@Secured(['permitAll'])