---
sidebar_position: 3
---

# Endpoints

**#TODO**: intro to endpoints, defining endpoints

*Note: Until now, all fields are fixed fields.*

### Paths Object

List of all paths (endpoints) of the API, must begin with `/` (pattern of `/{path}`).
A paths is represented by a Path Item Object. The path is appended to the host url.

Supports path variables in the format `{foo}`.

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

#### TODO: Activity for matching paths, variables?

### Operation Object

Describes one operation (method) of an API endpoint.
It has the following fields:

- **summary**: Short summary of this operation, should be <120 characters
- **description**: Long description (like details, shown in docs when selected)
- **parameters**: List of parameters
- **responses**: Required, list of possible responses
- **requestBody**: body (payload) of the request, if applicable

<!-- 
- produces: List of content types (MIME types) that the operation result can be
- consumes: list of content types (MIME types) that the operation takes as body 
- -->

Additionally:
- **security**: List of security definitions to apply (for authorization), logical OR
- **deprecated**: Whether the operation should not be used anymore  
  (not in the spec, but: good practise to specify an alternative)
- **tags**: For organisation/grouping
- **operationId**: Unique string to identify the operation,  
  may be used by tools or libraries, so this should follow common naming conventions
