---
title: 'CSV を使うバッチのよさげな作り方を考えてみよう'
date: 2020-10-26T00:26:00+09:00
draft: true
---

CSV 形式で毎日渡されるデータを読み込んで何か別のストレージ、つまりデータベースに登録するプログラムを考えましょう。
これを C\# で書いてみます。

さて、CSV 形式で毎日渡されるデータをどのようなものにしましょうか？ 3日考えて、お風呂に入っているときにアイディアが思いつきました。
このようなものにしましょう:

```text
時刻,到着場所,出発場所,積荷名称,個数
09:00,クリプェカ,ヤテヒュパ農場,じゃがいも,9
09:00,クリプェカ,ヤテヒュパ農場,とうもろこし,72
09:10,クリプェカ,プレケテル農場,小麦,23
```

いわゆるファンタジー世界における世界で、商人が自分の倉庫にどこの農場からどれだけの物品が来たかを表しています。
この商人は多分、クリプェカという町に倉庫を置いているのでしょう。
そして、少なくともヤテヒュパ農場からじゃがいもととうもろこし、プレケテル農場から小麦を仕入れているものと思われます。

当然ですが、このような地名は架空のものです。
クリプェカがどこにあるのか質問しないようにしてください。
書いている私もわかりません。

この CSV ファイルはとても簡単なもので、項目がわずか 5 つしかありません。
実際のシステムでは様々なもっともらしい理由によって必要のなさそうな項目がもっとくっついているはずです。
が、この記事は C\# でバッチをどのように書けば良いのかを示すために書かれているので、CSV の形式についてのリアリズムを追求するのはここでやめておきましょう。
