# Ghibli Todo-Server

## API Documentation

---
**User Register**
---
  New user registration in Ghibli Todo app

* **URL**

  /register

* **Method:**
  
  `POST`

* **Request Body**

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

    * **Code:** 400 BadRequest <br />
        **Content:** 
        ```json
        { "errors" : "email already used" }
        ```

        OR

        ```json
        { "errors" : "Invalid email" }
        ```
        OR

        ```json
        { "errors" : "Password can't be empty" }
        ```
    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "errors" : "Internal server error" }
        ```

----
  **User Login**
----
  Login to user account to access Ghibli Todo App

* **URL**

  /login

* **Method:**
  
  `POST`

* **Request Body**

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
    { "accessToken": "<YOUR_TOKEN_HERE>" }
    ```

* **Error Response:**

   * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Invalid username/password" }
        ```
    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "errors" : "Internal server error" }
        ```

----
**User Login via Google Account**
----
  Login to access Ghibli Todo App using google account

* **URL**

  /login/google

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | string | true |
  
* **URL Params**

   none

* **Data Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | google_token | <YOUR_TOKEN_HERE> | true |

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    { "token": "<YOUR_TOKEN_HERE>" }
    ```

* **Error Response:**

   * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Please login via website" }
        ```
    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "errors" : "Internal server error" }
        ```

----
**Todo Create**
----
  Create a todo list use Ghibli Todo App

* **URL**

  /todos

* **Method:**
  
  `POST`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | string | true |

* **Request Body**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

   none

* **Data Headers Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |

* **Data Body Params**

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
      "title": "watch My Neighbour Totoro",
      "description": "Menonton Totoro gendut",
      "status": "undone",
      "due date": "2021/08/07",
      "UserId": 1
    }
    ```

* **Error Response:**

   * **Code:** 401 Unauthorized <br />
    **Content:**
        ```json
        { "errors": "Need to login first" }
        ```
    * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Title musn't empty" }
        ```
    * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Description musn't empty" }
        ```
    * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Status musn't empty" }
        ```
    * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Invalid date" }
        ```
    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "errors" : "Internal server error" }
        ```

----
**Todo List**
----
  Get a todo list use Ghibli Todo App

* **URL**

  /todos

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | string | true |

  
* **URL Params**

  none

* **Data Headers Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
      {
          "id": 2,
          "title": "Mandiin guguk",
          "description": "dijemur sampai bulunya kering",
          "status": "undone",
          "due_date": "2021-10-09T00:00:00.000Z",
          "UserId": 1
      },
      {
          "id": 10,
          "title": "coba update",
          "description": "coba lagi diedit",
          "status": "undone",
          "due_date": "2020-08-08T00:00:00.000Z",
          "UserId": 1
      },
      {
          "id": 9,
          "title": "Coding",
          "description": "JQuerry lagi",
          "status": "undone",
          "due_date": "2020-08-08T00:00:00.000Z",
          "UserId": 1
      }
    ]
    ```

* **Error Response:**

   * **Code:** 401 Unauthorized <br />
    **Content:**
        ```json
        { "errors": "Need to login first" }
        ```
    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "errors" : "Internal server error" }
        ```

----
**Todo Edit**
----
  Edit a todo use Ghibli Todo App

* **URL**

  /todos/:id

* **Method:**
  
  `PUT`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | string | true |

* **Request Body**

  | key | value | required |
  | :---: | :---: | :---: |
  | Content-Type | application/x-www-form-urlencoded | true |
  
* **URL Params**

  /:id

* **Data Headers Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |

* **Data Body Params**

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
          "id": 9,
          "title": "Coding lagi",
          "description": "JQuerry lagi",
          "status": "done",
          "due_date": "2020-08-08T00:00:00.000Z",
          "UserId": 1
      }
    ```

* **Error Response:**

   * **Code:** 401 Unauthorized <br />
    **Content:**
        ```json
        { "errors": "Need to login first" }
        ```

    * **Code:** 401 Unauthorized <br />
    **Content:**
        ```json
        { "errors": "User not authorized to make a change" }
        ```

    * **Code:** 404 NotFound" <br />
    **Content:**
        ```json
        { "errors": "Todo not found" }
        ```

    * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Title musn't empty" }
        ```
    * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Description musn't empty" }
        ```
    * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Status musn't empty" }
        ```
    * **Code:** 400 BadRequest <br />
    **Content:**
        ```json
        { "errors": "Invalid date" }
        ```

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "errors" : "Internal server error" }
        ```

