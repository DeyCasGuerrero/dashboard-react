import ChatBox from "./common/ChatBox";
import GraphicsChartJs from "./common/Graphics";
import GraphicModel from "./common/GraphicsCards";

const ComponentDashBoard = () => {
    return (
        <div className="w-full overflow-hidden">
            <div className="flex-grow p-6">
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-500">Dashboard</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
                    <div className="p-6 bg-white rounded-3xl shadow-lg flex flex-row min-w-60 ">
                        <div className=" w-1/2">
                            <h2 className="text-xl font-bold mb-4">Ingresos totales</h2>
                            <p className="text-3xl font-semibold text-green-500">$15,000</p>
                        </div>
                        <GraphicModel></GraphicModel>
                    </div>

                    <div className="p-6 bg-white rounded-3xl  shadow-lg flex flex-row min-w-60">
                        <div className="w-1/2">
                            <h2 className="text-xl font-bold mb-4">Gastos </h2>
                            <p className="text-3xl font-semibold text-red-500">$5,000</p>
                        </div>
                        <GraphicModel></GraphicModel>
                    </div>

                    <div className="p-6 bg-white rounded-3xl  shadow-lg flex flex-row min-w-60">
                        <div className=" w-1/2">
                            <h2 className="text-xl font-bold mb-4">Beneficio Neto</h2>
                            <p className="text-3xl font-semibold text-blue-500">$10,000</p>
                        </div>
                        <GraphicModel></GraphicModel>
                    </div>

                    <div className="bg-white lg:col-span-3 rounded-3xl flex flex-col items-start shadow-xl">
                        <h1 className="mt-4 ml-4 text-2xl font-bold">Graficas</h1>
                        <div className="flex flex-col w-full p-8">
                            <GraphicsChartJs />
                        </div>
                    </div>

                    <div className=" lg:col-span-3 grid grid-cols-3  w-full gap-4 ">
                        <div className="lg:col-span-2 h-96 bg-white flex flex-col items-center shadow-xl p-8 rounded-3xl overflow-y-auto">
                            <div className="flex flex-col w-full h-full p-4 space-y-4">
                                <div className="flex items-start">
                                    <img src="https://pnghive.com/core/images/full/chat-gpt-logo-png-1680405922.png" alt="Avatar" className="rounded-full h-8 w-8 mr-2" />
                                    <div className="bg-gray-200 rounded-lg p-2">
                                        <p className="text-sm">¡Hola! Soy ChatGPT. ¿En qué puedo ayudarte hoy?</p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <img src="https://pnghive.com/core/images/full/chat-gpt-logo-png-1680405922.png" alt="Avatar" className="rounded-full h-8 w-8 mr-2" />
                                    <div className="bg-gray-200 rounded-lg p-2">
                                        <p className="text-sm">¿Cómo puedo ayudarte hoy?</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className=" max-h-36 bg-white rounded-3xl">
                            <div>
                                <ChatBox />
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default ComponentDashBoard;
