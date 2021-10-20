# USERS ROUTE DOCUMENTATION

## USER ROUTE SIGN UP REQUEST

### REQUEST (POST)

#### Endpoint
 
     /user/sign_up

#### Headers


```json
    { 
        "Content-Type":"application/json",
        "Accept":"application/json",
        "body": {
            "name": "JOHN DOE",
            "email": "johndoe@gmail.com",
            "phone": "phone number",
            "password": "password",
        }
    }
```

### Response

#### Success

    // code = 200

    {
       ok: true,
       message: "Succesfully created"
    }

#### Fail

    // code = 

    {
       ok: false,
       message: "Error",
    }



## USER ROUTE LOGIN REQUEST

### REQUEST (POST)

#### Endpoint
 
     /user/login

#### Headers


```json
    { 
        "Content-Type":"application/json",
        "Accept":"application/json",
        "body": { 
            "email": "johndoe@gmail.com", 
            "password": "password",
        }
    }
```

### Response

#### Success

    // code = 200

    {
       ok: true,
       message: "OK",
       data: {
           token
       }
    }

#### Fail

    // code = 

    {
       ok: false,
       message: "Error",
    }