# FancyTodo-Server

  Deploy Here:

[Todoapp_Server](http://localhost:3000)

## API Documentation

* **URL**

  GET /tasks

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | Content-Type | application/x-www-form-urlencoded | false |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <TITLE> | true |
  | description | <DESCRIPTION> | false |
  | due_date | <DUE_DATE> | true |

* **Success Response:**

  * **Code:** 201 CREATED <br />
    **Content:** 
    [
      {
        "id": 6,
        "title": "contoh",
        "description": "ngerjain dulu yah sampe kelar",
        "due_date": "2020-12-20T00:00:00.000Z",
        "createdAt": "2020-07-06T13:01:15.009Z",
        "updatedAt": "2020-07-06T13:01:15.009Z"
      }
    ]
    ```
 
* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```


* **URL**

  POST /tasks

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  | Content-Type | application/x-www-form-urlencoded | false |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | title | <TITLE> | true |
  | description | <DESCRIPTION> | false |
  | due_date | <DUE_DATE> | true |

* **Success Response:**
  
  
  * **Code:** 201 CREATED <br />
    **Content:** 
    ```json
    {
    "title": "contoh",
    "description": "ngerjain dulu yah sampe kelar",
    "due_date": "2020-12-20T00:00:00.000Z"
    }
    ```
 
* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:** 
        ```json
        {
          "err": "validation errors"
        }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "internal server error" }
        ```