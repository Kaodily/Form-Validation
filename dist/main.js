$("form").submit(function (e) {
  e.preventDefault();
  let firstName = $("input:first").val();
  let lastName = $(".lastName").val();
  let email = $(".email").val();
    let password = $(".password").val();
    let reg = /^(?=.*\d).{4,8}$/

  if (firstName.length > 0) {
      $(".firstName_error").text("First Name is in order").css({ "color": "green", 'visibility': 'visible' });
      $('.img1').css('display','none')
  } else {
      $(".firstName_error").text('First Name cannot be empty').css({"color":"red", 'visibility':'visible'});
      $('.img1').css('display','block')
    }

 if (lastName.length > 0) {
      $(".lastName_error").text("Last Name is in  order").css({"color":"green", 'visibility':'visible'});
      $('.img2').css('display','none')
 } else {
      $(".lastName_error").text('Last Name cannot be empty').css({"color":"red", 'visibility':'visible'});
      $('.img2').css('display','block')
    }
    if (!email.includes('@')) {
        $(".email_error").text('Looks like this is not an email').css({"color":"red", 'visibility':'visible'});
        $('.img3').css('display','block')
    } else {
        $(".email_error").text('Email is in the right order').css({"color":"green", 'visibility':'visible'});
        $('.img3').css('display','none')
    }
    if (password == '') {
        $(".password_error").text('Password cannot be empty').css({"color":"red", 'visibility':'visible'});
        $('.img4').css('display','block')
    }
    else if (!password.match(reg)) {
        $(".password_error").text('Password is not strong enough').css({"color":"red", 'visibility':'visible'});
        $('.img4').css('display','block')
    } else {
        $(".password_error").text('Password is in the right order').css({"color":"green", 'visibility':'visible'});
        $('.img4').css('display','none')
    }
});
$('.submit').click(function () {
    $('form').submit()
})
