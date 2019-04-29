import React from 'react';
import ReactDOM from 'react-dom';
import List from './List';
import renderer from 'react-test-renderer';
import STORE from './store';

describe('List Component',()=>{
    it('renders without crashing',()=>{
        const div = document.createElement('div');
        ReactDOM.render(<List header="List Header" cards={[{ title: 'First card', content: 'lorem ipsum' }]}/>,div);
        ReactDOM.unmountComponentAtNode(div);
    });
    it('renders the UI as expected', () => {
        const tree = renderer
        .create(<List header="List Header" cards={[{ title: 'First card', content: 'lorem ipsum' }]}/>)
        .toJSON();
        expect(tree).toMatchSnapshot();  
    });
});