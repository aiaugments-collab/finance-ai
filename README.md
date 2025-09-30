# Finance AI Platform

A comprehensive AI-powered financial management platform built with Next.js 15, featuring advanced analytics, automated transaction processing, and intelligent financial insights.

## 🏗️ Architecture Overview

### Tech Stack
- **Frontend**: Next.js 15 with React 19 RC, Tailwind CSS
- **Backend**: Next.js API Routes with Server Actions
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: Clerk Authentication
- **AI/ML**: Google Gemini AI for receipt scanning and financial insights
- **Background Jobs**: Inngest for recurring transactions and automated reports
- **Security**: ArcJet for rate limiting and bot protection
- **Email**: Resend for transactional emails
- **UI Components**: Radix UI with custom styling

### Application Structure
```
finance-ai/
├── app/                    # Next.js App Router
│   ├── (auth)/            # Authentication routes
│   ├── (main)/            # Main application routes
│   ├── (admin)/           # Admin panel routes
│   └── api/               # API endpoints
├── actions/               # Server actions for data operations
├── components/            # Reusable UI components
├── lib/                   # Utility libraries and configurations
├── prisma/               # Database schema and migrations
└── emails/               # Email templates
```

## 🚀 Deployment Guide

### Prerequisites
- Node.js 18+ and pnpm
- PostgreSQL database (recommended: Neon, Supabase, or Railway)
- Clerk account for authentication
- Google AI Studio account for Gemini API
- Resend account for emails
- ArcJet account for security
- Inngest account for background jobs

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```bash
# Database Configuration
DATABASE_URL=postgresql://neondb_owner:npg_NGDY74bHjvWZ@ep-proud-wave-adq7htu6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
DIRECT_URL=postgresql://neondb_owner:npg_NGDY74bHjvWZ@ep-proud-wave-adq7htu6-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_cGxlYXNpbmctc3VuZmlzaC02Ni5jbGVyay5hY2NvdW50cy5kZXYk
CLERK_SECRET_KEY=sk_test_A8W6UF1Rzc8isxGdwlcJ4tA9Uv6CvdxxNmScIWsNdv
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

GEMINI_API_KEY=AIzaSyCNavdb7Ws3EPwjDsy4j5P9VqxyKyW8wTY

RESEND_API_KEY=re_6h4jnxFj_DvfPCisNgQN2s7q9hzaMKDnW

ARCJET_KEY=ajkey_01k3qpcrbefjz8p1zhf68eznse
# Application Environment
NODE_ENV="production"
```

### Deployment Steps

#### 1. Database Setup
```bash
# Install dependencies
pnpm install

# Generate Prisma client
pnpm prisma generate

# Run database migrations
pnpm prisma migrate deploy

# Optional: Seed database with sample data
curl -X GET https://your-domain.com/api/seed
```

#### 2. Build Application
```bash
# Build for production
pnpm build

# Start production server
pnpm start
```

#### 3. Platform-Specific Deployment

**Vercel (Recommended)**
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod

# Set environment variables in Vercel dashboard
```

**Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway link
railway up
```

**Docker Deployment**
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

### Post-Deployment Setup

1. **Configure Clerk Webhooks**: Set up webhooks in Clerk dashboard to sync user data
2. **Set up Inngest**: Configure Inngest webhooks for background job processing
3. **Configure Domain**: Update Clerk and other service configurations with your production domain
4. **SSL Certificate**: Ensure HTTPS is properly configured
5. **Monitoring**: Set up error tracking and performance monitoring

## 📊 Data Flow & Architecture

### Database Schema

The application uses a PostgreSQL database with the following core entities:

```sql
User {
  id: UUID (Primary Key)
  clerkUserId: String (Unique, from Clerk)
  email: String (Unique)
  name: String?
  imageUrl: String?
  createdAt: DateTime
  updatedAt: DateTime
}

Account {
  id: UUID (Primary Key)
  name: String
  type: AccountType (CURRENT | SAVINGS)
  balance: Decimal
  isDefault: Boolean
  userId: UUID (Foreign Key)
}

Transaction {
  id: UUID (Primary Key)
  type: TransactionType (INCOME | EXPENSE)
  amount: Decimal
  description: String?
  date: DateTime
  category: String
  receiptUrl: String?
  isRecurring: Boolean
  recurringInterval: RecurringInterval?
  nextRecurringDate: DateTime?
  status: TransactionStatus (PENDING | COMPLETED | FAILED)
  userId: UUID (Foreign Key)
  accountId: UUID (Foreign Key)
}

Budget {
  id: UUID (Primary Key)
  amount: Decimal
  lastAlertSent: DateTime?
  userId: UUID (Foreign Key)
}
```

### Authentication Flow

1. **User Registration/Login**: Handled by Clerk with customizable flows
2. **User Sync**: `checkUser()` function syncs Clerk users with local database
3. **Route Protection**: Middleware protects routes using Clerk authentication
4. **Session Management**: Clerk handles session management and token refresh

### Data Processing Pipeline

