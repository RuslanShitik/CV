import {body} from 'express-validator'

export const createProjectValidator = [
    body('name', "Имя не может быть короче 3 символов").isLength({min: 3}),
    body('gitLink').optional().isURL(),
    body('description').isLength({max:500})
]