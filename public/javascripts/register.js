function trip(obj, trip) {
    document.getElementById(obj).innerHTML = "<b>" + trip + "</b>";
  }

  //别名必须是中文
  function check_chinesename(obj){
    var chinesename = obj.value.match(/[\u4E00-\u9FA5]+((\u2022)?[\u4E00-\u9FA5]+)+/i);
    obj.value = chinesename===null?'请输入合法的中文姓名': chinesename[0];
  }

  function checkSex() {
    var sexNum = document.getElementsByName("sex");
    var sex = "";
    for (let i = 0; i < sexNum.length; ++i) {
      if (sexNum[i].checked) {
        sex = sexNum[i];
      }

    }
    if (sex == "") {
      trip("sex_trip", "ERROR!!");
      return false;
    } else {
      trip("sex_trip", "OK!!");
    }
  }

  function checkHobby() {
    var hobbyNum = document.getElementsByName("hobby");
    var hobby = "";
    for (let i = 0; i < hobbyNum.length; ++i) {
      if (hobbyNum[i].checked) {
        hobby = hobbyNum[i];
      }
    }
    if (hobby == "") {
      trip("hobby_trip", "ERROR!!");
      return false;
    } else {
      trip("hobby_trip", "OK!!");

    }
  }

  function checkSelect() {
    var myselect = document.getElementById("userType");
    var index = myselect.selectedIndex;
    var checkValue = myselect.options[index].value;
    if (checkValue == 0) {
      trip("type_trip", "请选择!!");
      return false;
    } else {
      trip("type_trip", "OK!!");
    }
  }

  function checkForm() {
    checkSelect();
    checkHobby();
    checkSex();

    var trip = document.getElementsByName("em");
    var tripV = trip.innerHTML();

    var userNname = document.getElementById("userNname");
    var uName = userNname.value;
    if (uName.length < 1 || uName.length > 10) {
      trip("name_trip", "账号长度为1-10位!!");
      return false;
    } else {
      trip("name_trip", "OK!!");

    }

    var password = document.getElementById("password");
    var userPass = password.value;
    if (userPass.length < 6) {
      trip("password_trip", "密码要>6位!!");
      return false;
    } else {
      trip("password_trip", "OK!!");
    }


    var surePassword = document.getElementById("surePassword");
    var surePass = surePassword.value;
    if (userPass != surePass) {
      trip("surePassword_trip", "两次密码不一致!!");
      return false;
    }

  function submitT() {
    if (checkForm()) {
      return true;
    } else {
      return false;
    }
  }
  }