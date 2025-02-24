// eslint-disable-next-line react/prop-types
export default function Link({type, icon}) {
  return (
    <a href='#' className='border p-2 flex flex-col items-center justify-center rounded-xl max-sm:mr-2 border-blue-200 hover:bg-blue-300'>
        <div>
            <img src={icon} alt="" />
        </div>
        <span className="hidden md:block text-black font-semibold">
            {type}
        </span>
    </a>
  )
}
