var currentdateobj = document.querySelector('#currentdate');
var contactloaddate = new Date();
currentdateobj.value = contactloaddate.toLocaleDateString('en-us');