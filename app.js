const accordian = document.getElementsByClassName("contentBx");

for(var i=0; i<accordian.length; i++){
    accordian[i].addEventListener('click', function(){
        this.classList.toggle('active');
    })
}