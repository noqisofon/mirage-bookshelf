import '@testing-library/jest-dom';
import { vi } from 'vitest';

// Mock SvelteKit's $app modules
vi.mock('$app/stores', () => ({
    page: {
        subscribe: vi.fn(),
        set: vi.fn()
    },
    navigating: {
        subscribe: vi.fn()
    },
    updated: {
        subscribe: vi.fn()
    }
}));

vi.mock('$app/navigation', () => ({
    goto: vi.fn(),
    invalidate: vi.fn(),
    invalidateAll: vi.fn(),
    beforeNavigate: vi.fn(),
    afterNavigate: vi.fn()
}));

// Mock SvelteKit's environment variables
vi.mock('$env/static/public', () => ({
    PUBLIC_BASE_URL: 'http://localhost:5173'
}));
