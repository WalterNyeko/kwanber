import React from 'react';
import { shallow } from 'enzyme';
import SingleScholarshipComponent from '../../../containers/scholarships/SingleScholarshipComponent';
import Typography from '@material-ui/core/Typography';

describe('Results', () =>{

    const props = {
        classes: {}
    }
    const wrapper = shallow(
        <SingleScholarshipComponent {...props}/>
    ).dive();

    it('should render correctly', () =>{
        expect(wrapper.find(Typography)).toHaveLength(2);
    })
} );
