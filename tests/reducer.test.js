/**
 * Created by apple12 on 2016/11/27.
 */
import { combinedReducer } from '../js/reducer'

test("how reducer works", ()=>{
    const originalState = {};
    const action = {
        type: 'ACTORS',
        actors: {
            "best_femine": "Lori"
        }
    };
    const resultState = {
        film: {},
        actors: {
            "best_femine": "Lori1"
        },
    };
    const received = JSON.stringify(combinedReducer(originalState, action));
    const expected = JSON.stringify(resultState);
    expect(received).toBe(expected);
});