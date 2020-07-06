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
  | due_date | <YOUR_DUE_DATE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "title": "Clean my room",
    "description": "before 7 pm",
    "status": "not completed",
    "due_date": "2020/7/9"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        [ "Title cannot be empty!" ]
        ```

        OR

        ```json
        [ "Description cannot be empty!" ]
        ```

        OR

        ```json
        [ "Status cannot be empty!" ]
        ```

        OR

        ```json
        [ "Due_date cannot be empty!" ]
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "Error": "Internal server error" }
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
        "due_date": "2020-07-08T17:00:00.000Z",
        "createdAt": "2020-07-06T04:36:48.202Z",
        "updatedAt": "2020-07-06T04:36:48.202Z"
        }
    ]
    
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "Error" : "Internal server error" }
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
        "due_date": "2020-07-08T17:00:00.000Z",
        "createdAt": "2020-07-06T04:36:48.202Z",
        "updatedAt": "2020-07-06T04:36:48.202Z"
    }
    
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "Error" : "Internal server error" }
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "Error": "Error not found" }
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
  | due_date | <YOUR_DUE_DATE> | true |

* **Success Response:**
  
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    {
    "id": 1,
    "title": "Clean my room",
    "description": "before 7 pm",
    "status": "not completed",
    "due_date": "2020/7/9",
    "createdAt": "2020-07-06T04:36:48.202Z",
    "updatedAt": "2020-07-06T04:36:48.202Z"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        [ "Title cannot be empty!" ]
        ```

        OR

        ```json
        [ "Description cannot be empty!" ]
        ```

        OR

        ```json
        [ "Status cannot be empty!" ]
        ```

        OR

        ```json
        [ "Due_date cannot be empty!" ]
        ```

    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "Error": "Error not found" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "Error": "Internal server error" }
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
    "due_date": "2020/7/9",
    "createdAt": "2020-07-06T04:36:48.202Z",
    "updatedAt": "2020-07-06T04:36:48.202Z"
    }
    ```
 
* **Error Response:**

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "Error": "Error not found" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "Error": "Internal server error" }
        ```