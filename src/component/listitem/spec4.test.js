import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr, checkProps} from './../../../Utils';
import ListItem from './index';
describe('ListItem Component',()=>
{

    const props={
        title:'Test title',
        desc:'Test Description'
    };
    describe('Checking PropTypes',()=>
    {

        it ('Should not throw error',()=>{
        
        const propsError = checkProps(ListItem,props);
        expect(propsError).toBeUndefined;
    })})

    describe('renders with props',()=>
    {
        let component;
        beforeEach(()=>
        {
            component=shallow(<ListItem {...props}/>);
        })

        it('Should render correctly', ()=>
        {
            const wrapper= findByTestAttr(component, 'listItemComponent');
            expect(wrapper.length).toBe(1);
        });

        it('Should render a title',()=>
        {

            const h1= findByTestAttr(component,'componentTitle');
            expect(h1.length).toBe(1);

        });
        it('Should render a desc',()=>
        {
            const p= findByTestAttr(component, 'componentDesc');
            expect(p.length).toBe(1);
        });

        
    });



})