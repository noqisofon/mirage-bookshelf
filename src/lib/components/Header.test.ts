import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Header from './Header.svelte';

describe('Header Component', () => {
    it('renders with default title', () => {
        render(Header);

        const titleElement = screen.getByText('うぃーくりー・あんだーわーるど・にゅーす');
        expect(titleElement).toBeInTheDocument();

        const homeLink = screen.getByText('ホーム');
        expect(homeLink).toBeInTheDocument();
        expect(homeLink.getAttribute('href')).toBe('/');

        const blogLink = screen.getByText('ブログ');
        expect(blogLink).toBeInTheDocument();
        expect(blogLink.getAttribute('href')).toBe('/blog');

        const aboutLink = screen.getByText('このサイトについて');
        expect(aboutLink).toBeInTheDocument();
        expect(aboutLink.getAttribute('href')).toBe('/about');
    });

    it('renders with custom title', () => {
        const customTitle = 'カスタムタイトル';
        render(Header, { title: customTitle });

        const titleElement = screen.getByText(customTitle);
        expect(titleElement).toBeInTheDocument();
    });
});
