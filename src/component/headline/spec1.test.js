import React from 'react';
import {shallow} from 'enzyme';
import {findByTestAttr,checkProps} from './../../../Utils';
import Headline from './index';

const setUp=(props)=>
    {
      const component= shallow(<Headline {...props}/>)
      return component;
    };

describe('Headline Component',()=>{
    const expectedProps={
        header:'Test header',
        desc:'Test Desc',
        tempArr:[{
            fname:'Test fnbame',
            lName:'test Lname',
            email:'test@email.com',
            age:20,
            onlineStatus:false
        }]
    };

   describe('checking Proptypes',()=>
   {
    
      
       it('Should not throw a warning',()=>
       {
         const propsErr=checkProps(Headline,expectedProps);
         expect(propsErr).toBeUndefined();


       });
   })

    describe('Have props',()=>
    {
        let component1;
     beforeEach(()=>{
         
         
         component1= setUp(expectedProps);
     });

    it('Should render without errors',()=>
    {
       const wrapper=findByTestAttr(component1, 'headlineComponent'); 
       expect(wrapper.length).toBe(1);

    });
    it('Should render a H1',()=>
    {
     const h1= findByTestAttr(component1,'header');
     expect(h1.length).toBe(1);

    });
    it('Should render description',()=>
    {
        const desc=findByTestAttr(component1,'description');
        expect(desc.length).toBe(1);
    })




    });

    describe('Have NO props',()=>
    {
       let component;
        // beforeEach(()=>
        // {
        //     component=setUp();
        // })
    });
})


