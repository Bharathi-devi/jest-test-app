import { italics } from 'prop-types/lib/ReactPropTypesSecret';
import React from 'react';
import {findByTestAttr, checkProps} from './../../../Utils/index';
import SharedButton from './index';
import {shallow} from 'enzyme';
describe('shared Button component',()=>
{
    describe('Checking propTypes',()=>
    {
        it('Should NOT throw a warning',()=>
        {
            const expectedProps={
                buttonText:'Example Button Text',
                emitEvent:()=>{

                }
            };
            const propsError=checkProps(SharedButton,expectedProps);
            expect(propsError).toBeUndefined
        })
    })

    describe('Renders',()=>
    {
        const props={
            buttonText:'Example Button Text',
            emitEvent:()=>{

            }};
        let component;
        beforeEach(()=>
        {
          component=shallow(<SharedButton  {...props}/>);
        });

        it('Should render a button',()=>
        {
            const button =findByTestAttr(component, 'buttonComponent');
            expect(button.length).toBe(1);
        });
    })
})