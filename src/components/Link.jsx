// eslint-disable-next-line react/prop-types
export default function Link({type, icon}) {
  return (
    <a href='#' className='border p-2 flex flex-col items-center justify-center rounded-xl'>
        <div>
            <img src={icon} alt="" />
        </div>
        <span className="hidden md:block">
            {type}
        </span>
    </a>
  )
}
