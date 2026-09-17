import { createClient } from '@/lib/supabase/server'

export default async function Home() {
  const supabase = await createClient()
  const { data, error } = await supabase.from('districts').select('name').order('name')

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Districts Test</h1>
      {error && <p className="text-red-600">{error.message}</p>}
      <ul className="grid grid-cols-4 gap-2">
        {data?.map((d) => (
          <li key={d.name} className="text-sm">{d.name}</li>
        ))}
      </ul>
    </main>
  )
}