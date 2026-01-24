
export const ArtSideBar = () => {
    return (
        <div className="bg-white shadow-sm p-4 rounded-lg flex flex-col gap-2">
            <div className="bg-accent-4 p-2  text-xl  font-serif uppercase rounded-md text-white text-center ">
             What I use
            </div>
            <div className="px-1 py-3 gap-2 ">
                <div className="uppercase font-semibold "> Water Color + Gouache</div>
                <ul className="list-disc list-ouside text-wrap ml-4 space-y-1 mt-2"> 
                    <li>Winsor & Newton Cotman Watercolor Pocket Sketchers' Pocket Set, 12 Half Pan </li>
                    <li> Faber-Castell Albrecht Duerer Artists' Watercolor Pencils - Tin of 24</li>
                    <li> Kuretake Gansai Tambi  - 12 Color </li>
                    <li> Himi Jelly Gouache</li>
                </ul>

                <div className="uppercase font-semibold mt-2"> Ink and Sketch</div>
                <ul className="list-disc list-ouside text-wrap ml-4 space-y-1 mt-2">
                    <li> Micron Pens </li>
                    <li> Uni Pin Pens</li>
                    <li> Faber Castell Graphite Sketch Pencils </li>
                    <li> Uni Mitsubishi Pencils</li>
                    </ul>
            

                <div className="uppercase font-semibold mt-2"> Digital Art</div>
                <ul className="list-disc list-ouside text-wrap ml-4 space-y-1 mt-2">
                <li> Procreate </li>
                <li> Adobe Illustrator </li>
                <li> ToonSquid - Animation</li>
                </ul>
            </div>

        </div>
    )
}