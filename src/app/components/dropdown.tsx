interface IDropdown {
  show: boolean
}

export default function Dropdown({ show }: IDropdown) {
  return(
    <div className={'${ show ? "block" : hidden } w-48 absolute top-full bg-white border shadow-lg reight-0 py-2 rounded-2xl'}>
      <div className="hover:bg-gray-300">
        <button className="text-sm px-4 py-2">
          Edit
        </button>
      </div>
      <div className="hover:bg-gray-300">
        <button className="text-sm px-4 py-2">
          Delete
        </button>
      </div>
    </div>
  )
}