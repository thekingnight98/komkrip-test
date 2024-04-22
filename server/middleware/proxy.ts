import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineEventHandler((event) => {
    const proxy = createProxyMiddleware({
        target: 'https://komgrip.co.th',
        changeOrigin: true,
        pathRewrite: {
            '^/api/': '/coincap/',
        },
    });

    return proxy(event.req, event.res);
});
