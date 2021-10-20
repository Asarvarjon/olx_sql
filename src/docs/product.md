# Product ROUTE DOCUMENTATION

## Product Details GET REQUEST

### REQUEST (GET)

#### Endpoint
 
     /product/details: id

#### Headers


```json
    { 
        "Content-Type":"application/json",
        "Accept":"application/json", 
        "Authorization": TOKEN
    }
```

### Response

#### Success

    // code = 200

    {
       ok: true,
       message: "OK",
       data: {
            user, 
            detail, 
            adsOwner, 
       }
    }

#### Fail

    // code = 

    {
       ok: false,
       message: "Error",
    }



## PRODUCT ROUTE  ADD CATEGORY POST REQUEST

### REQUEST (POST)

#### Endpoint
 
     /product/add_category

#### Headers


```json
    { 
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": TOKEN,
        "body": {
            "name": "category name", 
            "photo": "photo"
        }
    }
```

### Response

#### Success

    // code = 200

    {
       ok: true,
       message: "Category succesfully created "
    }

#### Fail

    // code = 

    {
       ok: false,
       message: "Error",
    }




## PRODUCT ROUTE  ADD PRODUCT POST REQUEST

### REQUEST (POST)

#### Endpoint
 
     /product/add_product

#### Headers


```json
    { 
        "Content-Type":"application/json",
        "Accept":"application/json",
        "Authorization": TOKEN,
        "body": {
            "name": "product name", 
            "content": "product desc", 
            "phone": "Owner phone number",
            "category": "category_id",
            "price": "product price"
        }
    }
```

### Response

#### Success

    // code = 200

    {
       ok: true,
       message: "Product succesfully added!"
    }

#### Fail

    // code = 

    {
       ok: false,
       message: "Error",
    }
