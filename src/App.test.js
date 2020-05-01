import React from 'react';
import ReactDOM from 'react-dom';
import {
  render,
  fireEvent,
  waitForElement,
  waitForElementToBeRemoved,
  queryByText
 } from '@testing-library/react';
import App from './App';
import ListContainer from './Components/ListContainer'
import ListEntryForm from './Components/ListEntryForm'
import ListRow from './Components/ListRow'
import RemoveToggle from './Components/RemoveToggle'


test('renders app component', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

test('rendersListContainer', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListContainer />, div);
});

test('renders ListEntryForm', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListEntryForm />, div);
});

test('renders ListRow', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListRow />, div);
});

test('renders RemoveToggle', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RemoveToggle />, div);
});

test('Add and remove a new Todo item', async () => {

  const {getByTestId, getByText, queryByText} = render(<ListContainer />);
  const entry = getByTestId('entryfield');
  const button = getByTestId('entrybutton');
  const editButton = getByTestId('editbutton');

  //Add an element to our todo list
  fireEvent.change(entry,{ target: { value: "Go to the store" } } );
  fireEvent.click(button);
  await waitForElement(()=>getByText("Go to the store"));

  //Test edit button makes it possible to delete element
  fireEvent.click(editButton);
  await waitForElement(()=>getByTestId("deletebutton"));
  const deleteButton = getByTestId("deletebutton");

  //Test delete button
  fireEvent.click(deleteButton);
  const item = queryByText('Go to the store');
  expect(item).toBeNull();

});
