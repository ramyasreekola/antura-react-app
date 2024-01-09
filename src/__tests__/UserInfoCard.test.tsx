import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserInfoCard from '../components/UserInfoCard';
import '@testing-library/jest-dom';
import { userData } from '../mocks/mockData';

describe('UserInfoCard', () => {


  it('renders user information correctly', () => {
    render(<UserInfoCard {...userData} />);

    expect(screen.getByText('Miss. Elifaza Oliveira')).toBeInTheDocument();
    expect(screen.getByText('Address: Rua Doze 5121, Belo Horizonte')).toBeInTheDocument();
    expect(screen.getByText('Amazonas, 20151, Brazil')).toBeInTheDocument();
    expect(screen.getByText('Email: elifaza.oliveira@example.com')).toBeInTheDocument();
    expect(screen.getByText('Phone: (43) 6191-9217')).toBeInTheDocument();
  });

  it('shows a loading spinner before image load', () => {
    render(<UserInfoCard {...userData} />);

    expect(screen.getByRole('progressbar')).toBeInTheDocument();
  });

});
