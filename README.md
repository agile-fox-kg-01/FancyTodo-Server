# FancyTodo-Server

  Deploy Here:

[FancyTodo_Server](http://localhost:3000)

## API Documentation

----
  **Create New To Do**
----
  New to do list registration in Fancy To-Do app

* **URL**

  /todos

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
  | title | <YOUR_TITLE> | true |
  | description | <YOUR_DESCRIPTION> | true |
  | status | <YOUR_STATUS> | true |
  | dueDate | <YOUR_DUEDATE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "title": "Clean my room",
    "description": "before 7 pm",
    "status": "not completed",
    "dueDate": "2020/7/9",
    "UserId": 2
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        {
          "code": "400",
          "message": [
              "Title cannot be empty!"
          ]
        }
        ```

        OR

        ```json
        {
          "code": "400",
          "message": [
              "Description cannot be empty!"
          ]
        }
        ```

        OR

        ```json
        {
          "code": "400",
          "message": [
              "Status cannot be empty!"
          ]
        }
        ```

        OR

        ```json
        {
          "code": "400",
          "message": [
              "Due Date cannot be empty!"
          ]
        }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
          "code": "500",
          "message": "Internal Server Error"
        }
        ```

----
  **Read All To Do**
----
  Read All To Do List

* **URL**

  /todos

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
        {
        "id": 3,
        "title": "Clean my room",
        "description": "before 7 pm",
        "status": "not completed",
        "dueDate": "2020-07-08T17:00:00.000Z",
        "UserId": 2,
        "createdAt": "2020-07-06T04:36:48.202Z",
        "updatedAt": "2020-07-06T04:36:48.202Z"
        }
    ]
    
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
          "code": "500",
          "message": "Internal Server Error"
        }
        ```

----
  **Find To Do by ID**
----
  Read To Do by ID

* **URL**

  /todos/:id

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

    | key | value | required |
  | :---: | :---: | :---: |
  | id | <YOUR_ID> | true |

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
        "id": 3,
        "title": "Clean my room",
        "description": "before 7 pm",
        "status": "not completed",
        "dueDate": "2020-07-08T17:00:00.000Z",
        "UserId": 2,
        "createdAt": "2020-07-06T04:36:48.202Z",
        "updatedAt": "2020-07-06T04:36:48.202Z"
    }
    
    ```
 
* **Error Response:**

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
          "code": "401",
          "message": "Please login to use this feature!"
        }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
          "code": "401",
          "message": "User unauthorized"
        }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
          "code": "500",
          "message": "Internal Server Error"
        }
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        {
          "code": "404",
          "message": "Not Found"
        }
        ``` 

----
  **Update To Do**
----
  Update To Do Data

* **URL**

  /todos/:id

* **Method:**
  
  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

    | key | value | required |
  | :---: | :---: | :---: |
  | id | <YOUR_ID> | true |

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <YOUR_TITLE> | true |
  | description | <YOUR_DESCRIPTION> | true |
  | status | <YOUR_STATUS> | true |
  | dueDate | <YOUR_DUEDATE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "id": 1,
    "title": "Clean my room",
    "description": "before 7 pm",
    "status": "not completed",
    "dueDate": "2020/7/9",
    "UserId": 2,
    "createdAt": "2020-07-06T04:36:48.202Z",
    "updatedAt": "2020-07-06T04:36:48.202Z"
    }
    ```
 
* **Error Response:**

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
          "code": "401",
          "message": "Please login to use this feature!"
        }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
          "code": "401",
          "message": "User unauthorized"
        }
        ```

    OR

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        {
          "code": "400",
          "message": [
              "Title cannot be empty!"
          ]
        }
        ```

        OR

        ```json
        {
          "code": "400",
          "message": [
              "Description cannot be empty!"
          ]
        }
        ```

        OR

        ```json
        {
          "code": "400",
          "message": [
              "Status cannot be empty!"
          ]
        }
        ```

        OR

        ```json
        {
          "code": "400",
          "message": [
              "Due Date cannot be empty!"
          ]
        }
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        {
          "code": "404",
          "message": "Not Found"
        }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
          "code": "500",
          "message": "Internal Server Error"
        }
        ```

----
  **Delete To Do**
----
  Delete To Do Data by ID

* **URL**

  /todos/:id

* **Method:**
  
  `DELETE`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

    | key | value | required |
  | :---: | :---: | :---: |
  | id | <YOUR_ID> | true |

* **Data Params**

  none

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "id": 1,
    "title": "Clean my room",
    "description": "before 7 pm",
    "status": "not completed",
    "dueDate": "2020/7/9",
    "UserId": 2,
    "createdAt": "2020-07-06T04:36:48.202Z",
    "updatedAt": "2020-07-06T04:36:48.202Z"
    }
    ```
 
* **Error Response:**

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
          "code": "401",
          "message": "Please login to use this feature!"
        }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
          "code": "401",
          "message": "User unauthorized"
        }
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        {
          "code": "404",
          "message": "Not Found"
        }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
          "code": "500",
          "message": "Internal Server Error"
        }
        ```
----
  **User Register**
----
  Register a new User to use application feature

* **URL**

  /user/register

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
  | password | <YOUR_PASSWORD> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "id": 4,
    "email": "user4",
    "password": "$2a$05$.NXlYlN8LxZer4auv.gxhOnihM2kp8F/zZdifzWwSq76ZnPpXqjWm"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        {
          "code": "400",
          "message": [
              "Please input your email!"
          ]
        }
        ```

        OR

        ```json
        {
          "code": "400",
          "message": [
              "Please input your password!"
          ]
        }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
          "code": "500",
          "message": "Internal Server Error"
        }
        ```
----
  **User Login**
----
  Login to access application feature

* **URL**

  /user/login

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
  | password | <YOUR_PASSWORD> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXI0IiwiaWF0IjoxNTk0MTE5NDQyfQ.N9zq3FCzHqRIaNwL7P3-tdm9Drs40jhw_zWZRtgF078"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        {
          "code": "400",
          "message": "invalid email/password"
        }
        ```
    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
          "code": "500",
          "message": "Internal Server Error"
        }
        ```
----
  **Email To Do**
----
  Email To Do Detail to your email

* **URL**

  /todos/email/:id

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | application/x-www-form-urlencoded | true |
  
* **URL Params**

    | key | value | required |
  | :---: | :---: | :---: |
  | id | <YOUR_ID> | true |

* **Data Params**

    | key | value | required |
  | :---: | :---: | :---: |
  | email | <YOUR_EMAIL> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "id": "<20200707135709.1.49227BB70D6E28B1@sandbox710b35b55b724cad928833d39ac6013d.mailgun.org>",
    "message": "Queued. Thank you."
    }
    ```
 
* **Error Response:**

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
          "code": "401",
          "message": "Please login to use this feature!"
        }
        ```

    OR

    * **Code:** 401 UNAUTHORIZED <br />
        **Content:** 
        ```json
        {
          "code": "401",
          "message": "User unauthorized"
        }
        ```

    OR
    
    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        {
          "code": "404",
          "message": "Not Found"
        }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        {
          "code": "500",
          "message": "Internal Server Error"
        }
        ```