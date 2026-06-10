import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import HeroSection from '@/components/HeroSection';

describe('HeroSection', () => {
  it('renders the company tagline', () => {
    render(<HeroSection />);
    expect(screen.getByText(/Building Strong Foundations/i)).toBeInTheDocument();
    expect(screen.getByText(/Pioneering Growth/i)).toBeInTheDocument();
  });
});
