// Environment variables with hardcoded fallbacks
// This ensures the app works even without proper .env configuration

export const ENV = {
  // Database Configuration
  DATABASE_URL: process.env.DATABASE_URL || "postgresql://neondb_owner:npg_NGDY74bHjvWZ@ep-proud-wave-adq7htu6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  DIRECT_URL: process.env.DIRECT_URL || "postgresql://neondb_owner:npg_NGDY74bHjvWZ@ep-proud-wave-adq7htu6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  
  // Clerk Authentication
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY || "pk_test_cGxlYXNpbmctc3VuZmlzaC02Ni5jbGVyay5hY2NvdW50cy5kZXYk",
  CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY || "sk_test_A8W6UF1Rzc8isxGdwlcJ4tA9Uv6CvdxxNmScIWsNdv",
  NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL || "/sign-in",
  NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL || "/sign-up",
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL || "/dashboard",
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL || "/dashboard",
  
  // AI Services
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || "AIzaSyCNavdb7Ws3EPwjDsy4j5P9VqxyKyW8wTY",
  
  // Email Service
  RESEND_API_KEY: process.env.RESEND_API_KEY || "re_6h4jnxFj_DvfPCisNgQN2s7q9hzaMKDnW",
  
  // Security & Rate Limiting
  ARCJET_KEY: process.env.ARCJET_KEY || "ajkey_01k3qpcrbefjz8p1zhf68eznse",
  
  // Application Environment
  NODE_ENV: process.env.NODE_ENV || "development",
  
  // Inngest Configuration
  INNGEST_EVENT_KEY: process.env.INNGEST_EVENT_KEY || "demo_inngest_key",
  INNGEST_SIGNING_KEY: process.env.INNGEST_SIGNING_KEY || "demo_inngest_signing_key",
};

// Helper function to check if we're using fallback values
export const isUsingFallbacks = () => {
  const fallbackKeys = [];
  
  if (!process.env.DATABASE_URL) fallbackKeys.push('DATABASE_URL');
  if (!process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY) fallbackKeys.push('CLERK_PUBLISHABLE_KEY');
  if (!process.env.CLERK_SECRET_KEY) fallbackKeys.push('CLERK_SECRET_KEY');
  if (!process.env.GEMINI_API_KEY) fallbackKeys.push('GEMINI_API_KEY');
  if (!process.env.RESEND_API_KEY) fallbackKeys.push('RESEND_API_KEY');
  if (!process.env.ARCJET_KEY) fallbackKeys.push('ARCJET_KEY');
  
  return fallbackKeys;
};

// Warning function for development
export const logEnvironmentWarnings = () => {
  const fallbacks = isUsingFallbacks();
  
  if (fallbacks.length > 0 && ENV.NODE_ENV === 'development') {
    console.warn('🚨 DEVELOPMENT WARNING: Using hardcoded fallback values for:');
    fallbacks.forEach(key => {
      console.warn(`   - ${key}`);
    });
    console.warn('   Consider setting up your .env file for production use.');
    console.warn('   Some features may not work with demo values.');
  }
};

// Export individual values for easier imports
export const {
  DATABASE_URL,
  DIRECT_URL,
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
  CLERK_SECRET_KEY,
  NEXT_PUBLIC_CLERK_SIGN_IN_URL,
  NEXT_PUBLIC_CLERK_SIGN_UP_URL,
  NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
  NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
  GEMINI_API_KEY,
  RESEND_API_KEY,
  ARCJET_KEY,
  NODE_ENV,
  INNGEST_EVENT_KEY,
  INNGEST_SIGNING_KEY
} = ENV;
