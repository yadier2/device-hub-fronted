
import { render, screen } from '@testing-library/react';
import DeviceList from '../components/DeviceList';


describe('DeviceList Component', () => {
    test('renders Device List title', () => {
      render(<DeviceList />);
      const titleElement = screen.getByText(/Device List/i);
      expect(titleElement).toBeInTheDocument();
    });
  });
 
