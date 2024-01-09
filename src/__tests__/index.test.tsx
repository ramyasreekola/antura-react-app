import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import { getUser } from '../api/user';
import '@testing-library/jest-dom'; 
import {userData as user} from '../mocks/mockData';

jest.mock('../api/user', () => ({
  getUser: jest.fn(),
}));

describe('Home Page', () => {
  it('renders the home page with initial data', () => {
    
    render(<Home initialUser={user} />);

    expect(screen.getByText('Hello Antura!')).toBeInTheDocument();
    expect(screen.getByText('Generate New User')).toBeInTheDocument();
    expect(screen.getByText('Miss. Elifaza Oliveira')).toBeInTheDocument();
  });
});
