
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







        



function Bill(userName, userSurname, passportID){
 this.number = ++Bill.counter;
 this.pin = (function(){
    return Math.floor(Math.random() * (9999 - 1111) + 1111);
})();
 this.date = (function(){
    let date = new Date();
     return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
 })();
this.userName = userName;
this.userSurname = userSurname;
this.passportID = passportID;
}

Bill.counter = 0;
Bill.getCount = function(){
    return counter;
}


function CalcBill(cardType, currencyType){
    Bill.call(this);
    this.cardType = cardType;
    this.currencyType = currencyType;

}

function AccumBill(percentValue, ){
    Bill.call(this);


}

























