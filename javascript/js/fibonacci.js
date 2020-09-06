function fibonacci(fday, lday, label) {

    "use strict";
    var a = [fday, lday],
        i = a.length;
    while (i < 10) {
        a.push(a[i - 1] + a[i - 2]);
        i += 1;
    }

    return "<div>" + label + a.join(", ") + "</div>";
}

function getTimestamp(day) {
    var dateTimeParts = day.split(' '),
        timeParts = dateTimeParts[1].split(':'),
        dateParts = dateTimeParts[0].split('-'),
        date;

    date = new Date(dateParts[0], parseInt(dateParts[1], 10) - 1, dateParts[1], timeParts[0], timeParts[1], timeParts[2]);

    return date.getTime();
}

window.onload = function() {

    var fibForm = document.getElementById('fib-form');
    fibForm.onsubmit = function(e) {
        e.preventDefault();
        var fday = getTimestamp(document.getElementById('fday').value);
        var lday = getTimestamp(document.getElementById('lday').value);

        var date = new Date(),
            y = date.getFullYear(),
            m = date.getMonth();
        var fdaythismonth = new Date(y, m, 1).getTime();
        var ldaythismonth = new Date(y, m + 1, 0).getTime();

        var fdaythisyear = new Date(new Date().getFullYear(), 0, 1).getTime();
        var ldaythisyear = new Date(new Date().getFullYear(), 11, 31).getTime();

        var firstcase = fibonacci(fdaythismonth, ldaythismonth, "First Output: ");
        var secondcase = fibonacci(fdaythisyear, ldaythisyear, "Second Output: ");
        var thirdcase = fibonacci(fday, lday, "Third Output: ");
        console.log(fdaythismonth);
        console.log(ldaythismonth);
        console.log(fday);
        console.log(lday);
        console.log(fdaythisyear);
        console.log(ldaythisyear);
        console.log(thirdcase);
        console.log(secondcase);
        console.log(firstcase);
        document.getElementById("first-output").innerHTML = firstcase;
        document.getElementById("second-output").innerHTML = secondcase;
        document.getElementById("thrid-output").innerHTML = thirdcase;
    };
    // your code 
};