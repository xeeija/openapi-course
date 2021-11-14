---
sidebar_position: 5
---

# Security

The OpenAPI specification also provides a way to define security for your API.
Authorization and authentication are specified and configured using security schemes.

### Security Scheme Object

Defines a security mechanism for operations.

Each security scheme must be declared in the `securitySchemes` list under `components` of the root object.
Then, it can be applied either globally, by adding it to the `security` field of the root object,
or per operation by adding it to the respective operations `security` field.

:::tip

If a security scheme object contains multiple schemes, then **all** need to be satisfied to authenticate.  
If multiple schemes are defined for an operation or globally, then **only one** needs to be satisfied to authenticate.

:::

Supported types are:
- HTTP authentication
- API key
- mutual TLS (with client certificate)
- OAuth2

An object has the following fields:
- **type**: required, type of security scheme, one of the above
- **description**: description of the secuity scheme

There are a variety of other fields depending on the type to further configure the respective authentication or securtiy scheme.
For example, if the API key method is used, the following fields specify how the API key is sent, in this case in the `X-API-KEY` header:

import Tabs from '@theme/Tabs'
import TabItem from '@theme/TabItem'

<Tabs groupId="openapi-language">
  <TabItem value="yaml" label="YAML">

  ```yaml
  type: apiKey
  name: X-API-KEY
  in: header
  ```

  </TabItem>
  <TabItem value="json" label="JSON">

  ```json
  {
    "type": "apiKey",
    "name": "X-API-KEY",
    "in": "header"
  }
  ```

  </TabItem>
</Tabs>

For details, see: https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-scheme-object

:::info Quiz

You can now do the second quiz "OpenAPI Advanced".

:::
