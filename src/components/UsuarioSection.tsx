
const UserSectionComponent=()=>{
    return(
        <section className="h-screen  w-1/3 flex flex-col ">
            <h1 className="text-center text-2xl font-bold mt-8">User Section</h1>
            <div className="shadow-xl p-4 bg-white rounded-2xl">
                <img className="rounded-full" src="/src/assets/logo.png" alt="wa" />
                <h1 className="text-center text-2xl font-bold mt-8">Deyvis</h1>
            </div>
        </section>
    )
}

export default UserSectionComponent;