# co-dev-1st

## 目的

非エンジニア2人（自分 + もう1人）で、GitHub上での共同開発フロー（ブランチ作成 → Pull Request → レビュー → Merge）に慣れることを目的とした練習用プロジェクトです。

**作るものの中身はまだ未定です。現在アイデア出し中です。**
まずはツールの使い方に慣れることを優先し、中身は追い追い決めていきます。

## 運用ルール

- `main` ブランチには直接 push しない
- 変更を行うときは、必ず以下の流れで進める
  1. `main` から作業用のブランチ（例: `feature/〇〇`）を作成する
  2. 作業用ブランチ上で変更を行い、コミットする
  3. GitHub上で Pull Request（PR）を作成する
  4. お互いにレビューし、問題なければ `main` に Merge する
- コミットメッセージやPRの説明は、後から読んでも分かるように日本語で簡潔に書く

## セットアップ手順

1. このリポジトリをローカルにクローンする
   ```
   git clone https://github.com/HTZY87/co-dev-1st.git
   cd co-dev-1st
   ```
2. 作業用のブランチを作成して移動する
   ```
   git checkout -b feature/自分の作業名
   ```
3. ファイルを編集・追加し、変更をコミットする
   ```
   git add .
   git commit -m "変更内容がわかる一言"
   ```
4. リモートに push する
   ```
   git push -u origin feature/自分の作業名
   ```
5. GitHub上でPull Requestを作成し、レビュー後にMergeする

## 天気アプリ(開発中)の動かし方

`weather-app/` はESモジュールを使っているため、ファイルを直接開くと動きません。リポジトリ直下でローカルサーバーを起動して開きます。

```
python3 -m http.server 8000
```

→ ブラウザで http://localhost:8000/weather-app/ を開く

仕様は `WEATHER_APP_SPEC.md` を参照してください。

## 参考: サンプルコードの動かし方

練習用のサンプル（`feature/hello-world` ブランチにあります）は、`index.html` をブラウザで開くだけで動作します。特別なインストールは不要です。
