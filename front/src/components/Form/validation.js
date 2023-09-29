export function validateInputs(input, errors) {
    const { name, value } = input;
  
const emailRegex =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
  
    switch (name) {
      case "email":
        emailRegex.test(value) ? (errors = { ...errors, [name]: "" }) : (errors = {...errors,[name]:
          "Come on, Morty, I don't have all day! You need to enter a valid email with @ and all that stuff."
          });
          break;

      


      case "password":
        passwordRegex.test(value) ? (errors = { ...errors, [name]: "" }) : (errors = {...errors,[name]:"Geez, Morty, how hard can it be to write a password! You must have at least one uppercase letter, one lowercase letter, a number, and 8 characters."
            
        });
        break;
    }
    return errors;
  }
  
  export function validateSubmit(errors) {
    let numberErrors = 0;
    for (const key in errors) {
      if (errors[key].length > 0) numberErrors++;
    }
    return numberErrors;
  }
  