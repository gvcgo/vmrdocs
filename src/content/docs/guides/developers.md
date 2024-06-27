---
title: For Contributors
description: A guidance for contributors.
---

## Data Flow

![flow.png](../../../assets/vmr_flow.png)

- [vcollector](https://github.com/gvcgo/vcollector) collects version info for SDKs and uploads the results to repo vsources.
- [vsources](https://github.com/gvcgo/vsources) holds the version info for SDKs.
- [vmr](https://github.com/gvcgo/version-manager) is the user interface of the whole project.

The vcollector is deployed on a remote server, which users do never need to care about. VMR fetches the prepared version list from repo vsources, and shows/downloads the versions of an SDK.
