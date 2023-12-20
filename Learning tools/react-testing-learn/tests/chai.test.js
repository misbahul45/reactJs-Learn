import {describe, expect, it} from 'vitest'
const halloWorld=(name)=>{
    return "hallo "+ name
}

describe('halloWorld', () => {
    it('should return string', () => {
        expect (halloWorld("misbahul")).to.be.a("string","hallo misbahul")
    });
    
})
