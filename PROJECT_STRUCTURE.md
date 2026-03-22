# 📁 Структура проекта Web 4.0 Bitbon System

```
web4-bitbon-project/
│
├── 📄 Configuration Files
│   ├── package.json              # Dependencies and scripts
│   ├── next.config.js            # Next.js configuration
│   ├── vercel.json               # Vercel deployment settings
│   ├── .eslintrc.json            # ESLint rules
│   ├── .nvmrc                    # Node version specification
│   ├── .editorconfig             # Editor configuration
│   ├── .gitignore                # Git ignore rules
│   └── .env.example              # Environment variables example
│
├── 📂 pages/                     # Next.js pages (routes)
│   ├── _app.js                   # Custom App component
│   ├── _document.js              # Custom Document (HTML)
│   └── index.js                  # Home page (main application)
│
├── 📂 public/                    # Static files
│   ├── favicon.ico               # Site icon
│   ├── robots.txt                # Search engine instructions
│   └── manifest.json             # PWA manifest
│
├── 📂 .github/                   # GitHub specific files
│   └── workflows/
│       └── ci.yml                # Continuous Integration workflow
│
└── 📝 Documentation
    ├── README.md                 # Main project documentation
    ├── QUICKSTART.md             # Quick start guide (5 min)
    ├── DEPLOYMENT.md             # Deployment instructions
    ├── CONTRIBUTING.md           # Contribution guidelines
    ├── PROJECT_STRUCTURE.md      # This file
    └── LICENSE                   # MIT License

```

## 🗂 Описание директорий

### `/pages`
Содержит все страницы приложения. Next.js автоматически создает маршруты на основе файлов в этой директории.

- **_app.js** - Главный компонент, оборачивающий все страницы
- **_document.js** - Кастомизация HTML структуры
- **index.js** - Домашняя страница (полное приложение)

### `/public`
Статические файлы, доступные напрямую через URL.

- Favicon
- Robots.txt для SEO
- Manifest для PWA

### `/.github/workflows`
CI/CD конфигурация для автоматических проверок при каждом push.

## 📦 Ключевые файлы

| Файл | Назначение |
|------|-----------|
| `package.json` | Зависимости и npm скрипты |
| `next.config.js` | Настройки Next.js (i18n, headers, images) |
| `vercel.json` | Конфигурация для Vercel платформы |
| `.env.example` | Пример переменных окружения |
| `.eslintrc.json` | Правила линтинга кода |

## 🚀 Быстрая навигация

- Нужно изменить контент? → `pages/index.js`
- Настроить переводы? → `pages/index.js` (объект `translations`)
- Изменить мета-теги? → `pages/_document.js`
- Добавить переменные окружения? → `.env.example`
- Настроить Vercel? → `vercel.json`

## 📊 Размер файлов

```
pages/index.js        ~160 KB   Main application
pages/_app.js         ~12 KB    App wrapper
pages/_document.js    ~2 KB     HTML template
```

## 🔄 Workflow

1. **Разработка**: Редактируете файлы в `pages/`
2. **Коммит**: `git commit -m "..."`
3. **Push**: `git push`
4. **CI**: GitHub Actions проверяет код
5. **Deploy**: Vercel автоматически деплоит

## 💡 Советы

- Все изменения UI делайте в `pages/index.js`
- Глобальные стили находятся в переменной `G` внутри `index.js`
- Компоненты можно вынести в отдельную папку `/components` при необходимости
- Картинки размещайте в `/public` и ссылайтесь как `/image.png`

---

**Структура оптимизирована для быстрого старта и масштабирования!**
