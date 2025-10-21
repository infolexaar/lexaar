# Настройка Firebase для отправки писем

## Шаг 1: Установка Firebase CLI

```bash
npm install -g firebase-tools
firebase login
```

## Шаг 2: Настройка Gmail App Password

1. Зайдите в настройки Google аккаунта infolexaar@gmail.com
2. Перейдите в "Безопасность" → "Пароли приложений"
3. Создайте новый пароль приложения для "Почта"
4. Скопируйте сгенерированный пароль

## Шаг 3: Настройка переменных окружения Firebase

```bash
firebase functions:config:set gmail.app_password="YOUR_GMAIL_APP_PASSWORD"
```

## Шаг 4: Деплой Firebase Functions

```bash
# В корневой папке проекта
cd functions
npm install
cd ..
firebase deploy --only functions
```

## Шаг 5: Настройка Firestore

```bash
firebase deploy --only firestore:rules,firestore:indexes
```

## Шаг 6: Обновление URL в коде

После деплоя обновите URL в `/src/services/firebaseEmailService.ts`:

```typescript
const FIREBASE_FUNCTIONS_URL =
  "https://us-central1-lexaar-857b0.cloudfunctions.net";
```

## Шаг 7: Тестирование

1. Запустите проект локально
2. Заполните форму
3. Проверьте, пришло ли письмо на infolexaar@gmail.com
4. Проверьте логи в Firebase Console

## Структура Firebase Functions

### sendContactEmail

- **URL**: `/sendContactEmail`
- **Метод**: POST
- **Параметры**: `{ name, phone, email, message }`
- **Действие**: Отправляет email на infolexaar@gmail.com

### getContactRequests

- **URL**: `/getContactRequests`
- **Метод**: GET
- **Действие**: Возвращает последние 50 заявок

## Мониторинг

### Firebase Console

- **Functions**: Мониторинг выполнения функций
- **Firestore**: Просмотр заявок клиентов
- **Logs**: Логи ошибок и успешных отправок

### Логирование

Все заявки сохраняются в Firestore коллекции `contact_requests`:

- Успешные отправки
- Ошибки отправки
- Метаданные (время, IP и т.д.)

## Безопасность

### Firestore Rules

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /contact_requests/{document} {
      allow read, write: if true; // Для демо - в продакшене добавить аутентификацию
    }
  }
}
```

### CORS

Настроен CORS для разрешения запросов с вашего домена.

## Troubleshooting

### Письма не приходят:

1. Проверьте Gmail App Password
2. Проверьте логи Firebase Functions
3. Убедитесь, что функция задеплоена

### Ошибки в консоли:

1. Проверьте URL Firebase Functions
2. Проверьте настройки CORS
3. Проверьте переменные окружения

### Ошибки деплоя:

1. Убедитесь, что Firebase CLI установлен
2. Проверьте авторизацию: `firebase login`
3. Проверьте проект: `firebase use lexaar-857b0`

## Преимущества Firebase подхода:

✅ **Прямая отправка** без посредников
✅ **Надежность** Google инфраструктуры  
✅ **Логирование** всех заявок в Firestore
✅ **Масштабируемость** автоматическая
✅ **Безопасность** Google Cloud
✅ **Мониторинг** в реальном времени
