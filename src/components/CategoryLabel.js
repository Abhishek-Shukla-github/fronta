import Link from 'next/link'

export default function CategoryLabel({ children }) {
  const colorKey = {
    JavaScript: 'yellow',
    CSS: 'blue',
    Python: 'green',
    PHP: 'purple',
    Ruby: 'red',
  }

  const generateClassName = (techTypeInfo) => {
    if(techTypeInfo === "vite"){
      return 'px-2 py-1 text-gray-100 font-bold rounded bg-gradient-to-l from-yellow-400 via-violet-600 to-indigo-600'
    }
    if(techTypeInfo === "next"){
      return 'px-2 py-1 text-gray-100 font-bold rounded bg-gradient-to-bl from-slate-900 to-slate-50'
    }
  }

  console.log("colorKey[children]",colorKey[children])

  return (
    <div
      className = {children === "JavaScript" ? generateClassName("vite") : generateClassName("next")}
      >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </div>
  )
}