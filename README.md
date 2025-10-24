# DEV-KIT: Your Personalized Learning Platform

A comprehensive, interactive learning platform designed to help developers master **Full-Stack Development**, **DevOps**, and **AI/ML**. DEV-KIT combines structured learning paths, interactive roadmaps, progress tracking, and curated resources to accelerate your development journey.

![DEV-KIT](https://img.shields.io/badge/DEV--KIT-Learning%20Platform-blue)
![React](https://img.shields.io/badge/React-19-61dafb?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178c6?logo=typescript)
![License](https://img.shields.io/badge/License-MIT-green)

## 🎯 Features

### 📚 Comprehensive Learning Tracks

- **Full-Stack Development**: HTML, CSS, JavaScript, React, Node.js, Express, Databases
- **DevOps**: Docker, Kubernetes, CI/CD, Cloud Platforms, Monitoring
- **AI/ML**: Python Basics, NumPy & Pandas, Machine Learning, Deep Learning, NLP

### 🗺️ Interactive Visual Roadmap

- Animated timeline-based learning paths
- Visual progress indicators (Completed, In Progress, Available, Locked)
- Click-to-expand node details with descriptions
- Track-specific progress visualization
- Responsive design for all devices

### 📊 Progress Tracking System

- **User-Specific Progress**: Track your learning journey across all three tracks
- **Language/Topic Progress**: Mark individual languages as complete or in-progress
- **Progress Manager**: Interactive dialog to update progress percentage and status
- **Real-Time Updates**: Instant feedback on progress changes
- **Database-Backed**: All progress data is securely stored and persisted

### 🔐 User Authentication

- Manus OAuth integration for secure login
- User profiles with progress history
- Role-based access control (User/Admin)
- Session management with JWT

### 📖 Learning Resources

- Curated resources for each technology
- Links to documentation, tutorials, and courses
- Organized by category and difficulty level
- Quick access from the Resources page

### 🎮 Interactive Challenges

- Coding challenges with difficulty levels
- Quiz-based assessments
- Project-based learning tasks
- Points and gamification system
- Track your challenge progress

### 👤 User Dashboard

- Personal profile with achievements
- Progress statistics across all tracks
- Learning history and milestones
- Badge system for completed topics

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm/pnpm
- MySQL database
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Moiz-Mohammed/Manus-Session-manager.git
   cd Manus-Session-manager
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Configure the following variables:
   - `DATABASE_URL`: MySQL connection string
   - `JWT_SECRET`: Session signing secret
   - `VITE_APP_TITLE`: Application title
   - `VITE_APP_LOGO`: Application logo URL
   - `VITE_OAUTH_PORTAL_URL`: OAuth login portal URL
   - `OAUTH_SERVER_URL`: OAuth server URL

4. **Push database schema**
   ```bash
   pnpm db:push
   ```

5. **Start the development server**
   ```bash
   pnpm dev
   ```

   The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
DEV-KIT/
├── client/                    # React frontend
│   ├── src/
│   │   ├── pages/            # Page components (Home, Roadmap, Resources, etc.)
│   │   ├── components/       # Reusable UI components
│   │   ├── contexts/         # React contexts (Theme, Auth)
│   │   ├── hooks/            # Custom React hooks
│   │   ├── lib/              # Utility functions and data
│   │   ├── App.tsx           # Main app component with routing
│   │   ├── main.tsx          # React entry point
│   │   └── index.css         # Global styles
│   └── public/               # Static assets
├── server/                    # Express backend
│   ├── routers.ts            # tRPC procedure definitions
│   ├── db.ts                 # Database query helpers
│   ├── storage.ts            # S3 file storage helpers
│   └── _core/                # Core server infrastructure
├── drizzle/                   # Database schema and migrations
│   ├── schema.ts             # Table definitions
│   └── migrations/           # SQL migration files
├── shared/                    # Shared types and constants
├── package.json              # Project dependencies
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite build configuration
└── drizzle.config.ts         # Drizzle ORM configuration
```

## 🏗️ Architecture

### Frontend Stack
- **React 19**: Modern UI library with hooks
- **Tailwind CSS 4**: Utility-first CSS framework
- **shadcn/ui**: High-quality UI components
- **Wouter**: Lightweight client-side routing
- **tRPC**: End-to-end type-safe APIs

### Backend Stack
- **Express.js**: Web server framework
- **tRPC**: Type-safe RPC framework
- **Drizzle ORM**: TypeScript SQL query builder
- **MySQL**: Relational database
- **JWT**: Session authentication

### Key Features
- **Type Safety**: Full TypeScript support across frontend and backend
- **Real-time Updates**: Optimistic updates and cache invalidation
- **Database-Backed**: Persistent progress tracking with MySQL
- **Authentication**: Manus OAuth with protected procedures
- **Responsive Design**: Mobile-first approach with Tailwind CSS

## 📖 Usage

### Home Page
- View your overall learning progress
- See today's challenge
- Access quick links to resources and roadmap

### Roadmap Page
- **Interactive Timeline**: Visualize your learning path
- **Track Overview**: See progress for each learning track
- **Language Progress**: Detailed progress for each topic
- **Update Progress**: Click "Update Progress" to manage your learning status

### Resources Page
- Browse curated learning materials
- Filter by category (HTML, CSS, JavaScript, React, etc.)
- Access documentation, tutorials, and courses

### Challenges Page
- View available coding challenges and quizzes
- Filter by difficulty and type
- Track your challenge completion
- Earn points for completed challenges

### Profile Page
- View your achievements and badges
- See detailed progress statistics
- Track your learning milestones

## 🔧 Development

### Available Scripts

```bash
# Start development server
pnpm dev

# Build for production
pnpm build

# Run tests
pnpm test

# Format code
pnpm format

# Push database schema changes
pnpm db:push
```

### Database Management

#### Create a new table
1. Edit `drizzle/schema.ts` to define your table
2. Run `pnpm db:push` to generate and apply migrations

#### Query data
Use the helper functions in `server/db.ts`:
```typescript
export async function getUserProgress(userId: number) {
  const db = await getDb();
  return await db.select().from(trackProgress).where(eq(trackProgress.userId, userId));
}
```

#### Add a new API endpoint
Define a tRPC procedure in `server/routers.ts`:
```typescript
progress: router({
  tracks: protectedProcedure.query(async ({ ctx }) => {
    return await getAllTrackProgress(ctx.user.id);
  }),
})
```

### Adding New Features

1. **Database changes**: Update `drizzle/schema.ts` and run `pnpm db:push`
2. **Backend logic**: Add query helpers in `server/db.ts`
3. **API endpoints**: Create tRPC procedures in `server/routers.ts`
4. **Frontend UI**: Build components in `client/src/components/` and pages in `client/src/pages/`
5. **Connect frontend**: Use `trpc.feature.useQuery()` and `trpc.feature.useMutation()` hooks

## 🔐 Authentication

DEV-KIT uses **Manus OAuth** for secure authentication:

1. User clicks login button
2. Redirected to OAuth portal
3. After authentication, user is redirected back with session cookie
4. Protected procedures require `ctx.user` to be present
5. User can logout via the logout mutation

Protected procedures automatically check authentication and throw an error if the user is not logged in.

## 📊 Progress Tracking

### How Progress Tracking Works

1. **Track Progress**: Overall completion percentage for each learning track
2. **Language Progress**: Individual progress for each topic/language
3. **Status Levels**: 
   - `not-started`: Haven't begun this topic
   - `in-progress`: Currently learning this topic
   - `completed`: Finished learning this topic

### Updating Progress

Use the `ProgressManager` component to update progress:
```typescript
<ProgressManager
  languageName="JavaScript"
  trackName="fullstack"
  currentStatus="in-progress"
  currentProgress={50}
/>
```

Or use the tRPC mutation directly:
```typescript
const updateLanguageMutation = trpc.progress.updateLanguage.useMutation();
updateLanguageMutation.mutate({
  languageName: "JavaScript",
  trackName: "fullstack",
  status: "completed",
  progress: 100,
});
```

## 🎨 Customization

### Theme
Edit CSS variables in `client/src/index.css`:
```css
:root {
  --background: oklch(0.98 0.001 0);
  --foreground: oklch(0.1 0 0);
  /* ... other variables ... */
}
```

### App Title and Logo
Update in the Management UI Settings panel or environment variables:
- `VITE_APP_TITLE`: Application name
- `VITE_APP_LOGO`: Logo image URL

### Learning Tracks
Modify track data in `client/src/lib/resourcesData.ts` to add or update:
- Track names and descriptions
- Languages/topics in each track
- Learning resources

## 🚀 Deployment

### Build for Production
```bash
pnpm build
```

### Environment Variables for Production
Ensure these are set in your production environment:
- `DATABASE_URL`: Production MySQL connection string
- `JWT_SECRET`: Strong random secret for session signing
- `VITE_APP_TITLE`: Your app title
- `VITE_APP_LOGO`: Your app logo URL
- `VITE_OAUTH_PORTAL_URL`: Production OAuth portal URL
- `OAUTH_SERVER_URL`: Production OAuth server URL

### Deployment Platforms
DEV-KIT can be deployed to:
- **Vercel**: Optimized for Next.js-like projects
- **Netlify**: Static site hosting with serverless functions
- **AWS**: EC2, Lambda, RDS
- **Docker**: Containerized deployment
- **Traditional VPS**: Node.js hosting

## 📝 API Documentation

### tRPC Procedures

#### Authentication
- `auth.me`: Get current user info
- `auth.logout`: Logout current user

#### Progress Tracking
- `progress.tracks`: Get all track progress for user
- `progress.languages`: Get language progress for a specific track
- `progress.updateTrack`: Update track progress
- `progress.updateLanguage`: Update language/topic progress

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙋 Support

For questions, issues, or suggestions:
- Open an issue on GitHub
- Check existing documentation
- Review the code comments and examples

## 🎓 Learning Resources

The platform includes curated resources for:
- **Full-Stack Development**: From HTML basics to full-stack applications
- **DevOps**: Container orchestration, CI/CD, and cloud deployment
- **AI/ML**: Machine learning fundamentals to advanced deep learning

Each resource includes links to official documentation, tutorials, and courses.

## 🔄 Roadmap

Future features planned for DEV-KIT:
- [ ] Video tutorials integration
- [ ] Interactive code editor
- [ ] Peer-to-peer learning communities
- [ ] AI-powered learning recommendations
- [ ] Certification programs
- [ ] Mobile app
- [ ] Offline learning mode
- [ ] Advanced analytics dashboard

## 📞 Contact

For more information about DEV-KIT, visit:
- **GitHub**: https://github.com/Moiz-Mohammed/Manus-Session-manager
- **Website**: [Your website URL]

---

**Happy Learning! 🚀**

Made with ❤️ for developers who want to master modern web development.

