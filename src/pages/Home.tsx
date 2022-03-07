

import { useEffect, useState } from "react"

import { RepositoryComp } from "./RepositoryComp"

// CSS
import '../styles/repositories.scss'

type Repository = {
    full_name: string,
    description: string,
    html_url: string,
}


export function Home() {
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/victorgenari/repos')
            .then(response => response.json())
            .then(data => {
                setRepositories(data);
            })
    }, [])

    return (

        <>

            <div className="title-and-spinner">
                <h1>Meus repositórios 'Github'</h1>
                <span className="spinner">Github</span>
            </div>

            <ul>
                {repositories.map(repository => {
                    return <RepositoryComp key={repository.full_name} infos={repository} />
                })}
            </ul>

        </>

    )
}