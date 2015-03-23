//add script here

function tipCalculate (){

var totalBill = document.getElementById('bill').value;
console.log(totalBill);

var percBtns = document.getElementsByClassName('tip-btn');
console.log(percBtns);

for ( var i=0; i<percBtns.length; i++)
{
	if(percBtns[i].checked) {
		var tipPercent = percBtns[i].value; 
	}
}

if (!isNaN(totalBill)){
	
var tipTotal = totalBill * tipPercent;

var tipBox = document.getElementById('tipamount');

tipBox.innerHTML = '$' + tipTotal;}

else{
alert('Please enter numbers only');
resetPage();
}}

function resetPage(){
  document.getElementById('bill').value = '';

  var percBtns = document.getElementsByClassName('tip-btn');
  for(var i=0; i < percBtns.length; i++){
    percBtns[i].checked = false;
  }

  var tipBox = document.getElementById('tipamount');
  tipBox.innerHTML = '$0.00';
}







