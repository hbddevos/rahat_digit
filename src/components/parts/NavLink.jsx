

export default function NavLink({text}) {
  return (
    <a
    href={`#${text}`.toLocaleLowerCase()}
    className="px-2.5 py-2 text-gray-800 transition-colors duration-300 transform rounded-lg hover:bg-gray-100 md:mx-2"
  >
    {text}
  </a>
  )
}
