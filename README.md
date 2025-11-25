# Automated-Exam-Centre-Seating-Planner
=======
# Exam Seating Planner

A comprehensive web application for automated exam seating arrangement with anti-cheating algorithms and room management.

## Features

- **Automated Seating Generation**: Smart algorithms to optimize seating arrangements
- **Anti-Cheat Engine**: Prevents students from same subjects sitting together
- **Room Management**: Visual room layout designer and capacity management
- **Student Management**: Bulk upload and management of student data
- **Report Generation**: PDF reports for room charts, student lists, and hall tickets
- **Calendar Integration**: Exam scheduling and conflict detection
- **User Management**: Role-based access control for administrators and staff

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM
- **Database**: PostgreSQL
- **Authentication**: NextAuth.js
- **PDF Generation**: jsPDF
- **File Processing**: XLSX, PapaParse
- **Charts**: Recharts

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables: Copy `.env.example` to `.env.local`
4. Set up the database: `npm run db:push`
5. Seed the database: `npm run db:seed`
6. Run the development server: `npm run dev`

## Project Structure

- `/src/app` - Next.js app router pages and API routes
- `/src/components` - Reusable React components
- `/src/lib` - Utility functions, services, and algorithms
- `/src/types` - TypeScript type definitions
- `/prisma` - Database schema and migrations
- `/public` - Static assets

## License

MIT License