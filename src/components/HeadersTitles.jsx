export default function HeadersTitles({ subHeader, mainHeader, description }){
    return (
    <>
        <h3 className=" text-left uppercase font-bold text-sm leading-none md:text-xl">
            {subHeader}
        </h3>
        <h2 className="text-primary font-bold italic text-xs leading-none md:text-4xl">
            {mainHeader}
        </h2>
        <p className="text-left italic text-gray-700 text-sm">
            {description}
        </p>
    </>
    )
}