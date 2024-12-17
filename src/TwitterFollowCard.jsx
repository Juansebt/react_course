import { useState } from "react"

export function TwitterFollowCard({ formatUserName, userName, name }) {
    const [isFollowing, setIsFollowing] = useState(false)

    const imageSrc = `https://unavatar.io/${userName}`
    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-follow-card-button is-following' : 'tw-follow-card-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return(
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img className='tw-follow-card-avatar' src={imageSrc} alt="Avatar de midudev" />
                <div className='tw-follow-card-info'>
                    <strong>{name}</strong>
                    <span className='tw-follow-card-infoUserName'>{ formatUserName(userName) }</span>
                </div>
            </header>
            <aside>
                <button className={ buttonClassName } onClick={ handleClick }>{ text }</button>
            </aside>
        </article>
    )
}