import ComponentCards from "./common/Card";
import RemindsTasks from "./common/RemindsTasks";

const UserSectionComponent = () => {
    return (
        <section className="h-screen w-1/3 flex flex-col p-4 max-xl:w-full ml-3">
            <ComponentCards></ComponentCards>
            <RemindsTasks></RemindsTasks>
        </section>
    )
}

export default UserSectionComponent;