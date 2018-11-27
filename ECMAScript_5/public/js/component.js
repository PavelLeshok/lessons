$(function() {

    let option = document.getElementById('billType');
  // toggle
 
  $(option).on('change', function(e) {
    e.preventDefault();

    if (option.value === 'zero') {
      flag = false;
      $('.cardAccount').hide();
      $('.savingsAccount').hide();
    } else if(option.value === 'one') {
      flag = true;
      $('.savingsAccount').show('slow');
      $('.cardAccount').hide();
    } else if(option.value === 'two') {
      flag = true;
      $('.savingsAccount').hide();
      $('.cardAccount').show('slow');
    }
  });
});