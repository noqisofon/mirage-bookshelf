import { test, expect } from '@playwright/test';

test('home page has correct title and navigation', async ({ page }) => {
    await page.goto('/');

    // Check page title
    await expect(page).toHaveTitle(/うぃーくりー・あんだーわーるど・にゅーす/);

    // Check navigation links
    const homeLink = page.getByRole('link', { name: 'ホーム' });
    await expect(homeLink).toBeVisible();
    await expect(homeLink).toHaveAttribute('href', '/');

    const blogLink = page.getByRole('link', { name: 'ブログ' });
    await expect(blogLink).toBeVisible();
    await expect(blogLink).toHaveAttribute('href', '/blog');

    const aboutLink = page.getByRole('link', { name: 'このサイトについて' });
    await expect(aboutLink).toBeVisible();
    await expect(aboutLink).toHaveAttribute('href', '/about');
});

test('blog page shows posts with pagination', async ({ page }) => {
    await page.goto('/blog');

    // Check page title
    await expect(page).toHaveTitle(/Blog Posts/);

    // Check if posts are displayed
    const posts = page.locator('article');
    await expect(posts).toHaveCount(5); // Assuming 5 posts per page

    // Check if pagination is visible
    const pagination = page.locator('.flex.justify-center.space-x-4');
    await expect(pagination).toBeVisible();

    // Check if "次のページ" link exists
    const nextPageLink = page.getByRole('link', { name: '次のページ' });
    await expect(nextPageLink).toBeVisible();
    await expect(nextPageLink).toHaveAttribute('href', '/blog?page=2');
});
