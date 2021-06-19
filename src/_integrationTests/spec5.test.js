import moxios from 'moxios';
import {testStore} from './../../Utils';
import {fetchPosts} from './../actions';

describe('fetchPosts action', ()=>
{
   
    beforeEach(()=>
    {
        moxios.install();

    })
    afterEach(()=>
    {
        moxios.uninstall();
    })
    test('Store is updated corretly',()=>
        {
            const expectedState=[{ 
                title : 'Example title 1',
                body:'Some Text'

            },
            { 
                title : 'Example title 2',
                body:'Some Text 2'

            },
            { 
                title : 'Example title 3',
                body:'Some Text 3'

            }];
            const store= testStore();

            moxios.wait(()=> {
             const request = moxios.requests.mostRecent();
             request.respondWith({
                 status:200,
                 response: expectedState

             })
            });
            return store.dispatch(fetchPosts()).then(()=>
            {
                const newState= store.getState();
                expect(newState.posts).toBe(expectedState);
            })


        })

})