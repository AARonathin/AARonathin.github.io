console.log("Hello World that here");
document.addEventListener('DOMContentLoaded', function () {
    var currentYear = new Date().getFullYear();
    document.querySelector('footer p').innerText = 'Copyright Aaron Trylinski ' + currentYear;
    
    var alertButton = document.getElementById('btn-alert'); 
    
    var defultText = 'Hover me';

    var hoverText ='Click me!';

    alertButton.innerText = defultText;

    alertButton.addEventListener('mouseover' , function () {
        alertButton.innerText =hoverText;
    });
    
    alertButton.addEventListener('mouseleave' , function () {
        alertButton.innerText = defultText;
      });

    alertButton.addEventListener('click', function () {
        alert('Button clicked!');
        });

    var Counterbutton = document.getElementById('btn-counter');
    let count = 1;
    
    document.getElementById('cnt-text').innerText = count;
    
    Counterbutton.style.color = count % 2 === 0 ? 'blue' : 'red';

    Counterbutton.onclick = () => {
    count = count + 1;
        document.getElementById('cnt-text').innerHTML = count;
    
        var isEven = count % 2 === 0;
        console.log('Count:', count, 'Is Even:', isEven);

        Counterbutton.style.color = isEven ? 'blue' : 'red';
    };
    
    function populateNumbersList() {
        var numbersList = document.getElementById('numbers');
    
        for (var i = 0; i < 100; i++) {
            var listItem = document.createElement('li');
            listItem.textContent = i % 2 === 0 ? 'odd' : 'even';
            numbersList.appendChild(listItem);
        }
    }
    populateNumbersList();

});

  //forgot to commit to github as I progressed so not sure if there will be any changes showing in the repository. Sorry about that 
  