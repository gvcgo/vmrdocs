# 常见问题

### 1. 如何使用？

使用**vmr -h**查看帮助信息。
使用**vmr subcommand -h**查看子命令帮助信息。

### 2. 安装之后如何设置SDK安装目录？

编辑配置文件$HOME/.vm/config.json。

### 3. 为什么下载失败？

请检查是否设置了反向代理(reverse proxy)。

### 4. 下载源安全吗？

安全。所有资源均来自各种SDK的官方下载链接或者github仓库的release。

### 5. MacOS/Linux下，环境变量放在什么地方？

在$HOME/.vm/vm_env.sh中，然后在.bashrc或者.zshrc中进行引用。这样可以保证.bashrc或者.zshrc的整洁。
