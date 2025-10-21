# Инструкция по деплою на Netlify

## Быстрый старт

### 1. Подготовка репозитория

```bash
# Убедитесь, что все файлы закоммичены
git add .
git commit -m "Prepare for Netlify deployment"
git push origin main
```

### 2. Создание сайта в Netlify

1. Зайдите на [netlify.com](https://netlify.com)
2. Нажмите "New site from Git"
3. Выберите GitHub и авторизуйтесь
4. Найдите репозиторий `lexaar` и выберите его
5. Настройки деплоя:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: `18`

### 3. Настройка переменных окружения

В панели Netlify перейдите в **Site settings > Environment variables** и добавьте:

```
VITE_GA_TRACKING_ID = G-XXXXXXXXXX
VITE_FACEBOOK_PIXEL_ID = XXXXXXXXXXXXXXX
VITE_SITE_URL = https://your-site-name.netlify.app
VITE_COMPANY_PHONE = +37378907007
VITE_COMPANY_EMAIL = info@lexaar.md
```

### 4. Настройка домена (опционально)

Если у вас есть собственный домен:

1. В панели Netlify перейдите в **Domain management**
2. Нажмите "Add custom domain"
3. Добавьте ваш домен
4. Настройте DNS записи согласно инструкциям Netlify

## Автоматический деплой

После настройки каждый push в ветку `main` будет автоматически триггерить новый деплой.

## Мониторинг

- **Build logs**: Доступны в панели Netlify в разделе "Deploys"
- **Analytics**: Настройте Google Analytics и Facebook Pixel
- **Forms**: Netlify Forms для обработки контактных форм

## Оптимизация производительности

Проект уже настроен с:

- ✅ Минификация кода
- ✅ Разделение vendor библиотек
- ✅ Кэширование статических файлов
- ✅ Gzip сжатие
- ✅ Безопасные заголовки

## Troubleshooting

### Проблема: Build fails

- Проверьте Node.js версию (должна быть 18+)
- Убедитесь, что все зависимости установлены
- Проверьте логи сборки в Netlify

### Проблема: 404 на refresh

- Файл `_redirects` должен быть в папке `public/`
- Настройка `netlify.toml` должна включать redirects

### Проблема: Аналитика не работает

- Проверьте переменные окружения в Netlify
- Убедитесь, что ID аналитики правильные
- Проверьте консоль браузера на ошибки

## Полезные ссылки

- [Netlify Docs](https://docs.netlify.com/)
- [Vite Deployment](https://vitejs.dev/guide/static-deploy.html)
- [React Deployment](https://create-react-app.dev/docs/deployment/)
