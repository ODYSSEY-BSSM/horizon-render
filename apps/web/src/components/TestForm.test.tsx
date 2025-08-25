import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TestForm } from './TestForm';

describe('TestForm', () => {
  it('renders form fields correctly', () => {
    render(<TestForm />);

    expect(screen.getByLabelText('이름')).toBeInTheDocument();
    expect(screen.getByLabelText('이메일')).toBeInTheDocument();
    expect(screen.getByLabelText('나이')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '제출' })).toBeInTheDocument();
  });

  it('shows validation errors for empty required fields', async () => {
    const user = userEvent.setup();
    render(<TestForm />);

    const submitButton = screen.getByRole('button', { name: '제출' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('이름은 필수입니다')).toBeInTheDocument();
    });
  });

  it('shows email validation error for invalid email', async () => {
    const user = userEvent.setup();
    render(<TestForm />);

    const emailInput = screen.getByLabelText('이메일');
    await user.type(emailInput, 'invalid-email');
    await user.tab(); // trigger blur to activate validation

    await waitFor(() => {
      expect(screen.getByText('올바른 이메일 주소를 입력해주세요')).toBeInTheDocument();
    });
  });

  it('shows age validation error for invalid age', async () => {
    const user = userEvent.setup();
    render(<TestForm />);

    const ageInput = screen.getByLabelText('나이');
    await user.type(ageInput, '0');

    const submitButton = screen.getByRole('button', { name: '제출' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('나이는 1 이상이어야 합니다')).toBeInTheDocument();
    });
  });

  it('submits form with valid data', async () => {
    const user = userEvent.setup();
    const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
    const alertSpy = vi.spyOn(window, 'alert').mockImplementation(() => {});

    render(<TestForm />);

    await user.type(screen.getByLabelText('이름'), '홍길동');
    await user.type(screen.getByLabelText('이메일'), 'hong@example.com');
    await user.type(screen.getByLabelText('나이'), '25');

    const submitButton = screen.getByRole('button', { name: '제출' });
    await user.click(submitButton);

    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith('폼 데이터:', {
        name: '홍길동',
        email: 'hong@example.com',
        age: 25,
      });
      expect(alertSpy).toHaveBeenCalled();
    });

    consoleSpy.mockRestore();
    alertSpy.mockRestore();
  });

  it('clears validation errors when user corrects input', async () => {
    const user = userEvent.setup();
    render(<TestForm />);

    // First trigger validation error
    const emailInput = screen.getByLabelText('이메일');
    await user.type(emailInput, 'invalid');
    await user.tab(); // trigger blur to activate validation

    await waitFor(() => {
      expect(screen.getByText('올바른 이메일 주소를 입력해주세요')).toBeInTheDocument();
    });

    // Then correct the input
    await user.clear(emailInput);
    await user.type(emailInput, 'valid@example.com');
    await user.tab(); // trigger blur to revalidate

    await waitFor(() => {
      expect(screen.queryByText('올바른 이메일 주소를 입력해주세요')).not.toBeInTheDocument();
    });
  });
});
