/// <reference types="vite/client" />
import matter from 'gray-matter';

export interface ParsedLesson {
  id: string; // e.g., '01-what-is-forex'
  title: string;
  description: string;
  module: string;
  order: number;
  content: string; // the raw markdown body
  slug: string;
  category: string;
  time?: number;
  difficulty?: string;
  tools?: string[];
  objectives?: string[];
  illustration?: string;
  quiz?: {
    question: string;
    options: string[];
    correct: number;
    explanation: string;
  }[];
}

export async function getLessons(): Promise<ParsedLesson[]> {
  const glob = import.meta.glob('/src/content/courses/**/*.md', { as: 'raw' });
  const lessons: ParsedLesson[] = [];

  for (const path in glob) {
    const rawContent = (await glob[path]()) as string;
    
    // Parse frontmatter using gray-matter
    const { data: fm, content: body } = matter(rawContent);
    
    // Extract slug and category from path
    // Path example: /src/content/courses/beginner/forex-fundamentals/01-what-is-forex.md
    const parts = path.split('/');
    const filename = parts.pop() || '';
    const moduleSlug = parts.pop() || '';
    const categoryName = parts.pop() || '';
    
    const slug = filename.replace(/\.md$/, '');

    lessons.push({
      id: slug,
      title: fm.title || slug,
      description: fm.description || '',
      module: fm.module || moduleSlug,
      order: fm.order || 0,
      time: fm.time,
      difficulty: fm.difficulty,
      tools: fm.tools || [],
      objectives: fm.objectives || [],
      illustration: fm.illustration,
      quiz: fm.quiz || [],
      content: body,
      slug,
      category: categoryName
    });
  }

  // Sort by order
  return lessons.sort((a, b) => a.order - b.order);
}
