import { createClerkClient } from "@clerk/clerk-sdk-node";
import ENV from "./ENV.js";

const clerkClient = createClerkClient({
  secretKey: ENV.CLERK_API_KEY, // Your Clerk secret key
});

export default clerkClient;
