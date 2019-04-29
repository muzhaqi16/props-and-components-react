import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer';

describe('Card Component',()=>{
    it('renders without crashing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<Card title="Hello world" content="The world is amazing"/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<Card title="Title" content="Sample Content"/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});