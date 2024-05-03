# VMR数据流

<!-- https://cdn.jsdelivr.net/gh/moqsien/img_repo@main/vmr_install.png -->
![framwork.png](https://cdn.jsdelivr.net/gh/moqsien/img_repo@main/framework.png)

- [collector](https://github.com/gvcgo/collector) 收集版本信息并上传到 **resources** 仓库。
- [resources](https://github.com/gvcgo/resources) 存储版本信息。
- [vmr](https://github.com/gvcgo/version-manager) 用户界面。

collector部署在远程服务器上, 用户无需关心。
**VMR** 从 **resources** 仓库获取版本信息, 然后向用户展示，或者根据用户的选择进行下载安装。
