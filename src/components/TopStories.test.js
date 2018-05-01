import React from 'react';
import TopStories from './TopStories';
import Story from './Story';
import {hackernews} from '../api';
import sinon from 'sinon';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import {mount, shallow} from 'enzyme';


describe('(Articles Test) ', function () {
  let _component;

  beforeEach(function () {
    sinon.stub(hackernews, 'getTopStories').resolves([{
      title: 'moo',
      comments: ['hai world']
    }]);
  });

  afterEach(function () {
    hackernews.getTopStories.restore();
  });

  it('Component should getTopStories from our hackernews api', function() {
    _component = mount(
      <TopStories />
    );
    expect(hackernews.getTopStories.called).toEqual(true);
  });

  it('Component should render a Stories based on topStories state', function() {
    _component = shallow(
      <TopStories />
    );
    _component.setState({topStories: [{title:'foo', comments:['poo coomments']}]});
    expect(_component.find(Story).length).toEqual(1);
  });

});
