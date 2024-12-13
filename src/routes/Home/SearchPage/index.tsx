import { Outlet } from 'react-router-dom';
import SearchGithubCard from '../../../components/SearchGitHubCard';

export default function SearchPage() {

    return (
        <>
            <SearchGithubCard />
            <Outlet />
        </>
    )
}
