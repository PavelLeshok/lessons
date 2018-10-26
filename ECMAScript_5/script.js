
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







        



function Bill(/*number, pin, balance, createDate, userName, userSurname, passportID */){
 this.number = ++Bill.counter;
 this.pin = (function(){
    return Math.floor(Math.random() * (9999 - 1111) + 1111)
})();
 this.date = (function(){
    let date = new Date();
     return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
 })();
 /*
 this.createDate = createDate;
 this.userName = userName;
 this.userSurname = userSurname;
 this.passportID = passportID;
 this.balance = balance; */
 



}

Bill.counter = 0;
Bill.getCount = function(){
    return counter
}




let bill = new Bill();
let bill1 = new Bill();
let bill2 = new Bill();

console.log(bill.date);
console.log(bill1.pin);

console.log(bill.number);
console.log(bill1.number)

















