import * as React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import App from '../components/App'

test('Challenge', () => {
  render(<App />)

  expect(screen.getByText('PaperTodo')).toBeVisible()

  // Add your test here

  // 1) Add a new todo list item
  // 2) Check that the item that you added is now visible on the screen
  // 3) Click the clear button
  // 4) Check that "Chill scenes." is visible, and that the item you added is not visible anymore


  const searchInput = screen.queryByPlaceholderText('New Todo'); // get input field by placeholder
 
  fireEvent.change(searchInput, { target: { value: 'test' } }); // write in input text field

  expect(searchInput.value).toBe('test'); // check if text is right

  const addButton = screen.getByText('Add'); // getting add button 

  fireEvent.click(addButton); // click add button 

  expect(screen.getByText('test')).toBeVisible();  // check if text is visible

  const clearButton = screen.getByText('Clear');
  fireEvent.click(clearButton); // click the clear button

  expect(screen.getByText('Chill scenes.')).toBeVisible(); 
  expect(screen.queryByText('test')).toBeNull() // check if text is not visible
  
})
