export const getMessageByErrorCode = (number) => {
    console.log('number: ', number)
    switch (number) {
        case 400:
            return 'Некорректно введены данные!';
        case 403:
            return 'Пользователь не авторизован!';
        case 404:
            return 'Не найдено!';
        case 500:
            return 'Ошибка сервера!';
        default:
            return 'Произошла ошибка!';
    }
}