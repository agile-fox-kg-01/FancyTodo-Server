# FancyTodo-Server

  Deploy Here:

[FancyTodo_Server](http://localhost:3000)

## API Documentation

  **Create Todo**
----
  Make new todo 

* **URL**

  /todos/

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | jsonwebtoken | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | STRING | true |
  | description | STRING | true |
  | status | STRING | true |
  | due_date | DATE | true |
  | place | STRING | false |
  | UserId | INTEGER | true |


* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 1,
    "title": "Tugas Pertama",
    "description": "Mengerjakan Dokumentasi API",
    "status": "On Progres",
    "due_date": "2020-07-08T17:00:00.000Z",
    "UserId": 1,
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : ["Field Title Cannot Be Empty!"] }
        ```

        OR

        ```json
        { "error" : ["Field Title Null!"] }
        ```

        OR

        ```json
        { "error" : ["Field Description Cannot Be Empty"] }
        ```

        OR

        ```json
        { "error" : ["Field Status Cannot Be Empty"] }
        ```
        OR

        ```json
        { "error" : ["Field Due Date Cannot Be Empty"] }
        ```
        OR

        ```json
        { "error" : ["Field Due Date Invalid Format"] }
        ```

    OR

    * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "You have Unauthorized token!" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```


----
  **Get Todos**
----
  Get all todo 

* **URL**

  /todos/

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | jsonwebtoken | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | UserId | INTEGER | true |


* **Success Response:**
  
  
  * **Code:** 200 OK <br/>
    **Content:** 
    ```json
    [
      {
          "id": 31,
          "title": "Meeting with timothy",
          "description": "Harus tepat waktu, jam 9.45 susah di tempat",
          "status": "Penting",
          "due_date": "2020-07-12T00:00:00.000Z",
          "place": "Miss Bee Providore. Jl. Rancabentang No. 11A, Ciumbuleuit, Bandung",
          "UserId": 7,
          "createdAt": "2020-07-11T09:26:24.370Z",
          "updatedAt": "2020-07-11T10:48:12.712Z"
      },
      {
          "id": 32,
          "title": "Meeting with Noval",
          "description": "Dateng 15 menit lebih awal, supaya ga kena macet.",
          "status": "Pending",
          "due_date": "2020-07-27T00:00:00.000Z",
          "place": "Miss Bee Providore. Jl. Rancabentang No. 11A, Ciumbuleuit, Bandung",
          "UserId": 7,
          "createdAt": "2020-07-11T10:02:42.297Z",
          "updatedAt": "2020-07-11T10:49:03.266Z"
      }
    ]
    ```
 
* **Error Response:**

    * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "You have Unauthorized token!" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "Internal Server Error" }
        ```        

----
  **Get Todos By Id**
----
  Get todo 

* **URL**

  /todos/

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | jsonwebtoken | true |
  
* **URL Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | id | INTEGER | true |

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | UserId | INTEGER | true |


* **Success Response:**
  
  
  * **Code:** 200 OK <br/>
    **Content:** 
    ```json
    {
        "id": 32,
        "title": "Meeting with Noval",
        "description": "Dateng 15 menit lebih awal, supaya ga kena macet.",
        "status": "Pending",
        "due_date": "2020-07-27T00:00:00.000Z",
        "place": "Miss Bee Providore. Jl. Rancabentang No. 11A, Ciumbuleuit, Bandung",
        "UserId": 7,
        "createdAt": "2020-07-11T10:02:42.297Z",
        "updatedAt": "2020-07-11T10:49:03.266Z"
    }
    ```
 
* **Error Response:**
    * **Code:** 404 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "You have Unauthorized token!" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "Internal Server Error" }
        ```        



----
  **User Register**
----
  New user registration in FancyTodo App

* **URL**

  /users/register

* **Method:**
  
  `POST`

* **Request Headers**

   none
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | name | <YOUR_NAME> | true |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 3,
    "email": "ichlasul1099@gmail.com",
    "password": "$2a$05$.UDJpZnfrmrP.xQTTXmJ2.BD1sk5Uat30oHUO3x56.f5cBEej/0Gq",
    "updatedAt": "2020-07-07T20:17:51.889Z",
    "createdAt": "2020-07-07T20:17:51.889Z",
    "role": "Not Admin"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : "email can't be empty" }
        ```

        OR

        ```json
        { "error" : "email must unique" }
        ```

        OR

        ```json
        { "error" : "invalid email format" }
        ```

        OR

        ```json
        { "error" : "password can't be empty" }
        ```

        OR

        ```json
        { "error" : "password must be at least 8 character long" }
        ```

        OR
 
        ```json
        { "error" : "password can't contain any whitespace character" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

----
  **User Login**
----
  Login to user account to access Todo dashboard (if user already register)

* **URL**

  /users/login

* **Method:**
  
  `POST`

* **Request Headers**

   none
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "accessToken": "<YOUR_TOKEN_HERE>"
    }
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        { "error" : "invalid email/password" }
        ``` 
