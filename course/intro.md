---
sidebar_position: 0
---

# Intro

## Prerequisites

Prerequisites and assumed knowledge for this course:
- HTTP Protocol
- JSON basics

## Overview

ETC: **90 minutes**

This E-learning course gives an overview of the most important features of the OpenAPI specification.
I left out some details and tried to focus on relevant parts.

OpenAPI is a specification for APIs to document and interact with the API in a standardized way.
It also opens the door for third party tools that can work with the specification, for example code generation.

In short, the specification is a tree of various objects that describe how the API is structured, like a JSON (or YAML) file, but with a defined schema and structure.

## Versions

The full specification is available at: https://github.com/OAI/OpenAPI-Specification.  
Current version: **3.1.0**

The latest version supported by Swagger's tools is currently version **3.0.3**. 
Available at https://swagger.io/specification/

The previous major version 2.x was called the "Swagger specification".
With version 3, the specification was donated to the OpenAPI foundation, renamed to "OpenAPI specification" and the strucuture was simplified.
The minor version indicates the feature set of the specification.

Although the latest version 3.1 is a minor version change from 3.0, there are still some breaking changes as the complete JSON Schema draft is supported.
Thus tooling may not work correctly with a different minor version.

The following image illustrates the changes from version 2 to 3.

![Comparision version 2 and 3](/img/openapi-v2-v3.png)

*Source: https://blog.stoplight.io/difference-between-open-v2-v3-v31*

:::warning Compatibility

Versions 2 and 3 are not compatible with each other, as the version numbers suggest.

:::
