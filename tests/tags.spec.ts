import { test, expect } from '@playwright/test';

test.describe('Tags Page', () => {
    test('displays posts with specific tag', async ({ page }) => {
        // Navigate to a specific tag page
        await page.goto('/blog/tags/forth');

        // Check page title
        await expect(page).toHaveTitle(/Forth/);

        // Check if posts with the tag are displayed
        const posts = await page.locator('article').all();
        expect(posts.length).toBeGreaterThan(0);

        // Check if each post has the correct tag
        for (const post of posts) {
            const tagLink = await post.locator('a[href^="/blog/tags/"]').textContent();
            expect(tagLink).toContain('Forth');
        }
    });

    test('shows 404 for non-existent tag', async ({ page }) => {
        // Navigate to a non-existent tag page
        await page.goto('/blog/tags/non-existent-tag');

        // Check if 404 page is displayed
        await expect(page.locator('h1')).toContainText('404');
        await expect(page.locator('p')).toContainText('ページが見つかりませんでした');
    });

    test('tag links work correctly', async ({ page }) => {
        // Navigate to blog page
        await page.goto('/blog');

        // Click on a tag link
        await page.click('a[href^="/blog/tags/"]');

        // Check if URL contains /blog/tags/
        expect(page.url()).toMatch(/\/blog\/tags\/.+/);

        // Check if posts are displayed
        const posts = await page.locator('article').all();
        expect(posts.length).toBeGreaterThan(0);
    });
});
