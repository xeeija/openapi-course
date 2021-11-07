---
sidebar_position: 1
---

# Format, Datatypes

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

First, lets go over some basic definitions.

## Format

The OpenAPI (formerly Swagger) specification is basically a JSON or YAML document.
A YAML version of >= 1.2 is required, as with this version, every JSON document is also a valid YAML document.

It can be either a single file or divided into multiple files.
When using multiple files, the `$ref` key is used to reference another file (see Reference Object/Schema Object)  
It can be named anything, but the recommended name is `openapi.json` or `openapi.yaml`.

Field names are usually case sensitive, unless it's stated otherwise.

There are two types of fields in the specification:
- **Fixed fields**, which have a name, e.g. `type` or `version` and   
- **Patterned fields**, which are defined with a regex pattern and must be unique, e.g. `^x-` which means "must start with `x-`".

HTTP methods (as we call them), like GET or POST, are called operations in the specification.

Most objects have a field like a `description` or `summary`, that is displayed in documentation.
Altough these are optional, they should be used for documentation purposes.  

:::tip Formatting

  `description` fields usually support Rich Text formatting like Markdown.
  
:::

**#TODO** JSON vs YAML?

## Data Types

Data types in the OAS are used to indicate a type, but are not strictly required in the schema.
Data types are based on the JSON data types.

| Type     | Description                                                                                  |
| -------- | -------------------------------------------------------------------------------------------- |
| null     | A JSON "null" value                                                                          |
| boolean  | A "true" or "false" value, from the JSON "true" or "false" value                             |
| number   | An arbitrary-precision, base-10 decimal number value, from the JSON "number" value           |
| string   | A string of Unicode code points, from the JSON "string" value                                |
| array    | An ordered list of instances, from the JSON "array" value                                    |
| object   | An unordered set of properties mapping a string to an instance, from the JSON "object" value |
| integer* | JSON "number" value without fraction (*not in JSON types, but OpenAPI)                       |

*Source: https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-00#section-4.2.1*

There is also an optional `format` property, to further sepcify types.
The JSON Schema Validation (which is the base for OpenAPIs formats) already defines various formats, eg.:
 - date
 - time
 - email
 - hostname
 - IP addess  
 - etc.

*See https://datatracker.ietf.org/doc/html/draft-bhutton-json-schema-validation-00#section-7.3*


Additionally, OpenAPI's specified formats are:

| Type    | Format   | Comments                     |
| ------- | -------- | ---------------------------- |
| integer | int32    | signed                       |
| integer | int64    | signed                       |
| number  | float    |                              |
| number  | double   |                              |
| string  | password | Input should be hidden by UI |

*Source: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#data-types*
