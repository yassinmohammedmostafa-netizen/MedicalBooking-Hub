// Import from the pre-built bundle to avoid Vercel's TypeScript compilation
// issues with workspace packages that export raw .ts files
import app from "../artifacts/api-server/dist/app.mjs";
export default app;
