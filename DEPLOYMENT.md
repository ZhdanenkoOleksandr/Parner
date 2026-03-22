# 🚀 Руководство по развертыванию Web 4.0 Bitbon System

## Содержание
1. [Подготовка](#подготовка)
2. [Развертывание на Vercel](#развертывание-на-vercel)
3. [Настройка домена](#настройка-домена)
4. [Переменные окружения](#переменные-окружения)
5. [Troubleshooting](#troubleshooting)

---

## Подготовка

### 1. Загрузите код на GitHub

```bash
# Инициализируйте git репозиторий (если еще не сделано)
git init

# Добавьте все файлы
git add .

# Сделайте первый коммит
git commit -m "Initial commit: Web 4.0 Bitbon System"

# Добавьте удаленный репозиторий (создайте на GitHub сначала)
git remote add origin https://github.com/yourusername/web4-bitbon-system.git

# Загрузите код
git push -u origin main
```

### 2. Проверьте локально

```bash
# Установите зависимости
npm install

# Запустите dev сервер
npm run dev

# Откройте http://localhost:3000
# Проверьте все страницы и функции
```

---

## Развертывание на Vercel

### Способ 1: Через веб-интерфейс (Рекомендуется)

1. **Зайдите на vercel.com**
   - Создайте аккаунт или войдите
   - Подключите GitHub аккаунт

2. **Создайте новый проект**
   - Нажмите "New Project"
   - Выберите ваш репозиторий `web4-bitbon-system`
   - Vercel автоматически определит Next.js

3. **Настройте проект**
   - **Project Name**: `web4-bitbon-system` (или ваше название)
   - **Framework Preset**: Next.js (определится автоматически)
   - **Root Directory**: `./` (по умолчанию)
   - **Build Command**: `next build` (по умолчанию)
   - **Output Directory**: `.next` (по умолчанию)
   - **Install Command**: `npm install` (по умолчанию)

4. **Добавьте переменные окружения** (опционально)
   - Раздел "Environment Variables"
   - Добавьте нужные переменные из `.env.example`

5. **Разверните**
   - Нажмите "Deploy"
   - Ждите ~2-3 минуты
   - Получите URL вида `https://web4-bitbon-system.vercel.app`

### Способ 2: Через Vercel CLI

```bash
# Установите Vercel CLI
npm i -g vercel

# Войдите в аккаунт
vercel login

# Запустите развертывание
vercel

# Следуйте инструкциям:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? web4-bitbon-system
# - Directory? ./
# - Override settings? No

# Для production развертывания
vercel --prod
```

---

## Настройка домена

### Добавление кастомного домена

1. **В панели Vercel**
   - Откройте ваш проект
   - Settings → Domains
   - Нажмите "Add"

2. **Введите домен**
   - Например: `web4.yourdomain.com`
   - Следуйте инструкциям Vercel

3. **Настройте DNS**
   У вашего регистратора доменов добавьте:
   
   **Для поддомена:**
   ```
   Type: CNAME
   Name: web4 (или ваш поддомен)
   Value: cname.vercel-dns.com
   ```
   
   **Для корневого домена:**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   ```

4. **Дождитесь propagation**
   - Обычно 5-30 минут
   - SSL сертификат настроится автоматически

---

## Переменные окружения

### Обязательные переменные

```env
# В Vercel: Settings → Environment Variables
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
NEXT_PUBLIC_SITE_NAME=Web 4.0 Bitbon System
```

### Опциональные переменные

```env
# Контакты
NEXT_PUBLIC_TELEGRAM=@yourtelegram
NEXT_PUBLIC_EMAIL=your@email.com

# Аналитика (если нужна)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-id
```

### Как добавить в Vercel

1. Settings → Environment Variables
2. Добавьте каждую переменную
3. Выберите окружения (Production, Preview, Development)
4. Пере-deploy проект для применения

---

## Автоматические обновления

После настройки, каждый push в GitHub автоматически:
- Создает preview deployment для pull requests
- Деплоит на production при push в main

```bash
# Внесите изменения
git add .
git commit -m "Update: описание изменений"
git push

# Vercel автоматически задеплоит изменения
# Проверьте статус на vercel.com/dashboard
```

---

## Мониторинг и аналитика

### Встроенная аналитика Vercel

1. В проекте: Analytics tab
2. Включите Web Analytics (бесплатно)
3. Смотрите:
   - Page views
   - Visitors
   - Top pages
   - Devices and locations

### Speed Insights

1. Settings → Speed Insights
2. Включите (бесплатно до определенного лимита)
3. Получайте метрики производительности

---

## Troubleshooting

### Build Failed

**Проблема**: Build падает с ошибкой
```
Error: Build failed with exit code 1
```

**Решения**:
1. Проверьте, что проект собирается локально:
   ```bash
   npm run build
   ```

2. Проверьте версию Node.js:
   ```bash
   # Vercel использует Node 18+
   node -v  # должно быть >= 18.0.0
   ```

3. В Vercel Settings → General:
   - Node.js Version: 18.x или 20.x

### Page Not Found (404)

**Проблема**: Страница не найдена после deploy

**Решение**:
- Проверьте структуру `pages/`
- Файлы должны иметь расширение `.js`
- `pages/index.js` → домашняя страница

### Slow First Load

**Проблема**: Первая загрузка медленная

**Решения**:
1. Включите Vercel Analytics
2. Оптимизируйте изображения
3. Используйте `next/image` для картинок
4. Проверьте размер бандла

### Environment Variables Not Working

**Проблема**: Переменные окружения не подставляются

**Решения**:
1. Переменные для клиента должны начинаться с `NEXT_PUBLIC_`
2. После добавления переменных - redeploy проект
3. Проверьте правильность названий

### Custom Domain Not Working

**Проблема**: Кастомный домен не работает

**Решения**:
1. Проверьте DNS записи (может занять до 48 часов)
2. Используйте `dig yourdomain.com` для проверки
3. Убедитесь что CNAME указывает на `cname.vercel-dns.com`
4. Проверьте статус в Vercel → Domains

---

## Оптимизация производительности

### 1. Enable Image Optimization
```js
// next.config.js
module.exports = {
  images: {
    formats: ['image/webp', 'image/avif'],
  }
}
```

### 2. Enable Compression
Vercel автоматически сжимает ответы (gzip/brotli)

### 3. Use CDN
Vercel Edge Network распределяет контент глобально

### 4. Monitoring
- Регулярно проверяйте Analytics
- Следите за Speed Insights
- Оптимизируйте медленные страницы

---

## Дополнительные ресурсы

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Support](https://vercel.com/support)

---

## Контрольный список развертывания

- [ ] Код загружен на GitHub
- [ ] Проект проверен локально (`npm run dev`)
- [ ] Создан проект в Vercel
- [ ] Успешно задеплоен на Vercel
- [ ] Проверена работа на staging URL
- [ ] Добавлены переменные окружения
- [ ] Настроен кастомный домен (если нужно)
- [ ] SSL сертификат активирован
- [ ] Включена аналитика
- [ ] Проверена производительность
- [ ] Настроены автоматические деплои

---

**Успешного развертывания! 🚀**

Если возникнут вопросы - обращайтесь в поддержку Vercel или создайте issue в репозитории.
