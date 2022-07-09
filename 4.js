let btn = document.getElementById('btn')

btn.addEventListener('mouseover' ,(e)=>{
    e.target.style.backgroundColor = 'black'
    e.target.style.color = 'white'
    e.target.style.fontSize = 'x-large'
    e.target.style.paddingLeft = '20px'
    e.target.style.paddingRight = '20px'
    e.target.style.paddingTop = '5px'
    e.target.style.paddingBottom = '5px'
})

btn.addEventListener('mouseout' ,(e)=>{
    e.target.style.backgroundColor = 'blanchedalmond'
    e.target.style.color = 'red'
    e.target.style.fontSize = 'large'
    e.target.style.paddingLeft = '10px'
    e.target.style.paddingRight = '10px'
    e.target.style.paddingTop = '1px'
    e.target.style.paddingBottom = '1px'
})

btn.onclick=()=>{
    const Fname     = document.getElementById('fname')
    const Lname = document.getElementById('lname')
    const Db = document.getElementById('Birthday_Day')
    const Mb = document.getElementById('Birthday_Month')
    const Yb = document.getElementById('Birthday_Year')
    const Email = document.getElementById('email')
    const Fnum = document.getElementById('Mobile_Number')
    const Snum = document.getElementById('student_Number')
    const Gender = document.getElementById('gender')
    const Address = document.getElementById('Address')
    //-------------------------------------------------
    const out_name     = document.getElementById('out_name')
    const out_birthday = document.getElementById('out_birthday')
    const out_Email = document.getElementById('out_email')
    const out_Fnum = document.getElementById('out_phone_number')
    const out_Snum = document.getElementById('out_student_number')
    const out_Gender = document.getElementById('out_gender')
    const out_Address = document.getElementById('out_address')
    //-------------------------------------------------
    out_name.innerHTML = "<h2>" + "من" + ' ' + Fname.value + ' ' + ' ' + Lname.value + ' ' + "هستم</h2>"
    out_birthday.innerHTML = "<h3>" + "متولد " + Db.value + ' ' + Mb.value + ' ' + Yb.value + ' ' + "</h3>"
    out_Email.innerHTML =  "<h3>" + "ایمیل: " + Email.value + "</h3>"
    out_Fnum.innerHTML =  "<h3>" + "تلفن همراه: " + Fnum.value + "</h3>"
    out_Snum.innerHTML =  "<h3>" + "شماره دانشجویی: " + Snum.value + "</h3>"
    out_Gender.innerHTML = "<h3>" + "جنسیت: " + Gender.value + "</h3>"
    out_Address.innerHTML = "<p>" + "آدرس: " +  Address.value + "</p>"
    //-------------------------------------------------
    return false;
}