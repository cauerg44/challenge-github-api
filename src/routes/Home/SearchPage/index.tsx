import { Outlet } from "react-router-dom";
import SearchCard from "../../../components/SearchCard";

export default function SearchPage() {

    return (
        <main>
            <section>
                <SearchCard />
            </section>
            <Outlet />
        </main>
    );
}
