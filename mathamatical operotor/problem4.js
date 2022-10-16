let user1 = "hello@gmail.com";
let pass1 = "123456";

let user2 = "hello@gmail.com";
let pass2 = "123456";

if(user1 == user2){
  if(pass1 == pass2){
    console.log("Login Sucessfull");
  }
  else{
    console.log("incorrect password");
  }
}
else{
  console.log("Wrong credentials");
}