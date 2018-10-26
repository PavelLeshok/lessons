
document.body.onload = function(){
    if( document.getElementById('billType').value === 'zero' ){
        document.getElementById('cardType').setAttribute('disabled', 'true');
        document.getElementById('currencyType').setAttribute('disabled', 'true');
        document.getElementById('percentValue').setAttribute('disabled', 'true');
        document.getElementById('withdrawalDate').setAttribute('disabled', 'true');
    }
}
function change(){
    if( document.getElementById('billType').value === 'one' ){
        document.getElementById('percentValue').setAttribute('disabled', 'true');
        document.getElementById('withdrawalDate').setAttribute('disabled', 'true');
        document.getElementById('cardType').removeAttribute('disabled');
        document.getElementById('currencyType').removeAttribute('disabled');  
    }else if (document.getElementById('billType').value === 'two'){
        document.getElementById('percentValue').removeAttribute('disabled');
        document.getElementById('withdrawalDate').removeAttribute('disabled');
        document.getElementById('cardType').setAttribute('disabled', 'true');
        document.getElementById('currencyType').setAttribute('disabled', 'true');
    }else if(document.getElementById('billType').value === 'zero'){
        document.getElementById('cardType').setAttribute('disabled', 'true');
        document.getElementById('currencyType').setAttribute('disabled', 'true');
        document.getElementById('percentValue').setAttribute('disabled', 'true');
        document.getElementById('withdrawalDate').setAttribute('disabled', 'true');
}

}
document.getElementById('billType').addEventListener("change", change)







        



function Bill(number,/* pin, balance, createDate, userName, userSurname, passportID */){
 this.number = number;
 
 
 /*
 this.createDate = createDate;
 this.userName = userName;
 this.userSurname = userSurname;
 this.passportID = passportID;
 this.balance = balance; */
 
 let pinCode = function(){
    return Math.floor(Math.random() * (9999 - 1111))
};
this.pin = pinCode();
 Bill.counter++;

}


Bill.counter = 0;
Bill.getCount = function(){
    return counter
}

let bill = new Bill(123);
console.log(bill.pin)
let bill1 = new Bill(234);
console.log(bill1.pin)
let bill2 = new Bill(334);



console.log(bill2.pin)



















