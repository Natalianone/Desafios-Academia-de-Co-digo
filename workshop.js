var terminal = require('terminal'); //require:usaod para importar do Node.js
var toolkit = require('hacker-toolkit');
var accounts = require('blackmarket-accounts');

var splitStore = [];

for (var i = 0; i < accounts.length; i++) {
  var division = accounts[i].split(':');
  var username = division [0];
  var password = division [1];
  
  splitStore.push ({ //add informaçoes da divisão ao array splitStore
    username: username,
    password: password,
  });
}
  for (var i = 0; i < splitStore.length; i++) {
  splitStore[i].password = toolkit.rot13(splitStore[i].password); //13ª letra seguinte do alfabeto
}

 console.log (splitStore);
 
toolkit.bruteForce(terminal, splitStore, function(username, password) { //função passada a outra função como argumento (callback), chamada quando conseguir logar 
    terminal.login(username, password);
    
//espionar o root + extrair arquivos
toolkit.spy(terminal, "root", function(output) { //função callback é definida como anonima e passa direto para toolkit.spy
    var password;   
if (output.includes("password")) {
      password = output.split(" ").pop();
      terminal.logout();
      terminal.login("root", password);
      terminal.printFile("/var/logs/ecorp.txt");
    }
  });
});


