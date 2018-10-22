let name = prompt('What is your name?');
if(name.match(/[0-9]/) || name === ""){
    alert(name.split("").join("-").toUpperCase());
} else {
    alert(name.split("").reverse().join(""));
}