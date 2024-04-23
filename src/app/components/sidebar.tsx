export default function Sidebar() {
  return(
    <aside className="w-[18.75rem] flex-none dark:bg-dark-grey h-full py-6 pr-6">
      <p className="text-medium-grey pl-[2.12rem] text-[0.95rem] font-semibold uppercase pb-3">
        {'All Baord (0)'}
      </p>
      <div className="cursor-pointer flex items-center rounded-tr-full rounded-br-full bg-blue-500 space-x-2 pl-[2.12rem] py-3 pb-3">
        <p className="text-white text-lg capitalize">
          Current Board Name
        </p>
      </div>
      <button className="flex items center space-x-2 pl-[2.21rem] py-3">
        <p className="text-base font-bold capitalize text-main-purple">
          + Create New
        </p>
      </button>
    </aside>
  )
}