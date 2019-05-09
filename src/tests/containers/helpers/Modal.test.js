import React from 'react';
import { shallow } from 'enzyme';
import { Modal } from 'antd';
import TheModal from '../../../containers/helpers/Modal';

describe('Modal', () =>{

    const wrapper = shallow(<TheModal/>);
    it('should render modal component', () =>{
        expect(wrapper.find(Modal)).toHaveLength(1);
    })

    it('should call handleOk', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleOk');
        wrapper.instance().handleOk();
        expect(spy).toHaveBeenCalled();
    })

    it('should call handleCancel', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'handleCancel');
        wrapper.instance().handleCancel();
        expect(spy).toHaveBeenCalled();
    })

    it('should call showModal', () =>{
        const spy = jest.spyOn(wrapper.instance(), 'showModal');
        wrapper.instance().showModal();
        expect(spy).toHaveBeenCalled();
    })
} )