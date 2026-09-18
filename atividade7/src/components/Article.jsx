import viagemImag from '../assets/blog_d_viagem.jpeg'

function Article(props){
    return(
        <article id="baner">

            <h2>{props.titulo}</h2>

            <p>autor:{props.autor}</p>
            <p>data:{props.data}</p>

            <p>{props.conteudo}</p>

            <figure>
                <img
                    src={viagemImag} alt="Melhores Praias do pais"
                />

                <figcaption>
                    Viajar e o lado bom da vida.
                </figcaption>

            </figure>
    
        </article>
    )

}
export default Article