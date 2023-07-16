import {body} from 'express-validator'

export const createProjectValidator = [
    body('name', "Имя не может быть короче 3 символов").isLength({min: 3}),
    body('gitLink', "Введена некорректная ссылка").optional().isURL(),
    body('description', "Описание не может содержать больше чем 500 символов").isLength({max:500})
]