#### Transaction Processing
```
User Input → Validation → Rate Limiting (ArcJet) → Database Transaction → Balance Update → Cache Revalidation
```

#### AI Receipt Scanning
```
Image Upload → Gemini AI Processing → Data Extraction → Validation → Transaction Creation
```

#### Background Jobs (Inngest)
```
Cron Triggers → Job Queue → Processing → Database Updates → Email Notifications
```

### Security Architecture

- **Rate Limiting**: ArcJet protects against abuse with configurable limits
- **Bot Protection**: Automated bot detection and blocking
- **Authentication**: Clerk provides enterprise-grade auth with MFA support
- **Data Validation**: Zod schemas validate all inputs
- **SQL Injection Protection**: Prisma ORM provides parameterized queries
- **CORS**: Configured for secure cross-origin requests

## 🔄 Background Job System

The platform uses Inngest for reliable background job processing:

### Recurring Transactions
- **Trigger**: Daily cron job at midnight
- **Process**: Identifies due recurring transactions and creates new instances
- **Throttling**: 10 transactions per minute per user

### Budget Alerts
- **Trigger**: Every 6 hours
- **Process**: Checks spending against budgets and sends alerts at 80% threshold
- **Email**: Automated notifications via Resend

### Monthly Reports
- **Trigger**: First day of each month
- **Process**: Generates AI-powered financial insights and sends summary emails
- **AI Integration**: Uses Gemini AI for personalized financial advice

## 🎯 Key Features

### Core Functionality
- **Multi-Account Management**: Support for multiple bank accounts per user
- **Transaction Tracking**: Income and expense tracking with categorization
- **Recurring Transactions**: Automated processing of recurring payments
- **Budget Management**: Monthly budget setting with intelligent alerts
- **Receipt Scanning**: AI-powered receipt processing using Gemini AI

### AI-Powered Features
- **Smart Categorization**: Automatic transaction categorization
- **Financial Insights**: Monthly AI-generated financial advice
- **Spending Analysis**: Predictive analytics for spending patterns
- **Receipt OCR**: Extract transaction data from receipt images

### Admin Features
- **User Management**: Admin panel for user oversight
- **Analytics Dashboard**: System-wide analytics and reporting
- **Revenue Tracking**: Business metrics and KPI monitoring
- **System Settings**: Platform configuration management

## 🔧 Development

### Local Development Setup
```bash
# Clone repository
git clone <repository-url>
cd finance-ai

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Edit .env with your configuration

# Set up database
pnpm prisma migrate dev
pnpm prisma generate

# Start development server
pnpm dev
```

### Available Scripts
```bash
pnpm dev          # Start development server with Turbopack
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm email        # Start email development server
```

### Database Operations
```bash
# Create new migration
pnpm prisma migrate dev --name migration_name

# Reset database
pnpm prisma migrate reset

# View database
pnpm prisma studio

# Deploy migrations
pnpm prisma migrate deploy
```

## 📈 Performance Considerations

### Optimization Strategies
- **Server Components**: Leverages React Server Components for optimal performance
- **Database Indexing**: Strategic indexes on frequently queried fields
- **Caching**: Next.js automatic caching with revalidation strategies
- **Image Optimization**: Next.js Image component for optimized loading
- **Bundle Splitting**: Automatic code splitting for faster page loads

### Monitoring & Analytics
- **Error Tracking**: Implement Sentry or similar for error monitoring
- **Performance Monitoring**: Use Vercel Analytics or similar tools
- **Database Monitoring**: Monitor query performance and connection pooling
- **Rate Limiting**: ArcJet provides built-in analytics for security events

## 🔒 Security Best Practices

### Data Protection
- **Encryption**: All sensitive data encrypted at rest and in transit
- **Input Validation**: Comprehensive validation using Zod schemas
- **SQL Injection Prevention**: Prisma ORM prevents SQL injection attacks
- **XSS Protection**: React's built-in XSS protection mechanisms

### Access Control
- **Authentication**: Clerk provides secure authentication with MFA
- **Authorization**: Role-based access control for admin features
- **Rate Limiting**: ArcJet prevents abuse and DDoS attacks
- **CORS Configuration**: Proper CORS setup for API security

## 🤝 Contributing

### Development Guidelines
1. Follow the existing code structure and naming conventions
2. Write comprehensive tests for new features
3. Update documentation for any API changes
4. Use TypeScript for type safety
5. Follow the established Git workflow

### Code Quality
- **ESLint**: Configured with Next.js recommended rules
- **Prettier**: Code formatting consistency
- **TypeScript**: Type safety throughout the application
- **Testing**: Comprehensive test coverage for critical paths

## 📞 Support

For deployment issues or questions:
1. Check the troubleshooting section in this README
2. Review the application logs for specific error messages
3. Ensure all environment variables are correctly configured
4. Verify database connectivity and migrations are up to date

## 📄 License

This project is proprietary software. All rights reserved.

---

Built with ❤️ using Next.js 15, React 19, and modern web technologies.