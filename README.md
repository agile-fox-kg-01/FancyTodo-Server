# FancyTodo-Server

  Deploy Here:

[FancyTodo_Server](http://localhost:3000)

## API Documentation

----
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
  | token | <jsonwebtoken> | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <WRITE_TITLE_HERE> | true |
  | description | <WRITE_DESCRIPTION_HERE> | true |
  | status | <WRITE_STATUS_HERE> | true |
  | due_date | <WRITE_DUEDATE_HERE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 1,
    "title": "Tugas Pertama",
    "description": "Mengerjakan Dokumnetasi API",
    "status": "On Progres",
    "due_date": "2020-07-08T17:00:00.000Z",
    "UserId": 1,
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        { "error" : "description cannot be empty" }
        ```

        OR

        ```json
        { "error" : "status cannot be empty" }
        ```

        OR

        ```json
        { "error" : "due date cannot be empty" }
        ```

        OR

        ```json
        { "error" : "invalid due date format" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```

<!-- iklas -->

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
