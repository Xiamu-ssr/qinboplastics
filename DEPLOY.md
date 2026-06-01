# 自动部署到阿里云 OSS（GitHub Actions）

配好后，每次 `git push` 到 `main` 分支，GitHub 会自动把网站文件同步到 OSS。

## 一、准备 OSS 子账号 AccessKey（强烈建议，安全）

不要用主账号 AccessKey。去 RAM 创建一个**只有该 Bucket 权限**的子账号：

1. 阿里云控制台 → RAM 访问控制 → 用户 → 创建用户
   - 勾选「OpenAPI 调用访问」→ 拿到 **AccessKey ID** 和 **AccessKey Secret**（只显示一次，记好）
2. 给这个用户授权：
   - 系统策略 `AliyunOSSFullAccess`（简单），
   - 或自定义策略只允许操作 `qinboplastics` 这一个 Bucket（更安全）

## 二、在 GitHub 仓库填 4 个 Secret

仓库页面 → **Settings** → **Secrets and variables** → **Actions** → **New repository secret**，
逐个添加下面 4 个（名字必须一字不差）：

| Secret 名称 | 值 | 示例 |
|---|---|---|
| `OSS_ENDPOINT` | Bucket 所在地域的 Endpoint | `oss-cn-shanghai.aliyuncs.com` |
| `OSS_BUCKET` | 你的 Bucket 名称 | `qinboplastics` |
| `OSS_ACCESS_KEY_ID` | 子账号 AccessKey ID | `LTAI5t...` |
| `OSS_ACCESS_KEY_SECRET` | 子账号 AccessKey Secret | `xxxxxxxx` |

> Endpoint 在哪看：OSS 控制台 → 进入你的 Bucket → 概览 → 「访问端口」里的「外网 Endpoint」。
> 注意只填域名，**不要带** `https://` 和 bucket 前缀。

## 三、触发部署

填完 Secret 后，任意一次 push 到 main 就会自动跑；
也可以去仓库 **Actions** 标签页 → 选「Deploy to Aliyun OSS」→ **Run workflow** 手动触发一次测试。

部署成功后访问 http://www.qinboplastics.com 即可看到更新。

## 四、常见问题

- **跑失败看日志**：仓库 Actions 页面点开那次运行，看红色步骤的报错。
- **AccessKey 报权限错**：确认子账号有该 Bucket 的读写权限。
- **Endpoint 报错**：确认地域对得上（Bucket 在上海就用 `oss-cn-shanghai`）。
- **想换部署策略**：当前用 `cp --update`（增量上传，不删旧文件）。如果想让 OSS 与仓库完全一致（删除 OSS 上多余文件），把命令改成 `sync --delete`，但首次务必确认 Bucket 里没有其它要保留的文件。
- **CDN 缓存**：如果挂了 CDN，更新后可能要等缓存过期或手动刷新 CDN 才能看到最新内容。
