---
title: Cloudflare Pages の NodeJS のバージョン指定
description: .node-version をトップディレクトリに置こう。
date: 2025-04-20T22:12:36.198549600+0900
---

指定したいバージョンを記述した `.node-version` をトップディレクトリに置こう。


このブログの今現在の ~.node-version~ はこんな感じ:

```
23.11.0
```

`package.json` に以下のように `engines` を追加するという方法もあるが、これだけでは効果が出ないので注意。

```
{
    "engines": {
        "node": ">=22.14.0"
    },
}
```

必ず指定したいバージョンを記述した `.node-version` をトップディレクトリに置くこと。

