import { budget as budgetEntity } from '../domain/entities'
import { encryptPassword } from '../infrastructure/security'

import { createAddBudgetUseCase } from './add-budget'
import { createRegisterUserUseCase } from './register-user'
import { createLoginUserUseCase } from './login-user'

export const addBudgetUseCase = createAddBudgetUseCase({ budgetEntity })
export const registerUserUseCase = createRegisterUserUseCase({ encryptPassword })
export const loginUserUseCase = createLoginUserUseCase({ encryptPassword })