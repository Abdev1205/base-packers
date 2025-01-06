const NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY;

const CLERK_SECRET_KEY = process.env.CLERK_SECRET_KEY;
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const SKILL_API_URL = process.env.NEXT_PUBLIC_SKILL_API_URL;

const ENV = {
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY,
  BACKEND_URL,
  API_URL,
  SKILL_API_URL,
};

export default ENV;
