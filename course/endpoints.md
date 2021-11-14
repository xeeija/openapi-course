---
sidebar_position: 3
---

# Endpoints

Endpoints of an API provide access to resources on server.
This could be data stored in a database or contents of the filesystem.

An endpoint or resource is usually identified by a **Uniform Resource Identifier** (URI).
It can be accessed by performing an HTTP request to the server and will recieve an HTTP response back.

The part of the URI that is most interesting for documentation is the **path**, and possibly query parameters.
The preceeding part of the URI, protocol and hostname, are usually the same for all resources of an API and thus not that important.
Besides, the fragment part, which is everything after `#`, is also not interesting to the API, as it is not sent with the HTTP request. 

:::info Note

Until now, all fields are fixed fields.

:::

## Paths Object

A path can be declared in the Paths Object.

This object contains a list of all paths (endpoints) of the API.
Each path must begin with a slash `/` (specifically a pattern of `/{path}`) and is represented by a Path Item Object in the specification.
The path is then appended to the base host url.
In order to specify, which operations are allowed on the path, a field for each HTTP method is available.

To declare a set of matching URIs for a path, they support path variables in the format `{foo}`.
For instance, a path of `/food/{name}` may be declared to get an article by its id from the API.
Path variables may also be used in the middle of the path, like `/food/{id}/nutrition`.


Examples of matching URIs are:

    /food/watermelon
    /food/banana
    /food/apple/nutrition

However, a pattern with path variables must be unique.
The following paths are conflicting with each other.

    /food/{name}
    /food/{category}

A request to `/food/orange` could refer to either an orange or to a category of all orange food.

If two paths are defined, where one is a fixed path and the other one has path variables, the fixed path takes precedence.

    /food/all
    /food/{category}

**Fields**

A path has the following fields:
- all HTTP methods in lowercase
  - get
  - post
  - put
  - delete
  - options
  - head
  - patch
  - trace
- description: for all operations of a path
- parameters, available for all operations
- $ref: reference (link) to a path item object defined somewhere else

## Operation Object

Each of the HTTP methods above is represented by an Operation object.
One object describes one operation (method) of an API endpoint.
Multiple operations can be definied per path, but at least one is required.

It has the following fields:

- **summary**: Short summary of this operation, should be <120 characters
- **description**: Long description (like details, shown in docs when selected)
- **parameters**: List of parameters
- **responses**: Required, list of possible responses
- **requestBody**: body (payload) of the request, if applicable (depends on the method)
- **security**: List of security schemes to apply (for authorization), only one has to be fulfilled

Additionally, these fields are mainly used for documentation:
- **deprecated**: Whether the operation should not be used anymore  
  (it is good practise to specify an alternative)
- **tags**: For organisation/grouping
- **operationId**: Unique string to identify the operation.  
  This may be used by tools or libraries, so this should follow common naming conventions
