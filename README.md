# Full Stack Web Development Training Repository

## Overview

This repository contains a comprehensive collection of full-stack web development projects and training materials, covering modern frontend frameworks, backend technologies, APIs, and database integration. Each sub-project demonstrates different aspects of web development using various technologies and architectural patterns.

## Project Structure

- angulair/ - Angular-based projects (airline system, quiz app, auth system)
- js/ - JavaScript/React applications (weather app, user-posts app)
- ts/ - TypeScript projects (React with TypeScript)
- Sourire-Sante/ - Healthcare management system
- python/ - Python backend services
- cours/ - Training course materials

## Technologies Covered

### Frontend Frameworks
- React (JavaScript & TypeScript) with Hooks, Class Components, State Management
- Angular (v16-21) with Components, Services, Routing, Reactive Forms
- TypeScript with Type System, Unions, Generics, Type Guards

### Backend & APIs
- Python for backend services and scripting
- RESTful API integration (OpenWeatherMap)
- Axios for HTTP requests with async/await
- JSON data serialization

### Build Tools
- Vite (next-gen frontend build tool)
- Webpack (module bundler)
- Angular CLI (full dev environment)
- npm (dependency management)

### Testing
- Jest (JavaScript testing)
- Vitest (Vite unit testing)
- Angular TestBed (component/service testing)

## Projects

### 1. TypeScript React App (ts/react-ts/)
**React + TypeScript + Vite** with comprehensive type system demonstrations
- Union types, optional parameters, array/tuple types
- Type guards and type assertions
- Functional components with TypeScript
- Run: npm run dev

### 2. Weather App (js/meteo-app/)
**React Weather Forecast** with OpenWeatherMap API integration
- React hooks (useState, useEffect)
- Axios for API calls
- Form handling with validation
- Conditional rendering
- Error handling
- Run: npm start

### 3. User-Posts App (js/user-posts-app/)
**React Class Components** with user/post management
- Class component lifecycle
- Props drilling and parent-child communication
- State management in class components
- Data filtering
- Mock data management
- Run: npm start

### 4. Angular Quiz App (angulair/quiz-app/)
**Full-featured Quiz Application** with Angular
- Component architecture
- Signal-based state management
- Reactive forms
- Routing with RouterOutlet
- Service layer pattern
- Run: ng serve

### 5. Angular Airline System (angulair/angulairproject/)
**Enterprise Angular Application** for airline management
- Complex routing configuration
- Lazy loading modules
- Dependency injection
- HTTP client services
- Multiple feature modules
- Run: ng serve

### 6. Healthcare System (Sourire-Sante/)
**Healthcare Management** with Angular standalone components
- Patient data management
- JSON data storage
- Bootstrap integration
- Modern Angular features
- Run: ng serve

### 7. Authentication App (angulair/auth-app/)
**Angular Authentication System** with route guards
- Login/logout flows
- Token-based authentication
- Protected routes
- Session management
- Run: ng serve

### 8. Python Fundamentals (python/s1.py)
**Python Programming Basics**
- Variables and data types
- Type conversion
- Arithmetic and logical operations
- Comparison operators
- String manipulation
- Run: python s1.py

## Getting Started

### Prerequisites
- Node.js v16+
- npm or yarn
- Angular CLI: npm install -g @angular/cli
- Python 3.x

### Installation
For each project, navigate to its directory and install:
cd <project-directory>

npm install

### Running Projects
- React (Create React App): npm start | npm test | npm run build
- React (Vite + TypeScript): npm run dev | npm run build | npm run preview
- Angular: ng serve | ng build | ng test | ng e2e
- Python: python s1.py

## Learning Path

### Beginner Track
1. python/s1.py - Programming fundamentals
2. ts/s1.ts - TypeScript basics
3. js/meteo-app - API integration with React
4. ts/react-ts - Modern React with TypeScript

### Intermediate Track
1. js/user-posts-app - Component communication patterns
2. angulair/quiz-app - Angular fundamentals
3. angulair/auth-app - Authentication patterns

### Advanced Track
1. angulair/angulairproject - Enterprise Angular architecture
2. Sourire-Sante/Sourire-Sante - Complex healthcare system
3. js/react-jest-test - Testing strategies

## Key Concepts

### Frontend
- Component-based architecture
- State management (hooks, class state, signals)
- Props and data flow
- Event handling
- Form validation
- Routing and navigation
- Responsive design

### Backend Integration
- REST API consumption
- HTTP methods (GET, POST, PUT, DELETE)
- Request/response handling
- Error handling strategies
- Authentication flows
- JSON serialization

### Development Workflow
- Version control with Git
- Dependency management
- Build automation
- Testing strategies
- Code quality (ESLint)
- Deployment preparation

## Best Practices

1. **Component Reusability**: Modular design
2. **State Management**: Appropriate patterns for each framework
3. **API Integration**: Consistent error handling
4. **Type Safety**: TypeScript for production
5. **Testing**: Unit test coverage
6. **Code Quality**: ESLint and formatting

## Documentation

Each sub-project includes its own README with:
- Technical specifications
- Setup instructions
- Available scripts
- Architecture overview
- API documentation

Additional course materials in /cours/ directory.

## Tools & Libraries

**Core Libraries:**
- React 18.x
- Angular 16-21
- TypeScript 5.x
- Axios 1.x
- Vite 4.x

**Testing:**
- Jest
- Vitest
- Angular TestBed
- Jasmine

**Build Tools:**
- Webpack 5
- Vite
- Angular CLI
- Babel/SWC

## Tips & Recommendations

1. Start Small: Begin with basic projects before complex ones
2. Understand Patterns: Focus on architecture, not just syntax
3. Practice Testing: Write tests alongside code
4. Type Safety: Prefer TypeScript for production
5. Code Reviews: Learn from existing projects
6. Experiment: Modify to understand behavior

## Contributing

This repository serves as a learning resource for full-stack development. To extend or modify:

1. Follow existing code style and conventions
2. Maintain consistent project structure
3. Update documentation for changes
4. Test thoroughly before committing
5. Use appropriate tooling for each stack

## Support

For questions or issues:
- Review individual project README files
- Check course materials in /cours/
- Framework documentation:
  - React: https://reactjs.org/
  - Angular: https://angular.dev/
  - TypeScript: https://www.typescriptlang.org/docs/

## Project Statistics

- Total Projects: 10+
- Technologies: React, Angular, TypeScript, Python, JavaScript
- Lines of Code: 1000+
- Frameworks Covered: 5+
- API Integrations: 3+

---

This repository is maintained as part of comprehensive full-stack web development training and serves as a practical reference for modern web development practices.

Last Updated: April 2026
Version: 2.0.0
