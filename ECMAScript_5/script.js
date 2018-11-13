function change(){
    let html;
    if( document.getElementById('billType').value === 'zero' ){
        html = ``;
    } else if (document.getElementById('billType').value === 'one'){
        html = ` <div class="menu">
        <select name="cardType" id="cardType">
            <option value="zero" selected>Выберите тип карты</option>
            <option value="one">Visa</option>
            <option value="two">Master Card</option>
            <option value="three">Пуховичи Card</option>
        </select>
    </div>
    <div class="menu" >
        <select name="currencyType" id="currencyType">
            <option value="zero" selected>Выберите тип валюты</option>
            <option value="one" >USD</option>
            <option value="two">Euro</option>
            <option value="three">Рупии</option>
            <option value="four">Бундесшилинги</option>
        </select>
    </div>`
    } else if(document.getElementById('billType').value === 'two'){
        html = `  <div class="menu" > 
        <select name="percentValue" id="percentValue"> 
            <option value="zero" selected>Выберите размер процента</option> 
            <option value="one">1 %</option> 
            <option value="two">2%</option> 
            <option value="three">5%</option> 
            <option value="four">10%</option> 
        </select> 
    </div>
    <div class="menu" > 
        <select name="depositTerm" id="depositTerm">
            <option value="zero" selected disabled>Выберите срок вклада</option> 
            <option value="one">Месяц</option> 
            <option value="two">Пол года</option> 
            <option value="three">Год</option> 
            <option value="four">Пять лет</option> 
        </select> 
    </div>`
    }
    document.querySelector('.changer').innerHTML = html;  
}

document.getElementById('billType').addEventListener('change', change);

class Bill{
    constructor(userName, userSurname, passportID){
        this.number = ++Bill.counter;
        this.userName = userName;
        this.userSurname = userSurname;
        this.passportID = passportID;
        this.pin = function(){
            return Math.floor(Math.random() * (9999 - 1111) + 1111);
        }
    }

    
    

    get date(){
        let date = new Date();
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    };
    set name(name){
        if(name.match(/[0-9]/) || name === ""){
            throw('Невалидное имя')
        } else {
            this.userName = name
        }
    }
    get name(){
        return this.userName
    }
    set surname(surname){
        if(surname.match(/[0-9]/) || surname === ""){
            throw('Невалидная фамилия')
        } else {
            this.userSurname = surname
        }
    }
    get surname(){
        return this.userSurname
    }
    set ID(passport){
        if(passport.length < 9){
            throw('Проверьте введенные данные')
        } else {
            this.passportID = passport
        }
    }
    get ID(){
        return this.passportID
    }
}

Bill.counter = 0;
Bill.getCount = function(){
    return counter;
}




class CalcBill extends Bill{
    constructor(userName, userSurname, passportID, cardType, currencyType){
        super(userName, userSurname, passportID);
        this.cardType = cardType;
        this.currencyType = currencyType;
    }
}


class AccumBill extends Bill{
    constructor(userName, userSurname, passportID, percentValue, depositTerm){
        super(userName, userSurname, passportID)
        this.percentValue = percentValue;
        this.depositTerm = depositTerm;
    }
}

let qwe = new CalcBill('Pit', 'Bred', 123, 'qwe', "asd");
let qwe2 = new CalcBill('Pit', 'Bred', 123, 'qwe', "asd");
let qwe3 = new CalcBill('Pit', 'Bred', 123, 'qwe', "asd");

console.log(qwe.pin);
console.log(qwe.pin);
console.log(qwe2);
console.log(qwe3);


































