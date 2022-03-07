

// CSS
import '../styles/repositories.scss'

type Repository = {

    infos: {
        full_name: string,
        description: string,
        html_url: string,
    }

}

export function RepositoryComp(props: Repository) {
    return (

        <>
            <li>
                <h2>{props.infos.full_name}</h2>
                <p>{props.infos.description}</p>
                <a href={props.infos.html_url} target="_blank">Acessar</a>
            </li>
        </>

    )
}