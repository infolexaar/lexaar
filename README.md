# LexAar - Mobila la comandă în Moldova

Простая визитка для мебельной компании LexAar в Молдове.

## Что включено

- **Лендинг страница** с информацией о компании
- **Контактная форма** для заявок
- **SEO оптимизация** для румынского языка
- **Адаптивный дизайн** для всех устройств
- **Аналитика** (Google Analytics + Facebook Pixel)

## Настройка

### 1. Аналитика

Замените ID в `/src/utils/analytics.ts`:

```typescript
export const GA_TRACKING_ID = "G-XXXXXXXXXX"; // Ваш GA4 ID
export const FACEBOOK_PIXEL_ID = "XXXXXXXXXXXXXXX"; // Ваш Facebook Pixel ID
```

### 2. Отправка писем

Настройте Firebase Functions для отправки писем на infolexaar@gmail.com:

- Подробная инструкция в файле `FIREBASE_SETUP.md`
- Деплой Firebase Functions
- Настройка Gmail App Password

### 3. Домен

Обновите домен с `lexaar.md` на ваш реальный домен в:

- `index.html` (Open Graph метатеги)

## Запуск

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Деплой на Netlify

1. Подключите репозиторий к Netlify
2. Настройте переменные окружения (см. `DEPLOY.md`)
3. Автоматический деплой при каждом push в main

Подробная инструкция в файле `DEPLOY.md`

## Структура проекта

```
src/
├── components/          # React компоненты
│   ├── ContactModal.tsx # Модальное окно формы
│   ├── Header.tsx       # Шапка сайта
│   └── Hero.tsx         # Главная секция
├── assets/              # Изображения и иконки
│   ├── icons/           # SVG иконки
│   ├── header.svg       # Главное изображение
│   └── backgrContact.svg # Фон модального окна
├── types/               # TypeScript типы
│   └── index.ts         # Интерфейсы компонентов
├── constants/           # Константы проекта
│   └── index.ts         # Данные компании, цвета, брейкпоинты
├── hooks/               # Кастомные хуки
│   └── useModal.ts      # Хук для управления модалками
├── utils/               # Утилиты
│   └── analytics.ts     # Настройка аналитики
├── App.tsx              # Главный компонент
├── App.css              # Основные стили
├── index.css            # Глобальные стили (Tailwind)
└── main.tsx             # Точка входа
```

## Особенности

- **SEO**: Оптимизировано для поиска в Молдове
- **Язык**: Румынский (ro)
- **Ключевые слова**: мебель на заказ, кухни Молдова
- **Аналитика**: Отслеживание форм и кнопок
- **Типизация**: Полная поддержка TypeScript
- **Архитектура**: Чистая структура с разделением ответственности
