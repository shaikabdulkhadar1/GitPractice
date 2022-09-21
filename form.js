var fname, lname, contact, add, gender;
var uni, clgname, subj, yop, cgpa, sdate, edate;

function form1submit(){
    alert('Saved Successfully');
    fname = document.getElementById('fname').value;
    lname = document.getElementsById('lname').value;
    contact = document.getElementById('contact').value;
    add = document.getElementById('address').value;
    gender = $("input[type=radio][name=gender]:checked").val(); 
}

function sliderChange(val) {
    document.getElementById('sliderresult').innerHTML = document.getElementById('myslider').value+" CGPA";
}

function form2submit() {
    window.alert('Saved Successfully');
    var e = document.getElementById('university').value;
    uni = e.options[e.selectedIndex].text;
    clgname = document.getElementById('cname');
    var d = document.getElementById('qualif').value;
    subj = d.options[d.selectedIndex].text;
    yop = document.getElementById('yop').value;
    cgpa = document.getElementById('myslider').value;
    sdate = document.getElementById('sdate').value;
    edate = document.getElementById('edate').value;
}

function finalform() {
    // var firstname = fname;
    document.getElementById('firstname').innerHTML = fname;
}