# FancyTodo-Server

## API Documentation

---
**User Register**
---
  New user registration in Fancy Todo app

* **URL**

  /users/register

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required | constraint |
  | :---: | :---: | :---: | :---: |
  | email | <YOUR_EMAIL> | true |
  | password | <YOUR_PASSWORD_HERE> | true | unique

  * **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 1,
    "email": "daniel@mail.com"
    }
    ```
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
        "error": [
            "Password can't be empty",
            "Invalid email"
            ]
        }
        ```

        OR

        ```json
        {
        "error": [
            "email must be unique"
            ]
        }
        ```
        OR

        ```json
        {
        "error": [
            "Invalid email"
            ]
        }
        ```

----
  **User Login**
----
  Login to user account to access Fancy Todo App

* **URL**

  /users/login

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
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
        "Invalid username/password"
        ```
