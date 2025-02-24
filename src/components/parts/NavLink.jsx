

export default function NavLink({text}) {
  return (
    <a
    href={`#${text}`.toLocaleLowerCase()}
    className="px-2.5 py-2 text-blue-800 font-bold font-sans text-xl transition-colors duration-300 transform rounded-lg hover:bg-blue-100 md:mx-2"
  >
    {text}
  </a>
  )
}
