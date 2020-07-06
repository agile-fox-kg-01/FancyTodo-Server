# FancyTodo-Server

  Deploy Here:

[FancyTodo_Server](http://localhost:3000)

## API Documentation

----
  **Create Todo**
----
  Add a new todo in FancyTodo app

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
      "title": "Fancy todo API documentation",
      "description": "Fancy todo API documentation",
      "status": "On Progess",
      "due_date": 2020-06-07T00:00:00.000Z
    }
    ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        ["Title is required!"]
        ```

        OR

        ```json
        ["Description is required!"]
        ```

        OR

        ```json
        ["Status is required!"]
        ```

        OR

        ```json
        ["Due date is required!"]
        ```
    
    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "Internal server error" }
        ```

----
  **Read All Todo**
----
  View all todo list

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


  * **Code:** 201 CREATED <br />
    **Content:**
    ```json
    [
      {
        "id": 1,
        "title": "Fancy todo API documentation",
        "description": "Fancy todo API documentation",
        "status": "On Progess",
        "due_date": 2020-06-07T00:00:00.000Z
      },
      {
        "id": 2,
        "title": "Fancy todo API documentation",
        "description": "Fancy todo API documentation",
        "status": "On Progess",
        "due_date": 2020-06-07T00:00:00.000Z
      }
    ]
    ```

* **Error Response:**

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "Internal server error" }
        ```

----
  **Read a Todo**
----
  Find a todo by ID

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
    [
      {
        "title": "Fancy todo API documentation",
        "description": "Fancy todo API documentation",
        "status": "On Progess",
        "due_date": 2020-06-07T00:00:00.000Z
      }
    ]
    ```

* **Error Response:**

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "error" : "Not found" }
        ```

----
  **Update Todo**
----
  Update an existing todo in FancyTodo app

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
      "title": "Fancy todo API documentation",
      "description": "Fancy todo API documentation",
      "status": "On Progess",
      "due_date": 2020-06-07T00:00:00.000Z
    }
    ```

* **Error Response:**

    * **Code:** 400 BAD REQUEST <br />
        **Content:**
        ```json
        ["Title is required!"]
        ```

        OR

        ```json
        ["Description is required!"]
        ```

        OR

        ```json
        ["Status is required!"]
        ```

        OR

        ```json
        ["Due date is required!"]
        ```
    
    OR

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "error" : "Not found" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "Internal server error" }
        ```

----
  **Delete Todo**
----
  Delete an existing todo in FancyTodo app

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
      "title": "Fancy todo API documentation",
      "description": "Fancy todo API documentation",
      "status": "On Progess",
      "due_date": 2020-06-07T00:00:00.000Z
    }
    ```

* **Error Response:**

    * **Code:** 404 NOT FOUND <br />
        **Content:** 
        ```json
        { "error" : "Not found" }
        ```

    OR

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "error" : "Internal server error" }
        ```