import FileUploader from "@/components/FileUploader";
import Layout from '@/components/layout'
import type { ReactElement } from 'react'


export default function Home() {
  return (
    <Layout>
      <main>
        <div className="flex justify-center items-center min-h-screen">
          Receipts go here
          Fetch existing database entries and display here
        </div>
      </main>
    </Layout>
  );
}
