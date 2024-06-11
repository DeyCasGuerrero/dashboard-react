import ComponentCards from "./common/Card";
import RemindsTasks from "./common/RemindsTasks";

const UserSectionComponent = () => {
    return (
        <section className=" w-1/3 flex flex-col p-4 max-xl:w-full">
            <ComponentCards></ComponentCards>
            <RemindsTasks></RemindsTasks>
        </section>
    )
}

export default UserSectionComponent;