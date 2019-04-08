import nfetch from 'node-fetch'
import { createBudgetGateway } from './budget'
import { createUserGateway } from './user'

const baseUrl = 'http://localhost:8081'
const _fetch = typeof window === 'undefined' ? nfetch : fetch

const budgetGateway = createBudgetGateway({ baseUrl, fetch: _fetch })
const userGateway = createUserGateway({ baseUrl, fetch })

export {
    budgetGateway,
    userGateway
}