import PageLayout from '@/components/layout';
import { ModeToggle } from '@/components/theme-toggle';
import Link from 'next/link';

export default function Home() {
  return (
    <PageLayout>
      <main className="m-auto p-4">
        <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
        <p className="mb-4">This is the main landing page of the application.</p>
        <ModeToggle />
        <Link
          href="/formations"
          className="text-indigo-500 underline mt-6 block"
        >
          Formations
        </Link>
      </main>
    </PageLayout>
  );
}
