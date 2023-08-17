var betaCodeCadet = {
    name: 'Natália Nonemacher',
    bootcamp: 'BOOTCAMP PORTO UNITY',
    readyForWorkshop: true,
    whatNow: ['Eloquent Javascript', 'Codecademy', 'MDN JavaScript Tutorial', 'Google it']
  };
  
  var messages = [
    'Top props && mad respect, <Beta Code Cadet> ' + betaCodeCadet.name,
    'Hard work, attention to detail && unconditional resilience have taken you this far, one step away from becoming a full-fledged <Code Cadet> in ' + betaCodeCadet.bootcamp,
    'Now... Do you think you have what it takes to ace it at the feared workshop stage?! I do. // Providing, of course, you continue to study && practice everyday until we finally meet! < ;) / >'
  ];
  
  function celebrate() {
    
    for (var index = 0; index < messages.length; index++) {
      console.log(messages[index]);
    }
      
  }
  
  celebrate();