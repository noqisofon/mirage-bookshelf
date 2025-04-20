import { render, screen } from '@testing-library/svelte';
import { describe, expect, it } from 'vitest';
import Pagination from './Pagination.svelte';

describe('Pagination Component', () => {
    it('renders pagination with prev and next links', () => {
        render(Pagination, { currentPage: 2, totalPages: 5 });

        // Check page info
        const pageInfo = screen.getByText('ページ 2 / 5');
        expect(pageInfo).toBeInTheDocument();

        // Check prev link
        const prevLink = screen.getByText('前のページ');
        expect(prevLink).toBeInTheDocument();
        expect(prevLink).toHaveAttribute('href', '?page=1');

        // Check next link
        const nextLink = screen.getByText('次のページ');
        expect(nextLink).toBeInTheDocument();
        expect(nextLink).toHaveAttribute('href', '?page=3');
    });

    it('renders pagination with only next link on first page', () => {
        render(Pagination, { currentPage: 1, totalPages: 3 });

        // Check page info
        const pageInfo = screen.getByText('ページ 1 / 3');
        expect(pageInfo).toBeInTheDocument();

        // Prev link should not be rendered
        const prevLink = screen.queryByText('前のページ');
        expect(prevLink).not.toBeInTheDocument();

        // Check next link
        const nextLink = screen.getByText('次のページ');
        expect(nextLink).toBeInTheDocument();
        expect(nextLink).toHaveAttribute('href', '?page=2');
    });

    it('renders pagination with only prev link on last page', () => {
        render(Pagination, { currentPage: 3, totalPages: 3 });

        // Check page info
        const pageInfo = screen.getByText('ページ 3 / 3');
        expect(pageInfo).toBeInTheDocument();

        // Check prev link
        const prevLink = screen.getByText('前のページ');
        expect(prevLink).toBeInTheDocument();
        expect(prevLink).toHaveAttribute('href', '?page=2');

        // Next link should not be rendered
        const nextLink = screen.queryByText('次のページ');
        expect(nextLink).not.toBeInTheDocument();
    });

    it('does not render pagination when totalPages is 1', () => {
        const { container } = render(Pagination, { currentPage: 1, totalPages: 1 });

        // Pagination container should not be rendered
        const paginationContainer = container.querySelector('.mt-8.flex.justify-center.space-x-4');
        expect(paginationContainer).not.toBeInTheDocument();
    });

    it('uses custom baseUrl when provided', () => {
        render(Pagination, { currentPage: 2, totalPages: 5, baseUrl: '/blog' });

        // Check prev link with baseUrl
        const prevLink = screen.getByText('前のページ');
        expect(prevLink).toHaveAttribute('href', '/blog?page=1');

        // Check next link with baseUrl
        const nextLink = screen.getByText('次のページ');
        expect(nextLink).toHaveAttribute('href', '/blog?page=3');
    });
});
