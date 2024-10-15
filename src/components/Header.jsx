import { Link } from 'react-router-dom'
import Logo from "./Logo"

function Header() {

    return (
        <header className='flex justify-between max-w-5xl m-auto p-8 items-center'>
            <div className='flex flex-row items-center gap-4'>
                <Logo />
                <p className='text-4xl dark:text-white'>Shiny</p>
            </div>
            <nav className='flex gap-4 items-center'>
                <Link to="/" className='text-slate-500 dark:text-white'>Accueil</Link>
                <Link to="/freelances" className='text-slate-500 dark:text-white'>Profils</Link>
                <Link to="/survey/1" className='bg-blue-700 px-4 py-1 text-white rounded-full'>Faire le test</Link>
            </nav>

        </header>
    )
}

export default Header