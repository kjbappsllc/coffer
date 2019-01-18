import { createBudgetGateway } from './budget'
import nfetch from 'node-fetch'

const baseUrl = 'http://localhost:8081'
const _fetch = typeof window === 'undefined' ? nfetch : fetch
const budgetGateway = createBudgetGateway({ baseUrl, fetch: _fetch })

export {
    budgetGateway
}