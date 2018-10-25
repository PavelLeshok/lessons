
document.body.onload = function(){
    if( document.getElementById('billType').value === 'one' ){
    document.getElementById('percentValue').setAttribute('disabled', 'true');
    document.getElementById('withdrawalDate').setAttribute('disabled', 'true');
    }
}
        



function Bill(number, pin, balance, createDate, userName, userSurname, passportID ){
 this.number = number;
 this.pin = pin;
 this.createDate = createDate;
 this.userName = userName;
 this.userSurname = userSurname;
 this.passportID = passportID;
 this.balance = balance;

}











document.getElementById('billType').onchange = function(){
   if( document.getElementById('billType').value === 'one' ){
    document.getElementById('withdrawalDate').setAttribute('disabled', 'true')
       

     
   
  
       
   } else if (document.getElementById('billType').value === 'two'){
       console.log('two')
   }
    

}

