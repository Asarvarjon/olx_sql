# HOME ROUTE DOCUMENTATION

## HOME ROUTE GET REQUEST

### REQUEST

#### Endpoint

   GET /

#### Headers


```json
    {
        "Authorization": TOKEN
        "Content-Type":"application/json"
        "Accept":"application/json"
    }
```

### Response

#### Success

    // code = 200

    {
       ok: true,
       message: "OK"
    }

#### Fail

    // code = 403

    {
       ok: false,
       message: "Token is not defined || Token doesn't match",
    }