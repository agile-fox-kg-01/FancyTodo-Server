# FancyTodo-Server

Deploy Here:

[Fancy_TodoServer](http://localhost:3000)

## API Documentation

----
**User Register**
---
  
  * **URL**
   
    /users/register

  * **Method**

    `POST`

  * **Request Headers**

    | key | value | required |
    | :--- | :---: | :---:|
    | Content-Type | application/x-www-form-urlencoded | true |

  * **URL Params**

    none

  * **Data Params**
    
    | key | value | required |
    | :--: | :--: | :--: |
    | first_name | "Nurfiah"| true |
    | last_name | "Idris" | true |
    | email | "nurfiahidris098gmail.com"| true |
    | password | "nurfiah12345" |true |
    | date_of_birth | "09 July 1992" | true |

  * **Success Response**


    * **Code:** 201 CREATED <br />
    **Content:**
    ```json
      {
      "id": 9,
      "first_name": "Nurfiah",
      "last_name": "Idris",
      "email": "nurfiahidris098@gmail.com",
      "password": "$2a$10$OYGYolF/2v7UT9xoSiRXyOWtHexv9d.Jk9xrIzfhmj56xDqq0Xjmu",
      "date_of_birth": "1992-07-08T16:00:00.000Z",
      "updatedAt": "2020-07-06T23:29:58.677Z",
      "createdAt": "2020-07-06T23:29:58.677Z"
      }
      ```
  * **Errors Response**

    * **Code:** 400 BAD REQUEST <br />
      **Content**
      ```json
      {
        "status": 400,
        "error": "email must be unique"
      }
      ```

**User Login**
---
  
  * **URL**
   
    /users/login

  * **Method**

    `POST`

  * **Request Headers**

    | key | value | required |
    | :--- | :---: | :---:|
    | Content-Type | application/x-www-form-urlencoded | true |

  * **URL Params**

    none

  * **Data Params**
    
    | key | value | required |
    | :--: | :--: | :--: |
    | email | "nurfiahidris098gmail.com"| true |
    | password | "nurfiah12345" |true |

  * **Success Response**


    * **Code:** 200 OK <br />
    **Content:**
    ```json
      {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cmZpYWhpZHJpczA5OEBnbWFpbC5jb20iLCJpYXQiOjE1OTQwNzg5NjV9.Q8JSD8HhZqRRjPFahSnqDYfjUIHvjMbaSWICxEk_Hv4"
      }
      ```
  * **Errors Response**

    * **Code:** 400 BAD REQUEST <br />
      **Content**
      ```json
      {
        "status": 400,
        "error": "invalid username/password"
      }
      
      ```


**User Create New Todo**
---

* **URL**

  /todos

* **Method**

  `POST`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |

* **URL Params**

  none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | "Generate Register and Login Route" | true |   
  | description | "Harus diselesaikan hari ini juga sebelum besok nambah tugas lagi yah",| true |   
  | status | true | true |   
  | due_date | 12-07-2021 | true |   

* **Success Response**

  * **Code:** 201 CREATED <br />
    **Content:**
    ```json
    {
    "id":3,
    "title" : "Generate Register and Login Route",
    "description": "Harus diselesaikan hari ini juga sebelum besok nambah tugas lagi yah",
    "status":true,
    "due_date": "2021-12-07T00:00:00.000Z",
    "createdAt": "2020-07-06T06:38:13.913Z",
    "updatedAt": "2020-07-06T09:30:44.848Z"
    }
    ```

* **Error Response**

  * **Code:** 400 BAD REQUEST <br />
    **Content**
    ```json
     {
        "status": 400,
        "error":[ "Title field shouldn't be empty" ]
    }
    ```

    OR

    ```json
    {
        "status": 400,
        "error":[ "Description field shouldn't be empty" ]
    }
    ```

    OR 

    ```json
    {
        "status": 400,
        "error":["Status field shouldn't be empty"]
    }
    ```

    OR

    ```json
    {
        "status": 400,
        "error":["Due_date field shouldn't be empty"]
    }
    ```
    
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {
        "status": 500,
        "error":"internal server error"
    }
    ```
    

**User Request All Todos**
---
* **URL**

  /todos

* **Method**

  `GET`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |

* **URL Params**

  none

* **Data Params**

  none  

* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
    "id":3,
    "title" : "Generate Register and Login Route",
    "description": "Harus diselesaikan hari ini juga sebelum besok nambah tugas lagi yah",
    "status":true,
    "due_date": "2021-12-07T00:00:00.000Z",
    "createdAt": "2020-07-06T06:38:13.913Z",
    "updatedAt": "2020-07-06T09:30:44.848Z"
    }
    ```

* **Error Response**

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
     {
        "status": 500,
        "error":"internal server error"
    }
    ```


**User Request Todo By Id**
---
* **URL**

  /todos/:id

* **Method**

  `GET`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |

* **URL Params**
  ```json
  {
    "id": 3
  }
  ```

* **Data Params**

  none  

* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
    "id":3,
    "title" : "Generate Register and Login Route",
    "description": "Harus diselesaikan hari ini juga sebelum besok nambah tugas lagi yah",
    "status":true,
    "due_date": "2021-12-07T00:00:00.000Z",
    "createdAt": "2020-07-06T06:38:13.913Z",
    "updatedAt": "2020-07-06T09:30:44.848Z"
    }
    ```

* **Error Response**

  * **Code:** 404 NOT FOUND <br />
    **Content**
    ```json
    {
      "status": 404,
      "error": "not found"
    }
    ```


**User Update Todo By Id**
---
* **URL**

  /todos/:id

* **Method**

  `PUT`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |

* **URL Params**
 ```json
  {
    "id": 3
  }
  ```
  
* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | "Generate Register and Login Route", | true |   
  | description | "Harus diselesaikan hari ini juga sebelum besok nambah tugas lagi yah" | true |   
  | status | true | true |   
  | due_date | 12-07-2021| true |   

* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
    "id":3,
    "title" : "Generate Register and Login Route",
    "description": "Harus diselesaikan hari ini juga sebelum besok nambah tugas lagi yah",
    "status":true,
    "due_date": "2021-12-07T00:00:00.000Z",
    "createdAt": "2020-07-06T06:38:13.913Z",
    "updatedAt": "2020-07-06T09:30:44.848Z"
    }
    ```

* **Error Response**

  * **Code:** 400 BAD REQUEST <br />
    **Content**
    ```json
     {
        "status": 400,
        "error":[ "Title field shouldn't be empty" ]
    }
    ```

    OR

    ```json
    {
        "status": 400,
        "error":[ "Description field shouldn't be empty" ]
    }
    ```

    OR 

    ```json
    {
        "status": 400,
        "error":["Status field shouldn't be empty"]
    }
    ```

    OR

    ```json
    {
        "status": 400,
        "error":["Due_date field shouldn't be empty"]
    }
    ```
    
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {
        "status": 500,
        "error":"internal server error"
    }
    ```


