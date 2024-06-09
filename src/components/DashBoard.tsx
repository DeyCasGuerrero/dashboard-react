const ComponentDashBoard = () => {
    return (
        <div className="h-screen flex w-full">
            <div className="flex-grow p-6">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 text-center">Dashboard</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    <div className="p-6 bg-white rounded-3xl shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Ingresos totales</h2>
                        <p className="text-3xl font-semibold text-green-500">$15,000</p>
                    </div>

                    <div className="p-6 bg-white rounded-3xl  shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Gastos</h2>
                        <p className="text-3xl font-semibold text-red-500">$5,000</p>
                    </div>

                    <div className="p-6 bg-white rounded-3xl  shadow-lg">
                        <h2 className="text-xl font-bold mb-4">Beneficio Neto</h2>
                        <p className="text-3xl font-semibold text-blue-500">$10,000</p>
                    </div>

                    <div className=" bg-white lg:col-span-3 min-h-72 rounded-3xl flex flex-col gap-4 items-center shadow-xl">
                        <h1 className="text-2xl font-bold ">Graficas WAAAAAAAAA</h1>
                        <div className="flex flex-col">
                            <h1>GRAFICO DE BARRAS IDK</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default ComponentDashBoard;