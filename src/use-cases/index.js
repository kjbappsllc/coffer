import { budget as budgetEntity } from '../domain/entities'
import { encryptPassword } from '../infrastructure/security'

import { createAddBudgetUseCase } from './add-budget'
import { createRegisterUserUseCase } from './register-user'

const addBudgetUseCase = createAddBudgetUseCase({ budgetEntity })
const registerUserUseCase = createRegisterUserUseCase({ encryptPassword })

export {
    addBudgetUseCase,
    registerUserUseCase
}