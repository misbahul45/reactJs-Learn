import { describe, expect, it } from 'vitest'

//concurrent it using for get result with same time or it will run simultaneously

describe('conqueror', () => {
    it.concurrent('await same 1', async() => {
        await new Promise((resolve)=>setTimeout(resolve,1000))
        expect(1).toBe(1)
    });
    it.concurrent('await same 2', async() => {
        await new Promise((resolve)=>setTimeout(resolve,1000))
        expect(1).toBe(1)
    });
    it.concurrent('await same 3', async() => {
        await new Promise((resolve)=>setTimeout(resolve,1000))
        expect(1).toBe(1)
    });
})
