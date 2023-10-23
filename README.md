# ddns4cdn-ui [![wakatime](https://wakatime.com/badge/github/jat001/ddns4cdn-ui.svg)](https://wakatime.com/@Jat/projects/yqdefmspgs)

## VS Code

### Recommended Extensions

See [`.vscode/extensions.json`](.vscode/extensions.json).

### Recommended Settings

`.vscode/settings.json`

```json
{
  "editor.codeActionsOnSave": [
    "source.organizeImports",
    "source.formatDocument",
    "source.fixAll.eslint",
    "source.fixAll.stylelint"
  ],
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": false,
  "eslint.format.enable": true,
  "prettier.semi": false,
  "prettier.singleQuote": true,
  "stylelint.snippet": ["css", "html", "postcss", "scss", "vue"],
  "stylelint.validate": ["css", "html", "postcss", "scss", "vue"],
}
```

prettier, eslint and stylelint configs can be found in [`package.json`](package.json).

Formatting order: organize imports (built-in features) -> default formatter (prettier) -> eslint -> stylelint
