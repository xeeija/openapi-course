---
sidebar_position: 5
---

# Security

**TODO** intro to security (auth etc)

### Security Scheme Object

Defines a security mechanism for operations

Supported are
- HTTP authentication
- API key
- mutual TLS (with client certificate)
- OAuth2

It has the fields:
- **type**: required, type of security scheme
- **description**

There are a variety of other fields depending on the type to further configure the respective authentication or securtiy scheme.
For example, if the API key method is used, the following fields specify how the API key is sent, in this case in the `X-API-KEY` header:

```
type: apiKey
name: X-API-KEY
in: header
```

For details see https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md#security-scheme-object
