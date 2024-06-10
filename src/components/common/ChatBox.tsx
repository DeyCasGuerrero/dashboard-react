const ChatBox = () => {
    return (
        <form className="p-6 rounded-md ">
            <div className="flex items-center border border-gray-300 rounded-md">
                <input
                    className="flex-grow p-2 border-none focus:ring-0 focus:outline-none"
                    placeholder="Enter your prompt..."
                    type="text"
                />
            </div>
        </form>
    )
}

export default ChatBox;