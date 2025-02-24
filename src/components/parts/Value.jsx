// eslint-disable-next-line react/prop-types
export default function Value({ text, children }) {
  return (
    <li className="flex flex-col items-center justify-center border border-blue-500 rounded-xl py-4 xl:py-3 hover:border-transparent hover:bg-blue-300 transition-all text-gray-700">
      <div>{children}</div>
      {/* <div> */}
      <p className="font-medium text-gray-500 text-center">{text}</p>
      {/* </div> */}
    </li>
  );
}
