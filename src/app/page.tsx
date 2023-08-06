export default function Home() {
  const items = [
    {
      id: 1,
      name: 'test1',
      weight: 200,
      kcal: 400,
    },
    {
      id: 2,
      name: 'test2',
      weight: 200,
      kcal: 400,
    },
    {
      id: 3,
      name: 'test3',
      weight: 200,
      kcal: 400,
    },
    {
      id: 4,
      name: 'test4',
      weight: 200,
      kcal: 400,
    },
  ]

  const listItems = items.map(person => <li key={ person.id }>{ person.name }</li>);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-100">
      <ul>
        { listItems }
      </ul>
    </main>
  )
}
