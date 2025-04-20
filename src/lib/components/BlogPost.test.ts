import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import BlogPost from './BlogPost.svelte';

describe('BlogPost Component', () => {
    it('renders with all props', () => {
        const title = 'テスト投稿';
        const description = 'これはテスト投稿の説明です。';
        const date = new Date('2024-04-18T12:00:00+09:00');
        const slug = 'test-post';
        const tags = ['テスト', 'SvelteKit', 'ブログ'];

        render(BlogPost, { title, description, date, slug, tags });

        // Check title
        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.closest('a')).toHaveAttribute('href', '/blog/posts/test-post');

        // Check date
        const dateElement = screen.getByText('2024-04-18T12:00');
        expect(dateElement).toBeInTheDocument();

        // Check description
        const descriptionElement = screen.getByText(description);
        expect(descriptionElement).toBeInTheDocument();

        // Check tags
        tags.forEach((tag) => {
            const tagElement = screen.getByText(tag);
            expect(tagElement).toBeInTheDocument();
            expect(tagElement.closest('a')).toHaveAttribute('href', `/blog/tags/${tag}`);
        });
    });

    it('renders without date and tags', () => {
        const title = '日付なし投稿';
        const description = '日付とタグのない投稿です。';
        const slug = 'no-date-post';

        render(BlogPost, { title, description, slug });

        // Check title
        const titleElement = screen.getByText(title);
        expect(titleElement).toBeInTheDocument();
        expect(titleElement.closest('a')).toHaveAttribute('href', '/blog/posts/no-date-post');

        // Check description
        const descriptionElement = screen.getByText(description);
        expect(descriptionElement).toBeInTheDocument();

        // Date should not be rendered
        const dateElements = screen.queryAllByText(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/);
        expect(dateElements.length).toBe(0);

        // Tags should not be rendered
        const tagElements = screen.queryAllByRole('link', { name: /テスト|SvelteKit|ブログ/ });
        expect(tagElements.length).toBe(0);
    });
});
