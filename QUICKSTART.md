# 🚀 Быстрый старт Web 4.0 Bitbon System

## За 5 минут до запуска

### Шаг 1: Скачайте проект
```bash
# Распакуйте архив
unzip web4-bitbon-project.zip
cd web4-bitbon-project

# Или клонируйте с GitHub
git clone https://github.com/yourusername/web4-bitbon-system.git
cd web4-bitbon-system
```

### Шаг 2: Установите зависимости
```bash
npm install
```

### Шаг 3: Запустите локально
```bash
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) 🎉

---

## Развертывание на Vercel (5 минут)

### Вариант А: Через GitHub (рекомендуется)

1. **Загрузите на GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/web4-bitbon-system.git
   git push -u origin main
   ```

2. **Подключите к Vercel**
   - Идите на [vercel.com](https://vercel.com)
   - Нажмите "New Project"
   - Выберите ваш репозиторий
   - Нажмите "Deploy" ✅

### Вариант Б: Через Vercel CLI

```bash
# Установите CLI
npm i -g vercel

# Разверните
vercel

# Для production
vercel --prod
```

---

## Что дальше?

### Настройте проект

1. **Обновите контакты**
   - Откройте `pages/index.js`
   - Найдите секцию контактов
   - Замените на свои данные

2. **Настройте переменные окружения**
   ```bash
   # Скопируйте пример
   cp .env.example .env.local
   
   # Отредактируйте значения
   nano .env.local
   ```

3. **Добавьте свой домен** (опционально)
   - В Vercel: Settings → Domains
   - Добавьте свой домен
   - Настройте DNS

### Кастомизация

- 🎨 **Дизайн**: Редактируйте стили в `pages/index.js`
- 📝 **Контент**: Обновите тексты и переводы
- 🌐 **Языки**: Добавьте новые в объект `translations`
- 📧 **Форма**: Настройте отправку заявок

---

## Полезные команды

```bash
npm run dev      # Локальная разработка
npm run build    # Сборка для production
npm run start    # Запуск production сервера
npm run lint     # Проверка кода
```

---

## Нужна помощь?

- 📖 Полная документация: [README.md](README.md)
- 🚀 Развертывание: [DEPLOYMENT.md](DEPLOYMENT.md)
- 🤝 Участие: [CONTRIBUTING.md](CONTRIBUTING.md)
- 💬 Issues: [GitHub Issues](https://github.com/yourusername/web4-bitbon-system/issues)

---

**Готово! Ваш проект Web 4.0 запущен!** 🎉
