import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserDTO } from "../../../../models/user";
import * as userService from "../../../../services/gb-service-api";
import CardResult from "../../../../components/CardResult";


export default function GithubResultCard() {

    const params = useParams();
    const username = params.user ?? "";

    const navigate = useNavigate();

    const [user, setUser] = useState<UserDTO>();

    useEffect(() => {
        userService.findByUsername(username)
            .then(response => {
                setUser(response.data)
            })
            .catch(() => {
                navigate("/search/user/not-found")
            })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [username])

    return (
        <>
        {user && <CardResult user={user} />}
        </>
    )
}