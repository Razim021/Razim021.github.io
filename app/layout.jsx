import './globals.css';

export const metadata = {
  title: 'Razim Mammadli — AI/ML Engineer',
  description:
    'Portfolio of Razim Mammadli: M.S. ECE (ML/AI) at Duke, building LLM evaluation, NLP, and reinforcement learning systems.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
