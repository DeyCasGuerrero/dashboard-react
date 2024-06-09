import ComponentDashBoard from "../components/DashBoard";
import UserSectionComponent from "../components/UsuarioSection";
import NavBar from "../components/common/Navbar";

const PageDashBoard = () => {

    return (
        <main className="bg-blue-50 flex items-center justify-between ">
            <NavBar />
            <ComponentDashBoard />
            <UserSectionComponent/>
        </main>
    )
}

export default PageDashBoard;