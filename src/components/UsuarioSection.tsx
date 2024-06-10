import ComponentCards from "./common/Card";

const UserSectionComponent = () => {
    return (
        <section className="h-screen w-1/3 flex flex-col p-4">
            <ComponentCards></ComponentCards>
            <div className="mt-4">
                <h1 className="font-bold text-2xl  p-4">Tasks</h1>
                <div className="flex flex-col items-center space-y-4 p-4">
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">Recordatorio 1</h2>
                        <p className="text-gray-700">No olvides completar la tarea de matemáticas para mañana.</p>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Marcar como Completado</button>
                        </div>
                    </div>
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">Recordatorio 2</h2>
                        <p className="text-gray-700">Reunión con el equipo de desarrollo a las 3 PM.</p>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Marcar como Completado</button>
                        </div>
                    </div>
                    <div className="w-full max-w-md bg-white rounded-lg shadow-md p-4">
                        <h2 className="text-xl font-bold mb-2">Recordatorio 3</h2>
                        <p className="text-gray-700">Enviar el informe mensual al jefe antes del viernes.</p>
                        <div className="mt-4 flex justify-end">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Marcar como Completado</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UserSectionComponent;