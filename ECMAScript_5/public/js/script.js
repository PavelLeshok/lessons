class Bill{
    constructor(userName, userSurname, passportID){
        this.number = ++Bill.counter;
        this.userName = userName;
        this.userSurname = userSurname;
        this.passportID = passportID;
        this.pin = (function(){
            return Math.floor(Math.random() * (9999 - 1111) + 1111);
        })();
        this.date = (function(){
            let date = new Date();
            return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
        })();
    }
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




class savingsAccount extends Bill{
    constructor(userName, userSurname, passportID, cardType, currencyType){
        super(userName, userSurname, passportID);
        this.cardType = cardType;
        this.currencyType = currencyType;
    }
}


class cardAccount extends Bill{
    constructor(userName, userSurname, passportID, percentValue, depositTerm){
        super(userName, userSurname, passportID)
        this.percentValue = percentValue;
        this.depositTerm = depositTerm;
    }
}



































