import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('_test').select('*').limit(1)

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Supabase Connection Test</h1>
      <p>{error ? `Expected error (table doesn't exist yet): ${error.message}` : 'Connected!'}</p>
    </main>
  )
}