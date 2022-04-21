import { assert, describe, it } from 'vitest'
describe('first test', () => { 
      it('should be 4', ()=> {
            const two = 2,
            result = 4;
  
            assert.equal(two*2,result)
      })
 })