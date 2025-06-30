# zen-slug-cleaner

[![Chrome Web Store](https://img.shields.io/chrome-web-store/v/kiibffolmdjcfgmdnmnailcpljoicjcl?logo=google-chrome&logoColor=white&label=Chrome%20Web%20Store&labelColor=4285F4&color=4285F4)](https://chromewebstore.google.com/detail/zenslugcleaner/kiibffolmdjcfgmdnmnailcpljoicjcl)

Zen Slug Cleaner 😎

Quickly copy webpage URL without SEO slug to clipboard with just one click.

## Install

### chrome web store

https://chromewebstore.google.com/detail/zenslugcleaner/kiibffolmdjcfgmdnmnailcpljoicjcl

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
この拡張機能は、「ZenSlugCleaner」を選択した際に、現在開いているタブのURLを取得するためにactiveTabの権限を使用しています。

```

scripting

```
この拡張機能は、「ZenSlugCleaner」を選択した際に、現在開いているタブ内でスクリプトを実行し、クリップボードへの書き込みや通知表示を行うためにscriptingの権限を使用しています。
これにより、ウェブページのURLをクリップボードへ書き込み、通知を表示することができます。
```

clipboardWrite

```
この拡張機能は、ウェブページのURLを、ユーザーのクリップボードに書き込むためにclipboardWriteの権限を使用しています。
これにより、ユーザーは簡単にURLを、任意の場所に貼り付けることができます。
```

リモートコード を使用していますか？

- [x] いいえ、リモートコード を使用していません
