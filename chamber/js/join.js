var currentdateobj = document.querySelector('#currentdate');
var joinloaddate = new Date();
currentdateobj.value = joinloaddate.toLocaleDateString('en-us');