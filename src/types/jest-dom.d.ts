import '@testing-library/jest-dom';

declare global {
    namespace jest {
        interface Matchers<R> {
            toBeInTheDocument(): R;
            toHaveAttribute(attr: string, value?: string): R;
            toHaveClass(className: string): R;
            toHaveStyle(style: Record<string, any>): R;
            toBeVisible(): R;
            toBeDisabled(): R;
            toBeEnabled(): R;
            toHaveTextContent(text: string | RegExp): R;
            toHaveValue(value: string | string[] | number): R;
        }
    }
}
