import App from './App';
import {shallow} from 'enzyme';
import {findByTestAttr, testStore}from './../Utils';
import React from 'react';


const setUp = (initialState={})=>
{
    const store = testStore(initialState);
    const component = shallow(<App store={store} />).childAt(0).dive();
    // console.log(component.debug());
    return component;
}

describe('App Component', ()=>
{
    let component;
    beforeEach(()=>
    {
        const initialState={
            posts:[{
                title: 'Title 1',
                body: 'some text'
            }, 
            {
                title: 'Title 2',
                body: 'some text'
            },
            {
                title: 'Title 3',
                body: 'some text'
            }]
        }
        component= setUp(initialState);
    })

    it('Should render without errors', ()=>
    {
        const wrapper= findByTestAttr(component, 'appComponent');
         expect(wrapper.length).toBe(1);
    })

     it('exampleMethod_updatesstate methos should update state as expected',()=>
     {
         const classInstance = component.instanace();
         classInstance.exampleMethod_updatesstate();
         const newState= classInstance.state.hideSharedButton;
         expect(newState).toBe(true);

     })

     
     it('exampleMethod_updateNumer methos should update number as expected',()=>
     {
         const classInstance = component.instanace();
   const newValue =classInstance.exampleMethod_updateNumer(6);
         
         expect(newValue).toBe(7);

     })







})
