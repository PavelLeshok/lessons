let option = document.getElementById('billType');
function change(){
    let html;
    if( option.value === 'zero' ){
        html = ``;
    } else if (option.value === 'one'){
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
    } else if(option.value === 'two'){
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
};
option.addEventListener('change', change);