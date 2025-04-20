import '@testing-library/jest-dom';
import { vi } from 'vitest';
import { cleanup } from '@testing-library/svelte';

// Mock process object for browser environment
if (typeof window !== 'undefined') {
    (window as any).process = {
        env: {
            NODE_ENV: 'test'
        }
    } as unknown as NodeJS.Process;
}

// Cleanup after each test
afterEach(() => {
    cleanup();
});

// Mock SvelteKit's $app modules
vi.mock('$app/stores', () => ({
    page: {
        subscribe: vi.fn(() => () => {}),
        set: vi.fn()
    },
    navigating: {
        subscribe: vi.fn(() => () => {})
    },
    updated: {
        subscribe: vi.fn(() => () => {})
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

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: vi.fn(),
        removeListener: vi.fn(),
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
        dispatchEvent: vi.fn()
    }))
});

// Mock Svelte's browser environment
vi.mock('svelte', async () => {
    const actual = await vi.importActual('svelte');
    return {
        ...actual,
        browser: true
    };
});
