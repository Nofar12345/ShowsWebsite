
function f() {//פונקציה לבדיקה אם המשתמש קיים במערך של המשתמשים
    let arrayUsers = ['morsef31@gmail.com', '12345678', 'alma65@gmail.com', '6712345','nofar08899@gmail.com','3050120',
        'alitbenhamo@gmail.com','3421761'];
    let message = "The data is incorrect"; 
     //הודעה ברירת מחדל כאשר הנתונים שגויים
    for (let i = 0; i < arrayUsers.length; i += 2) {//לולאה שבודקת אם המשתמש והסיסמא קיימים במערך
        if (document.getElementById("email").value == arrayUsers[i] && document.getElementById("pass").value == arrayUsers[i + 1]) {
            //בדיקת אימייל וסיסמא
            message = "The data is correct";//אם הנתונים נכונים
            window.location.href = "p4.html";
            break; 
        }
    }
    alert(message);//הצגת הודעה למשתמש
}

//פונקציה לניקוי השדות של האימייל והסיסמא
function Clear() {
    document.getElementById("email").value = '';
    document.getElementById("pass").value = '';
}
function Clear1() {
    document.getElementById("email").value = '';
    document.getElementById("pass").value = '';
    document.getElementById("u").value = '';
    document.getElementById("v").value = '';
}

//פונקציה לבדיקת תקינות אימייל
function validateEmail() {
    var email = document.getElementById("email").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.(com|org)$/i;//תווים ואותיות לאימייל תקין

    if (emailPattern.test(email)) {
        alert("Valid email address!");//אימייל תקין
        return true;
    } else {
        alert("Invalid email address. Please enter a valid email address");//אימייל לא תקין
        return false;
    }
}
//פונקציה לבדיקת תקינות הנתונים והוספת המשתמש למערך
function validate() {
    var validateEmail1 = validateEmail();
    var validatePassword1 = validatePassword();
    if(validateEmail1==true && validatePassword1==true){
        alert("The form is correct");
        arrayUsers.push(document.getElementById("email").value,document.getElementById("pass").value);

    }
}
//פונקציה לבדיקת התאמה בין הסיסמא לבין האימות
function validatePassword() {
    var password = document.getElementById("pass").value;
    var confirmPassword = document.getElementById("v").value;
    if(password == confirmPassword) {
        alert("Passwords match");
        return true;
    }
    else {
        alert("Passwords don't match");
        return false;
    }

}







