---
title: 一些概念
description: 关于一些概念的解释.
---

在正式开始使用VMR之前，我们需要解释几个和VMR有关的概念.

## 安装模式

- **全局模式** (global)
- **会话模式** (session-only)

当使用**全局**模式安装SDK时，环境变量才会被持久化到vmr.sh中，否则不会。所以，如果想要环境变量一直可用，请使用**全局模式**。

## TUI是什么？

看看[维基百科](https://en.wikipedia.org/wiki/Text-based_user_interface). 你可以使用下面的命令来打开VMR的TUI.
```bash
vmr
```

## 反向代理

这里说的反向代理, 我们指的是 **"https://proxy.vmr.us.kg/proxy/"**, 可用于加速一些国内下载比较慢的SDK，例如，来自github release的SDK.

## 针对项目锁定SDK版本

在进行锁定版本操作时，VMR会在当前项目文件夹下生成一个名叫".vmr.lock"的文件. 这个文件将会用于后面VMR自动进行的SDK版本的检测和切换.