**User Delete Todo By Id**
---
* **URL**

  /todos/:id

* **Method**

  `DELETE`

* **Request Headers**

  | key | value | required |
  | :--- | :---: | :---:|
  | Content-Type | application/x-www-form-urlencoded | true |

* **URL Params**
 ```json
  {
    "id": 3
  }
  ```

* **Data Params**

  none

* **Success Response**

  * **Code:** 200 OK <br />
    **Content:**
    ```json
    {
    "id":3,
    "title" : "Generate Register and Login Route",
    "description": "Harus diselesaikan hari ini juga sebelum besok nambah tugas lagi yah",
    "status":true,
    "due_date": "2021-12-07T00:00:00.000Z",
    "createdAt": "2020-07-06T06:38:13.913Z",
    "updatedAt": "2020-07-06T09:30:44.848Z"
    }
    ```

* **Error Response**

  * **Code:** 404 NOT FOUND <br />
    **Content**
    ```json
    {
      "status": 404,
      "error": "not found"
    }
    ```

    
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {
      "status":500,
      "error": "internal server error"
    }
    ```


 **Weather API**
---
  
  * **URL**
   
    /weathers

  * **Method**

    `GET`

  * **Request Headers**

    none

  * **URL Params**

    none

  * **Data Params**
    
    none

  * **Success Response**

    * **Code:** 201 CREATED <br />
    **Content:**
    ```string
     The weather now in Indonesia is about 27 Degrees Celcius
    ```
  * **Errors Response**

    * **Code:** 404 BAD REQUEST <br />
      **Content**
      ```json
      {
        "status": 404,
        "error": "not found"
      }
      ```
 **Quotes API**
---
  
  * **URL**
   
    /quote

  * **Method**

    `GET`
    
    
**User Google Login**
---
  
  * **URL**
   
    /users/login/google

  * **Method**

    `POST`

  * **Request Headers**

    | key | value | required |
    | :--- | :---: | :---:|
    | Content-Type | application/x-www-form-urlencoded | true |

  * **URL Params**

    none

  * **Data Params**
    
    | key | value | required |
    | :--: | :--: | :--: |
    | email | "nurfiahidris098gmail.com"| true |
    | password | "nurfiah12345" |true |

  * **Success Response**


    * **Code:** 200 OK <br />
    **Content:**
    ```json
      {
       "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cmZpYWhpZHJpczA5OEBnbWFpbC5jb20iLCJpYXQiOjE1OTQwNzg5NjV9.Q8JSD8HhZqRRjPFahSnqDYfjUIHvjMbaSWICxEk_Hv4"
      }
      ```
  * **Errors Response**

    * **Code:** 400 BAD REQUEST <br />
      **Content**
      ```json
      {
        "status": 400,
        "error": "invalid username/password"
      }
      
      ```
    OR
    * **Code:** 500 INTERNAL SERVER ORDER <br />
      **Content**

       ```json
      {
        "status": 500,
        "error":"internal server error"
      }
      ```
