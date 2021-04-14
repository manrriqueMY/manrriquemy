import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

const resumeData = {
  en: {
    main: {
      name: 'Manrrique Meneses Yaranga',
      occupation: 'Systems Engineer | Full-Stack Developer',
      description: 'Results-driven developer with over 10 years of experience.',
      bio: 'Systems Engineer and Full-Stack Developer with over 10 years of experience.',
      contactmessage: 'Let’s connect.',
      email: 'manrrique.my@gmail.com',
      phone: '+51 910 103 845',
      address: { city: 'Lima', state: 'Peru' },
      resumedownload: '#',
      social: [
        { name: 'WhatsApp', url: 'https://wa.me/51910103845', className: 'fab fa-whatsapp' },
        { name: 'Telegram', url: 'https://t.me/manrriquemy', className: 'fab fa-telegram' }
      ]
    },
    resume: {
      skillmessage: '',
      education: [],
      work: [],
      skills: { cloudServices: ['AWS'] },
      languages: []
    },
    portfolio: { heading: '', projects: [] }
  },
  es: {
    main: {
      name: 'Manrrique Meneses Yaranga',
      occupation: 'Ingeniero de Sistemas | Desarrollador Full-Stack',
      description: 'Desarrollador con más de 10 años de experiencia.',
      bio: 'Ingeniero de Sistemas con más de 10 años de experiencia.',
      contactmessage: 'Conversemos.',
      email: 'manrrique.my@gmail.com',
      phone: '+51 910 103 845',
      address: { city: 'Lima', state: 'Perú' },
      resumedownload: '#',
      social: [
        { name: 'WhatsApp', url: 'https://wa.me/51910103845', className: 'fab fa-whatsapp' },
        { name: 'Telegram', url: 'https://t.me/manrriquemy', className: 'fab fa-telegram' }
      ]
    },
    resume: {
      skillmessage: '',
      education: [],
      work: [],
      skills: { cloudServices: ['AWS'] },
      languages: []
    },
    portfolio: { heading: '', projects: [] }
  }
};
const originalFetch = global.fetch;

beforeEach(() => {
  global.fetch = jest.fn().mockResolvedValue({
    json: async () => resumeData
  });
});

afterEach(() => {
  if (originalFetch) {
    global.fetch = originalFetch;
  } else {
    delete global.fetch;
  }
});

test('shows the English CV by default', async () => {
  const { container } = render(<App />);

  expect(await screen.findByRole('heading', { name: 'About Me' })).toBeInTheDocument();
  expect(screen.getByText('Cloud Services')).toBeInTheDocument();
  expect(screen.getByText('Results-driven developer with over 10 years of experience.')).toBeInTheDocument();
  expect(container.querySelector('.skill-icon')).toHaveAttribute('src', '/images/devops/aws.png');
  expect(screen.getAllByRole('link', { name: 'WhatsApp' })).toHaveLength(2);
  expect(screen.getAllByRole('link', { name: 'Telegram' })).toHaveLength(2);
  expect(screen.getAllByRole('link', { name: 'WhatsApp' })[0]).toHaveAttribute('href', 'https://wa.me/51910103845');
  expect(screen.getAllByRole('link', { name: 'Telegram' })[0]).toHaveAttribute('href', 'https://t.me/manrriquemy');
  expect(screen.queryByText(/skype/i)).not.toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute('lang', 'en');
});

test('switches the CV content to Spanish', async () => {
  render(<App />);

  fireEvent.click(await screen.findByRole('button', { name: 'Spanish' }));

  expect(await screen.findByRole('heading', { name: 'Sobre mí' })).toBeInTheDocument();
  expect(screen.getByText('Servicios en la nube')).toBeInTheDocument();
  expect(screen.getByText('Desarrollador con más de 10 años de experiencia.')).toBeInTheDocument();
  expect(document.documentElement).toHaveAttribute('lang', 'es');
});
