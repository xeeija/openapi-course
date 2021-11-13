---
sidebar_position: 2
---

# Schema Basics

The foundation of the OAS is a the OpenAPI object, which in turn consits of a couple of objects.
This object contains all the endpoints and its options of the API as well as metadata, general schema definitions and so on.

## Root Object

The OpenAPI Object is the root object of the specification document.
The most relevant fields are:

- **openapi**: required, version of the specification
- **info**: required, Info object with metadata about the API
- **servers**: Array of Server Objects hosting the API, defaults to server with url `/`
<!-- - basePath: path of the API relative to host, must begin with `/` like all paths -->
- **paths**: required: The available endpoints and methods of the API (more details later)

It also has additional fields to define common schemes for:

- **components**: defines schemas
- **security**: Security mechanisms that can be used (authentication, authorization), only one is required
- **webhooks**: possibility to define webhook paths

Here are examples for YAML and JSON format with the same content:

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs groupId="openapi-language">
  <TabItem value="yaml" label="YAML">

  ```yaml
  openapi: 3.0.2
  info: 
    title: Firebit API
    version: 1.0.0
    description: "API for the [Firebit](https://firebit.com) platform, a place to share experiences with your friends"
    termsOfService: https://firebit.com/tos
  servers:
    ...
  paths:
    ...
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```json
  {
    "openapi": "3.0.2",
    "info": {
      "title": "Firebit API",
      "version": "1.0.0",
      "description": "API for the [Firebit](https://firebit.com) platform, a place to share experiences with your friends",
      "termsOfService": "https://firebit.com/tos"
    },
    "servers": [
      ...
    ],
    "paths": [
      ...
    ],
  }
  ```

  </TabItem>
</Tabs>

As you can see, the YAML version is a bit shorter and (maybe) easier to read, because no brackets, quotes or commas are necessary.


## Info Object

The Info object provides metadata of the API.

It has the fields:
- **title**: required
- **version**: required, version of the API

:::warning

Don't confuse the `version` of the Info object (version of the API) with the `openapi` field version (specification version).

:::

## Servers Object

This specifies a single server or list of servers, where the API is hosted.
Requests sent from the documentation will be sent to the selected server from this object.

It has the following ields:

- **url**: required, URL to the host
- **description**: optional name

## Components Object

In this object, a list of reusable objects of various types can be defined.  

It holds:
- Schemas
- PathItems
- Parameters
- RequestBodies
- Headers
- Responses
- SecuritySchemes
- etc.

Basically, everything that is used in many places can be defined here once 
and used everywhere else, thus providing a single place to make changes. 

Examples are a `filter` parameter, a "Not Found" response or an authentication method used for multiple operations.


:::info Quiz

  You can now do the first quiz "OpenAPI Basics".

:::
