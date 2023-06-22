const emailRegex =
  /^[a-zA-Z0-9\.-_]+@gmail.com|yahoo.com|hotmail.com|bol.com.br|infnet.edu.br$/;
const resposta = emailRegex.test("_@infnet.edu.br");
console.log(resposta);
