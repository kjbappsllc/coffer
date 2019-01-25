import { budget as budgetEntity } from '../../../domain/entities'
import { encryptPassword } from '../infrastructure/security'

import { createAddBudgetUseCase } from './add-budget'
import { createAddSecurePasswordUseCase } from './add-secure-password'

const addBudgetUseCase = createAddBudgetUseCase({ budgetEntity })
const addSecurePasswordUseCase = createAddSecurePasswordUseCase({ encryptPassword })

export {
    addBudgetUseCase,
    addSecurePasswordUseCase
}