---
sidebar_position: 4
---

# Configuring endpoints

### Parameter Object 
(and Header Object is very similar)

Desribes one parameter of an operation.
A parameter must be unique (the combination of name and location)

There are five locatios (like "types"):
- **path**: parameter in the path, used with templating
  in `/user/{username}`, the parameter is `username`
- **query**: Parameters after the path (after `?`)
  in `/products?page=42` the parameter is `page`
- **header**: custom headers that are expected
- **cookie**: pass cookies to the API

Parameters have the fields:
- **name**: Required, case sensitive name
- **in**: Required, type of the parameter, (path, query, header, cookie)
- **required**: Whether the parameter is mandatory, if `in` is "path", then this is required and true
- **description**: description of the paremeter


### Request Body Object

Single request body (payload)

- **description**
- **content**: content type of the body (MIME type, "Media type")
  see 


### Responses Object

List of expected responses, based on HTTP status code. Should cover success and known errors, but may not cover all possible status codes.  
At least one response is required and this should be the success response (200). 
`default` is used as default when no other status code matches.
String of the status code, not number, eg. `"200": ...`.

A response has the fields:
- **description**: Required, short description
- **headers**: list of headers with the response
- **content**: content type of response
  
<!-- 
- schema: defines the structure of the response,  
  can be a primitive type or object, omitting this field means no response
-->
