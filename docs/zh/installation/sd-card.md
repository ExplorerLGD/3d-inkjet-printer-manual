# SD卡

SD 卡用于存放系统镜像和启动配置。为了保证系统启动稳定、文件读写可靠，建议选购高速、可靠的 SD 卡。

## 烧录系统镜像

可以使用 balenaEtcher 软件烧录系统镜像（官网下载：[balenaEtcher](https://www.balena.io/etcher/)）。

## 修改 Wi-Fi 配置

镜像烧录完成并重新插入 SD 卡后，电脑会识别出一个名为 `boot` 的分区。

1. 打开 `boot` 分区。
2. 找到并打开 `bootpy.py` 文件。
3. 找到以下配置：

```python
SSID = "your ssid"
PASSWORD = "your password"
```

4. 将 `your ssid` 修改为实际 Wi-Fi 名称。
5. 将 `your password` 修改为实际 Wi-Fi 密码。
6. 保存 `bootpy.py`。
7. 安全弹出 SD 卡。
8. 将 SD 卡插入设备并上电启动。

## 示例

例如 Wi-Fi 名称为 `MyWifi`，密码为 `12345678`，则应修改为：

```python
SSID = "MyWifi"
PASSWORD = "12345678"
```

!!! note "注意"
    请保留英文双引号。Wi-Fi 名称和密码需要填写在双引号内部。