----
**Todo Delete**
----
  Delete a todo use Ghibli Todo App

* **URL**

  /todos/:id

* **Method:**
  
  `DELETE`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | string | true |
  
* **URL Params**

  /:id

* **Data Headers Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
      "Todo with ID: 8, has deleted"
    ```

* **Error Response:**

   * **Code:** 401 Unauthorized <br />
    **Content:**
        ```json
        { "errors": "Need to login first" }
        ```

    * **Code:** 401 Unauthorized <br />
    **Content:**
        ```json
        { "errors": "User not authorized to make a change" }
        ```

    * **Code:** 404 NotFound" <br />
    **Content:**
        ```json
        { "errors": "Todo not found" }
        ```

    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "errors" : "Internal server error" }
        ```

----
**Ghibli Movie List**
----
  Get a Ghibli list to put into todo list use Ghibli Todo App

* **URL**

  /ghibli

* **Method:**
  
  `GET`

* **Request Headers**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | string | true |

  
* **URL Params**

  none

* **Data Headers Params**

  | key | value | required |
  | :---: | :---: | :---: |
  | token | <YOUR_TOKEN_HERE> | true |

* **Success Response:**
  
  * **Code:** 200 OK <br />
    **Content:** 
    ```json
    [
      {
          "title": "My Neighbor Totoro",
          "description": "Two sisters move to the country with their father in order to be closer to their hospitalized mother, and discover the surrounding trees are inhabited by Totoros, magical spirits of the forest. When the youngest runs away from home, the older sister seeks help from the spirits to find her.",
          "director": "Hayao Miyazaki",
          "producer": "Hayao Miyazaki",
          "rt_score": "93"
      },
      {
          "title": "Kiki's Delivery Service",
          "description": "A young witch, on her mandatory year of independent life, finds fitting into a new community difficult while she supports herself by running an air courier service.",
          "director": "Hayao Miyazaki",
          "producer": "Hayao Miyazaki",
          "rt_score": "96"
      },
      {
          "title": "Spirited Away",
          "description": "Spirited Away is an Oscar winning Japanese animated film about a ten year old girl who wanders away from her parents along a path that leads to a world ruled by strange and unusual monster-like animals. Her parents have been changed into pigs along with others inside a bathhouse full of these creatures. Will she ever see the world how it once was?",
          "director": "Hayao Miyazaki",
          "producer": "Toshio Suzuki",
          "rt_score": "97"
      },
      {
          "title": "The Wind Rises",
          "description": "A lifelong love of flight inspires Japanese aviation engineer Jiro Horikoshi, whose storied career includes the creation of the A-6M World War II fighter plane.",
          "director": "Hayao Miyazaki",
          "producer": "Toshio Suzuki",
          "rt_score": "89"
      },
      {
          "title": "The Tale of the Princess Kaguya",
          "description": "A bamboo cutter named Sanuki no Miyatsuko discovers a miniature girl inside a glowing bamboo shoot. Believing her to be a divine presence, he and his wife decide to raise her as their own, calling her 'Princess'.",
          "director": "Isao Takahata",
          "producer": "Yoshiaki Nishimura",
          "rt_score": "100"
      },
      {
          "title": "When Marnie Was There",
          "description": "The film follows Anna Sasaki living with her relatives in the seaside town. Anna comes across a nearby abandoned mansion, where she meets Marnie, a mysterious girl who asks her to promise to keep their secrets from everyone. As the summer progresses, Anna spends more time with Marnie, and eventually Anna learns the truth about her family and foster care.",
          "director": "Hiromasa Yonebayashi",
          "producer": "Yoshiaki Nishimura",
          "rt_score": "92"
      },
      .
      .
      .
    ]
    ```
* **Error Response:**

    * **Code:** 401 Unauthorized <br />
    **Content:**
        ```json
        { "errors": "Need to login first" }
        ```
    * **Code:** 500 INTERNAL SERVER ERROR <br />
        **Content:** 
        ```json
        { "errors" : "Internal server error" }
        ```
