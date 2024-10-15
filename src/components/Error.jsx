import ErrorPicture from "../assets/404.png"

function Error() {
    return (
        <div className="text-2xl text-center bg-slate-100 py-14 px-8">
            <p className="m-10">Oups...</p>
            <figure className="flex justify-center">
                <img src={ErrorPicture} alt="Erreur 404" className="max-w-[700px] w-full"/>
            </figure>
            <p className="m-8">Il semblerait qu'il y ait un problème</p>
        </div>
    )
}
 
export default Error