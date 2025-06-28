# zen-slug-cleaner

WIP

Zen Slug Cleaner 😎

Quickly copy webpage URL without SEO slug to clipboard with just one click.

## Install

### chrome web store

WIP

### Developer mode

https://github.com/wasabina67/zen-slug-cleaner/raw/refs/heads/main/zip/1.0/zenslugcleaner.zip

## How to use

1. Open any webpage in Google Chrome
2. Right-click on the page and select "ZenSlugCleaner"
3. The URL without SEO slug will be copied to your clipboard
4. You can paste it anywhere you like

## Developer Dashboard

### Creating a ZIP file

```bash
rm -rf zenslugcleaner.zip && \
zip -r zenslugcleaner.zip * -x "prompts/*" -x "screenshots/*" -x "tests/*" -x "zip/*" \
-x "explain.sh" -x "GEMINI.md" -x "package.json" -x "review.sh"
```

### Build / listing

- description

```
1. Open any webpage in Google Chrome
2. Right-click on the page and select "ZenSlugCleaner"
3. The URL without SEO slug will be copied to your clipboard
4. You can paste it anywhere you like
```

- category: Tool
- language: English
- screenshot: `1280x800`, `JPEG`
- Homepage URL

```
https://github.com/wasabina67/zen-slug-cleaner
```

- Support URL

```
https://github.com/wasabina67/zen-slug-cleaner
```

### Build / privacy

#### 単一用途

```
ZenSlugCleanerは、現在表示しているウェブページのURLについて、SEOスラッグを除外して、
ワンクリックでクリップボードにコピーすることを単一の目的とした拡張機能です。
これにより、ユーザーは任意のドキュメントに簡単にSEOスラッグのないURLを追加できます。
```

#### 権限が必要な理由

contextMenus

```
この拡張機能は、ウェブページ上で右クリックした際に表示されるコンテキストメニューに、
「ZenSlugCleaner」という項目を追加するために、contextMenusの権限を使用しています。
これにより、ユーザーは簡単に拡張機能にアクセスできます。
```

activeTab

```
この拡張機能は、「ClipTitle」を選択した際に、現在開いているタブのタイトルを取得するためにactiveTabの権限を使用しています。

```

scripting

```


```

clipboardWrite

```


```

リモートコード を使用していますか？

- [x] いいえ、リモートコード を使用していません
