// calculate age
function calculateAge() {
    const dobString = document.getElementById("dob").value;
    const dob = new Date(dobString);
    const dobYear = dob.getFullYear();
    const dobMonth = dob.getMonth();
    const dobDate = dob.getDate();
    if (isNaN(dobYear) || isNaN(dobMonth) || isNaN(dobDate)) {
        document.getElementById("age").innerHTML = "Please enter a valid date of birth";
        return;
    }
    const today = new Date();
    const todayYear = today.getFullYear();
    const todayMonth = today.getMonth();
    const todayDate = today.getDate();
    let year = todayYear - dobYear;
    if (year < 0) {
        document.getElementById("age").innerHTML = "Please enter a valid date of birth";
        return;
    }
    if (todayMonth < dobMonth || (todayMonth === dobMonth && todayDate < dobDate)) {
        year--;
    }
    let month = todayMonth - dobMonth;
    if (month < 0) {
        month += 12;
    }
    let date = todayDate - dobDate;
    if (date < 0) {
        const daysInMonth = new Date(todayYear, todayMonth, 0).getDate();
        date += daysInMonth;
        month--;
    }
    document.getElementById("age").innerHTML = `${year} years ${month} months ${date} days`;
}
