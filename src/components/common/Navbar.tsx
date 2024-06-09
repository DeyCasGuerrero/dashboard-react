
const NavBar = () => {
    return (
        <nav className="h-screen text-black w-80 p-4 flex flex-col justify-between overflow-hidden">
            <div className=" flex items-center gap-4 mb-4  rounded-full">
                <img className="rounded-full w-16 h-16" src="/src/assets/logo.png" alt="logo" />
                <h1 className="text-xl font-bold text-red-500">Dashboard</h1>
            </div>

            <aside className=" bg-white z-10 flex-grow overflow-auto h-full flex flex-col items-center p-4 rounded-2xl shadow-xl">
                <h1 className="text-xl font-bold text-center mb-6">Dashboard</h1>
                <div className="text-base font-bold space-y-4 flex flex-col justify-evenly h-full w-full px-4 py-6 rounded-lg ">
                    <a className="p-4  transition-colors duration-300 text-center">
                        Home
                    </a>
                    <a className="p-4  transition-colors duration-300 text-center">
                        User
                    </a>
                    <a className="p-4  transition-colors duration-300 text-center">
                        Analytics
                    </a>
                    <a className="p-4  transition-colors duration-300 text-center">
                        Settings
                    </a>
                    <a className="p-4  transition-colors duration-300 text-center">
                        Help
                    </a>
                </div>
            </aside>
        </nav>
    )
}

export default NavBar;