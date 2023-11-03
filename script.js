
document.getElementById('button').addEventListener('click', function() {
    var deadline = new Date(document.querySelector('input[type="datetime-local"]').value).getTime();
    var countdown = document.getElementById('showTime').querySelector('ul');

    var x = setInterval(function() {
        var now = new Date().getTime();
        var timeLeft = deadline - now;

        if (timeLeft <= 0) {
            clearInterval(x);
            countdown.innerHTML = '<li style="font-size: 24px;">NA</li>'.repeat(4);
        } else {
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

            countdown.innerHTML = ''; // Clear the existing content

            // Create li elements and append them to ul
            var units = [days, hours, minutes, seconds];
            units.forEach(unit => {
                var li = document.createElement('li');
                li.textContent = unit;
                countdown.appendChild(li);
            });
        }
    }, 1000);
});

