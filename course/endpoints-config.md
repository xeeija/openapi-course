---
sidebar_position: 4
---

# Configuring endpoints

Now that we know how to declare paths and what operations are allowed, let's take a look on configuration.
There are some objects that define certain parts of an operation:
**parameters**, **request body** and **response** are explained in more detail below.

### Parameter Object 

Desribes one parameter of an operation.
A parameter must be unique, specifically the combination of `name` and `location`.

There are five locatios (like "types"):
- **path**: parameter in the path, used with templating,
  in `/food/{name}`, the parameter is `name`
- **query**: Query parameters after the path (after `?`),
  in `/products?page=42` the parameter is `page`
- **header**: custom headers that are expected
- **cookie**: pass cookies to the API

Parameters have the fields:
- **name**: Required, case sensitive name
- **in**: Required, type of the parameter, (path, query, header, cookie)
- **required**: Whether the parameter is mandatory, if `in` is "path", then this is required and true
- **description**: description of the parameter
- **schema**: defines the data type of the parameter


### Request Body Object

This object represents the request body (payload) of a request.
Operations that have a payload are POST, PUT and PATCH.
For other operations, the request body can be omitted because it is not used.

- **description**: description of the body
- **content**: content type of the body (MIME type, "Media type")

The `content` field is also an object, that has the MIME type as key and a schema and optional examples as value.
Binary content may omit the schema and provide an empty object instead (`{}`).

For example:

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs groupId="openapi-language">
  <TabItem value="yaml" label="YAML">

  ```yaml
  description: food to create
  content: 
    application/json:
      schema:
        $ref: '#/components/schemas/Food'
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```json
  {
    "description": "food to create",
    "content": {
      "application/json": {
        "schema": {
          "type": "string"
        }
      }
    }
  }
  ```

  </TabItem>
</Tabs>

### Responses Object

This object is a list of expected responses, based on HTTP status code.

It should cover success and known errors, but may not cover all possible status codes.
At least one response is required and this should be the success response (200).
The field `default` can be used as default response when no other status code matches.

The status code can be entered either as a number, eg. `200: ...` or as a string, eg. `"200": ...` in YAML, because keys are always strings in YAML.
In JSON keys need quotes anyway.


A response has the fields:
- **description**: Required, short description
- **headers**: list of headers with the response
- **content**: content type of response

<!-- - **schema**: defines the structure of the response body, omitting this field means no response body -->

For example:

<Tabs groupId="openapi-language">
  <TabItem value="yaml" label="YAML">

  ```yaml
  200:
    description: OK
    content:
      application/json:
        schema:
          $ref: '#/components/schemas/Food'
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```json
  {
    "200": {
      "description": "OK",
      "content": {
        "application/json": {
          "schema": {
            "$ref": "#/components/schemas/Food"
          }
        }
      }
    }
  }
  ```

  </TabItem>
</Tabs>
