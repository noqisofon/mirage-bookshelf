import { format, parseISO } from 'date-fns';
import matter from 'gray-matter';
import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, test } from '@jest/globals';

describe('Blog post date parsing', () => {
    const postsDir = join(process.cwd(), 'src', 'routes', 'blog', 'posts');
    const postFiles = readdirSync(postsDir).filter((file) => file.endsWith('.md'));
    const postsWithoutDate: string[] = [];

    for (const postFile of postFiles) {
        test(`should parse date from ${postFile}`, () => {
            const content = readFileSync(join(postsDir, postFile), 'utf-8');
            const { data: frontMatter } = matter(content);
            const dateString = frontMatter.date;

            if (!dateString) {
                console.log(`No date found in ${postFile}`);
                postsWithoutDate.push(postFile);
                return;
            }

            // dateString が文字列であることを確認
            if (typeof dateString !== 'string') {
                console.log(`Date in ${postFile} is not a string:`, dateString);
                postsWithoutDate.push(postFile);
                return;
            }

            // parseISO 関数で日付文字列をパース
            const parsedDate = parseISO(dateString);

            // 日付が有効かどうかをチェック
            expect(parsedDate).toBeInstanceOf(Date);
            expect(isNaN(parsedDate.getTime())).toBe(false);

            // format 関数で日付をフォーマット
            const formattedDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
            expect(formattedDate).toBeTruthy();
        });
    }

    test('should list posts without date field', () => {
        if (postsWithoutDate.length > 0) {
            console.log('Posts without date field:', postsWithoutDate);
        }
        expect(postsWithoutDate.length).toBe(0);
    });
});

describe('Specific date format parsing', () => {
    test('should parse "2024-12-07T16:18:34.977694+09:00"', () => {
        const dateString = '2024-12-07T16:18:34.977694+09:00';
        const parsedDate = parseISO(dateString);

        expect(parsedDate).toBeInstanceOf(Date);
        expect(isNaN(parsedDate.getTime())).toBe(false);

        const formattedDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
        expect(formattedDate).toBe('2024-12-07T16:18');
    });

    test('should parse "2024-12-07T16:18:34+09:00"', () => {
        const dateString = '2024-12-07T16:18:34+09:00';
        const parsedDate = parseISO(dateString);

        expect(parsedDate).toBeInstanceOf(Date);
        expect(isNaN(parsedDate.getTime())).toBe(false);

        const formattedDate = format(parsedDate, "yyyy-MM-dd'T'HH:mm");
        expect(formattedDate).toBe('2024-12-07T16:18');
    });
});
