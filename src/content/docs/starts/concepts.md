---
title: Core Concepts
description: Explains some concepts for VMR.
---

There are several concepts to be explained before we start using VMR.

## Installation Mode

- **Global**
- **Session-Only**

When an SDK is installed in **Global Mode**, the envs are added to vmr.sh. Otherwise, not.

If your current shell is in session mode, and you have installed an SDK for global mode, then the source command will not work.
In this case, you need to use the customed alias **svmr** to flush the envs.

If you need to see whether the current shell is in session mode or not, you should use command **vmr ism**.

## TUI

See [wikipedia](https://en.wikipedia.org/wiki/Text-based_user_interface). You can open TUI using command below.
```bash
vmr
```

## Reverse Proxy

For reverse proxy, we refers to **"https://proxy.vmr.us.kg/proxy/"**, which is used to speedup the downloads for SDKs.

## Lock the SDK version for a project.

VMR will generate a file named ".vmr.lock" in the project. This file will be used for checking the SDK versions for current project by VMR. For details, see [here](https://vdocs.vmr.us.kg/guides/tutorial/#key-map-hints-for-available-version-list).

<!-- 
# Plugins for Neovim
- [fd](https://github.com/sharkdp/fd)
- [fzf](https://github.com/junegunn/fzf)
- [ripgrep](https://github.com/BurntSushi/ripgrep)
- [tree-sitter](https://tree-sitter.github.io/tree-sitter/)


# Installers
- [coursier](https://get-coursier.io/docs/cli-overview)
- [cygwin](https://cygwin.com/)
- [gradle](https://gradle.org/)
- [maven](https://maven.apache.org/)
- [miniconda](https://docs.anaconda.com/free/miniconda/index.html)
- [msys2](https://www.msys2.org/)
- [rustup](https://rustup.rs/)
- [sdkmanager](https://developer.android.com/studio)


# Tools
- [acast](https://asciinema.org/)
- [agg](https://github.com/asciinema/agg)
- [cmake](https://cmake.org/)
- [ffmpeg](https://ffmpeg.org/)
- [git-win](https://git-scm.com/)
- [gsudo](https://gerardog.github.io/gsudo/)
- [kubectl](https://kubernetes.io/docs/tasks/tools/)
- [lazydocker](https://github.com/jesseduffield/lazydocker)
- [lazygit](https://github.com/jesseduffield/lazygit)
- [protoc](https://protobuf.dev/)
- [typst-preview](https://enter-tainer.github.io/typst-preview/)
- [upx](https://upx.github.io/)
- [vhs](https://github.com/charmbracelet/vhs)
 -->