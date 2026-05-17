import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// ============================================
// Bot User-Agent blocklist
// Block known scrapers, AI crawlers, SEO bots
// ============================================
const BLOCKED_UA_PATTERNS = [
  // AI training bots
  /GPTBot/i,
  /ChatGPT-User/i,
  /OAI-SearchBot/i,
  /anthropic-ai/i,
  /ClaudeBot/i,
  /Claude-Web/i,
  /PerplexityBot/i,
  /Perplexity-User/i,
  /cohere-ai/i,
  /Bytespider/i,
  /ImagesiftBot/i,
  /img2dataset/i,
  /Diffbot/i,
  /Applebot-Extended/i,
  /FacebookBot/i,
  /Meta-External/i,
  /YouBot/i,
  /TimpiBot/i,
  /VelenPublicWebCrawler/i,
  /webzio-extended/i,
  /Mistral-AI/i,

  // SEO scrapers (boros bandwidth, jarang berguna)
  /AhrefsBot/i,
  /SemrushBot/i,
  /MJ12bot/i,
  /DotBot/i,
  /BLEXBot/i,
  /rogerbot/i,
  /SeznamBot/i,
  /DataForSeoBot/i,
  /PetalBot/i,
  /AwarioBot/i,

  // Common Crawl / Archives
  /CCBot/i,
  /ia_archiver/i,
  /archive\.org_bot/i,

  // Generic scrapers
  /Scrapy/i,
  /python-requests/i,
  /python-urllib/i,
  /Go-http-client/i,
  /node-fetch/i,
  /axios/i,
  /curl\/[0-9]/i,
  /wget/i,
  /HeadlessChrome/i,
  /PhantomJS/i,
  /Selenium/i,
  /Puppeteer/i,

  // Empty / suspicious UA
  /^Mozilla\/5\.0$/i,
  /^Mozilla\/4\.0$/i,
];

// Allowed legitimate bots — explicitly allow
const ALLOWED_UA_PATTERNS = [
  /Googlebot/i,
  /Bingbot/i,
  /DuckDuckBot/i,
  /Slurp/i, // Yahoo
  /YandexBot/i,
  /Baiduspider/i,
  /Applebot(?!-Extended)/i, // Allow Applebot, deny Applebot-Extended
];

export function middleware(request: NextRequest) {
  const userAgent = request.headers.get("user-agent") || "";

  // Empty user agent = block
  if (!userAgent || userAgent.trim().length < 10) {
    return new NextResponse("Forbidden", {
      status: 403,
      headers: { "X-Robots-Tag": "noindex, nofollow" },
    });
  }

  // Allow legitimate search engine bots
  const isAllowed = ALLOWED_UA_PATTERNS.some((pattern) =>
    pattern.test(userAgent),
  );
  if (isAllowed) {
    return NextResponse.next();
  }

  // Block known bad bots
  const isBlocked = BLOCKED_UA_PATTERNS.some((pattern) =>
    pattern.test(userAgent),
  );
  if (isBlocked) {
    return new NextResponse("Forbidden — Bot Access Denied", {
      status: 403,
      headers: {
        "X-Robots-Tag": "noindex, nofollow",
        "Cache-Control": "public, max-age=86400, immutable",
      },
    });
  }

  // Add security headers for normal traffic
  const response = NextResponse.next();
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()");

  return response;
}

// ============================================
// Matcher: only run middleware on routes
// SKIP static assets (images, css, js) to save edge requests
// ============================================
export const config = {
  matcher: [
    /*
     * Match all request paths EXCEPT:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, robots.txt, sitemap.xml (static metadata)
     * - public files with extension (.png, .jpg, .svg, .ico, .webp, .mp4, .pdf)
     */
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:png|jpg|jpeg|gif|svg|ico|webp|avif|mp4|pdf|woff|woff2)$).*)",
  ],
};
