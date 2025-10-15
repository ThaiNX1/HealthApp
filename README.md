# React Clean Architecture Project

This project demonstrates a clean architecture implementation using React, TypeScript, and styled-components.

## Architecture Overview

The project follows Clean Architecture principles with clear separation of concerns across three main layers:

### 1. Domain Layer (`src/domain/`)
Contains the business logic and core entities of the application.

- **Entities** (`entities/`): Core business objects (e.g., `User.ts`)
- **Use Cases** (`use-cases/`): Application-specific business rules
- **Repositories** (`repositories/`): Abstract interfaces for data access

### 2. Data Layer (`src/data/`)
Handles data persistence and external API interactions.

- **Repositories** (`repositories/`): Concrete implementations of domain repository interfaces (e.g., `UserRepositoryImpl.ts` with User as an example)
- **Services** (`services/`): External API services and data sources

### 3. Presentation Layer (`src/presentation/`)
Manages the user interface and user interactions.

- **Components** (`components/`): Reusable UI components
- **Pages** (`pages/`): Full page components (Top page, my record page, column page)
- **Hooks** (`hooks/`): Custom React hooks for state management
- **Contexts** (`contexts/`): React context providers for dependency injection

### 4. Shared Layer (`src/shared/`)
Contains utilities, types, and constants used across layers.

- **Types** (`types/`): Shared TypeScript type definitions
- **Utils** (`utils/`): Utility functions
- **Constants** (`constants/`): Application constants

## Key Features

- **Dependency Inversion**: High-level modules don't depend on low-level modules
- **Separation of Concerns**: Each layer has a specific responsibility
- **Testability**: Easy to unit test each layer independently
- **Maintainability**: Clear structure makes the codebase easy to maintain and extend
- **Type Safety**: Full TypeScript support throughout the application

## Project Structure

```
src/
├── domain/
│   ├── entities/
│   │   └── User.ts
│   ├── use-cases/
│   │   └── UserUseCases.ts
│   └── repositories/
│       └── UserRepository.ts
├── data/
│   ├── repositories/
│   │   └── UserRepositoryImpl.ts
│   └── services/
│       └── ApiService.ts
├── presentation/
│   ├── components/
│   │   ├── UserCard.tsx
│   │   └── UserForm.tsx
│   ├── pages/
│   │   └── UsersPage.tsx
│   ├── hooks/
│   │   └── useUsers.ts
│   └── contexts/
│       └── UserContext.tsx
├── shared/
│   ├── types/
│   ├── utils/
│   └── constants/
├── App.tsx
└── index.tsx
```

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run start
   ```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Available Scripts

- `npm run start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App (one-way operation)

## Dependencies

- **React**: UI library
- **TypeScript**: Type safety
- **React Router**: Client-side routing
- **Styled Components**: CSS-in-JS styling
- **Axios**: HTTP client for API calls

## Benefits of This Architecture

1. **Scalability**: Easy to add new features without affecting existing code
2. **Testability**: Each layer can be tested independently
3. **Maintainability**: Clear separation makes code easier to understand and modify
4. **Flexibility**: Easy to swap implementations (e.g., different data sources)
5. **Team Development**: Different team members can work on different layers
