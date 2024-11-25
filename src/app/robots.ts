import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/private/'],
      },
      {
        userAgent: 'GPTBot',
        disallow: ['/'], // Prevent AI crawling if desired
      },
    ],
    sitemap: 'https://your-domain.com/sitemap.xml',
    host: 'https://your-domain.com',
  };
}