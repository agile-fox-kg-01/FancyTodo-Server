# FancyTodo-Server

Deploy Here:

[Music_Server](http://localhost:3000)

## API Documentation

----

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
  | title | <YOUR_TODO_TITLE> | true |   
  | description | <YOUR_TODO_DESCRIPTION> | true |   
  | status | <YOUR_TODO_STATUS> | true |   
  | due_date | <YOUR_TODO_DUE_DATE> | true |   

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
    {"error": "Title field shouldn't be empty"}
    ```

    OR

    ```json
    {"error": "Description field shouldn't be empty"}
    ```

    OR 

    ```json
    {"error": "Status field shouldn't be empty"}
    ```

    OR

    ```json
    {"error": "Due_date field shouldn't be empty"}
    ```
    
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {"error": "internal server error"}
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

  * **Code:** 200 SUCCESS REQUEST <br />
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
    {"error": "internal server error"}
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

  * **Code:** 200 SUCCESS REQUEST <br />
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
    {"error": "NOT FOUND"}
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
  | title | <YOUR_TODO_TITLE> | true |   
  | description | <YOUR_TODO_DESCRIPTION> | true |   
  | status | <YOUR_TODO_STATUS> | true |   
  | due_date | <YOUR_TODO_DUE_DATE> | true |   

* **Success Response**

  * **Code:** 200 SUCCESS REQUEST <br />
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
    {"error": "Title field shouldn't be empty"}
    ```

    OR

    ```json
    {"error": "Description field shouldn't be empty"}
    ```

    OR 

    ```json
    {"error": "Status field shouldn't be empty"}
    ```

    OR

    ```json
    {"error": "Due_date field shouldn't be empty"}
    ```

  OR

  * **Code:** 404 NOT FOUND <br />
    **Content**
    ```json
    {"error": "NOT FOUND"}
    ```

    
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {"error": "internal server error"}
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

  * **Code:** 200 SUCCESS REQUEST <br />
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
    {"error": "NOT FOUND"}
    ```

    
  OR

  * **Code:** 500 INTERNAL SERVER ERROR <br />
    **Content**
    ```json
    {"error": "internal server error"}
    ```

