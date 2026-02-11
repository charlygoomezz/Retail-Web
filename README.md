<div align="center">
  <h1 align="center">
  Renting Luxe
    <br />
    <br />
    <a href="https://renting-web-alpha.vercel.app/">
     <img width="1441" height="3111" alt="Renting web-page" src="https://github.com/user-attachments/assets/e9a6e1a3-c297-41dd-86f5-9efa7bfada24" />
    </a>

  </h1>
</div>

## Introduction
This project is a simple car rental landing page built with modern web technologies. It provides a minimal but complete flow for browsing cars, managing reservations, and handling payments.

The application includes a single Home page where users can sign up and authenticate using Clerk. Depending on their role, users have access to different features. Admins can create and manage car listings and view a breakdown of reservations, while regular users can browse available cars and make reservations through Stripe.

The goal of the project is to demonstrate a clean, straightforward implementation of a car rental platform, focusing on simplicity, scalability, and modern developer tooling rather than complex business logic.

## Built with

* [![Tailwind][TailwindCSS]][TailwindCSS-url]
* [![Prisma][Prisma]][Prisma-url]
* [![PostgreSQL][PostgreSQL]][PostgreSQL-url]
* [![Neon][Neon]][Neon-url]
* [![Zustand][Zustand]][Zustand-url]
* [![shadcn/ui][shadcn-ui]][shadcn-ui-url]
* [![Clerk][Clerk]][Clerk-url]
* [![Stripe][Stripe]][Stripe-url]


## Getting Started

Follow these steps to get the project up and running locally:

### Prerequisites

1. Clone the repository

```bash
git clone https://github.com/charlygoomezz/Retail-Web.git
```
2. Install dependecies:

```bash
npm install
```
3. Set up environment variables:
   Create a `.env` file in the root directory with the following minimum variables:

```bash
# Clerk Authentication (frontend + backend keys)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Database connection (Neon PostgreSQL)
DATABASE_URL='your_database_connection_string'

# Stripe Payment secret key (backend)
STRIPE_API_KEY=your_stripe_secret_key

# Admin user id (optional, but recomended)
NEXT_PUBLIC_ADMINISTRATOR=clerk_user_id_for_admin_role
```
 Make sure to replace the placeholder values with your actual keys and URLs.
 
4. Run database migrations:
   
```bash
npx prisma migrate dev
```

5. Start development server:
   
```bash
npm run dev
```
6.	Open your browser and visit:
```bash
[npm run dev](http://localhost:3000)
```
## Contact
For any questions or feedback, feel free to reach out:

	•	LinkedIn: www.linkedin.com/in/cgomezprosper￼
	•	Email: cgomezprosper@gmail.com￼

<!-- MARKDOWN LINKS & IMAGES -->
[Linkedin]: https://img.shields.io/badge/-LinkedIn-blue
[linkedin-url]: https://linkedin.com/in/cgomezprosper
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/

[TailwindCSS]: https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white
[TailwindCSS-url]: https://tailwindcss.com/

[Prisma]: https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white
[Prisma-url]: https://www.prisma.io/

[PostgreSQL]: https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white
[PostgreSQL-url]: https://www.postgresql.org/

[Neon]: https://img.shields.io/badge/Neon-00E5FF?style=for-the-badge
[Neon-url]: https://neon.tech/

[Zustand]: https://img.shields.io/badge/Zustand-593D88?style=for-the-badge&logo=react&logoColor=white
[Zustand-url]: https://zustand-demo.pmnd.rs/

[shadcn-ui]: https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=radix-ui&logoColor=white
[shadcn-ui-url]: https://ui.shadcn.com/

[Clerk]: https://img.shields.io/badge/Clerk-3B49DF?style=for-the-badge&logo=clerk&logoColor=white
[Clerk-url]: https://clerk.com/

[Stripe]: https://img.shields.io/badge/Stripe-626CD9?style=for-the-badge&logo=stripe&logoColor=white
[Stripe-url]: https://stripe.com/
