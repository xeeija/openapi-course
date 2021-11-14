---
sidebar_position: 6
---

# Paths exercise

To practise your new knowledge, your task is to create two API endpoints.

- **A POST endpoint to create a user.**  
  The response should support JSON and XML format.
  In the request body a user in JSON format is expected.
  Otherwise, a status 400 response should be sent.

- **A GET endpoint to get a user by its username.**  
  The username should be part of the URI.
  On success, the user object in JSON or XML format should be sent as response.
  Otherwise, the response has status code 404.

- Optionally, add security to the API, so that only authenticted clients can create users.
  You can use the predefined security scheme here.


You can use the predefined User schema for this exercise. Insert it in the `schema` like this:

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs groupId="openapi-language">
  <TabItem value="yaml" label="YAML">

  ```yaml
  $ref: "#/components/schemas/User"
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```json
  "$ref": "#/components/schemas/User"
  ```

  </TabItem>
</Tabs>

Copy the code below into the [Online Swagger Editor](https://editor.swagger.io/) or your editor of choice and add your endpoints.

<!-- Needs empty lines around markdown, so it is not interpreted as JSX -->

<Tabs groupId="openapi-language">
  <TabItem value="yaml" label="YAML">

  ```yaml
  openapi: 3.0.1
  info:
    title: OpenAPI Paths Exercise
    description:
      "This exercise uses the Swagger Petstore example as foundation.<br><br>
      This is a sample server Petstore server.
      You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).
      For this sample, you can use the api key `special-key` to test the authorization filters."
    termsOfService: http://swagger.io/terms/
    contact:
      email: apiteam@swagger.io
    license:
      name: Apache 2.0
      url: http://www.apache.org/licenses/LICENSE-2.0.html
    version: 1.0.0
  externalDocs:
    description: Find out more about Swagger
    url: http://swagger.io
  servers:
    - url: https://petstore.swagger.io/v2
    - url: http://petstore.swagger.io/v2
  tags:
    - name: user
      description: Operations about users
      externalDocs:
        description: Find out more about our store
        url: http://swagger.io
  paths:
    # Your code here
    
    # End your code
  components:
    schemas:
      User:
        type: object
        properties:
          id:
            type: integer
            format: int64
          username:
            type: string
          firstName:
            type: string
          email:
            type: string
          password:
            type: string
          userStatus:
            type: integer
        xml:
          name: User
    securitySchemes:
      api_key:
        type: apiKey
        name: api_key
        in: header
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```json
  {
    "openapi": "3.0.1",
    "info": {
      "title": "OpenAPI Paths Exercise",
      "description": "This exercise uses the Swagger Petstore example as foundation.<br><br> This is a sample server Petstore server. You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/). For this sample, you can use the api key `special-key` to test the authorization filters.",
      "termsOfService": "http://swagger.io/terms/",
      "contact": {
        "email": "apiteam@swagger.io"
      },
      "license": {
        "name": "Apache 2.0",
        "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
      },
      "version": "1.0.0"
    },
    "externalDocs": {
      "description": "Find out more about Swagger",
      "url": "http://swagger.io"
    },
    "servers": [
      {
        "url": "https://petstore.swagger.io/v2"
      },
      {
        "url": "http://petstore.swagger.io/v2"
      }
    ],
    "tags": [
      {
        "name": "user",
        "description": "Operations about users",
        "externalDocs": {
          "description": "Find out more about our store",
          "url": "http://swagger.io"
        }
      }
    ],
    "paths": {
      // Your code here

      // End your code
    },
    "components": {
      "schemas": {
        "User": {
          "type": "object",
          "properties": {
            "id": {
              "type": "integer",
              "format": "int64"
            },
            "username": {
              "type": "string"
            },
            "firstName": {
              "type": "string"
            },
            "email": {
              "type": "string"
            },
            "password": {
              "type": "string"
            },
            "userStatus": {
              "type": "integer"
            }
          },
          "xml": {
            "name": "User"
          }
        }
      },
      "securitySchemes": {
        "api_key": {
          "type": "apiKey",
          "name": "api_key",
          "in": "header"
        }
      }
    }
  }
  ```

  </TabItem>
</Tabs>
