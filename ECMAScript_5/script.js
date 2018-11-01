


function change(){
    let html;
    if( document.getElementById('billType').value === 'zero' ){
        html = ``;
    } else if (document.getElementById('billType').value === 'one'){
        html = ` <div class="menu">
        <span>Тип карты</span>
        <select name="cardType" id="cardType">
            <option value="one" selected>Visa</option>
            <option value="two">Master Card</option>
            <option value="three">Пуховичи Card</option>
        </select>
    </div>
    <div class="menu" >
        <span>Валюта</span>
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
        <span>Процент</span> 
        <select name="percentValue" id="percentValue"> 
            <option value="zero" selected>Выберите размер процента</option> 
            <option value="one">1 %</option> 
            <option value="two">2%</option> 
            <option value="three">5%</option> 
            <option value="four">10%</option> 
        </select> 
    </div>
    <div class="menu" > 
        <span>Срок вклада</span> 
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


    



function Bill(){
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

    this.setName = function(name){
        if(name.match(/[0-9]/) || name === ""){
            throw('Невалидное имя')
        } else {
            this.userName = name
        }
    }
    this.getName = function(){
        return this.userName
    }
    this.setSurname = function(surname){
        if(surname.match(/[0-9]/) || surname === ""){
            throw('Невалидная фамилия')
        } else {
            this.userSurname = surname
        }
    }
    this.getName = function(){
        return this.userSurname
    }
    this.setID = function(passport){
        if(passport.length < 9){
            throw('Проверьте введенные данные')
        } else {
            this.passportID = passport
        }
    }
    this.getID = function(){
        return this.passportID
    }
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

function AccumBill(percentValue, depositTerm){
    Bill.call(this);
    this.percentValue = percentValue;
    this.depositTerm = depositTerm;

}







let arrCalcBill = [];
let arrAccumBill = [];
function newObj(){
   if(document.getElementById('billType').value === 'one'){
        var obj = new CalcBill(12, 45);
        obj.userName = document.getElementById('userName').value;
        obj.userSurname = document.getElementById('userSurname').value;
        obj.passportID = document.getElementById('passportID').value;
        
    }
   arrCalcBill.push(obj);
   console.log(arr)  
}

    console.log(arr)    

document.getElementById('save').addEventListener("click", newObj)

























