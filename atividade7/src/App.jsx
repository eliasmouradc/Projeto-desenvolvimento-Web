import'./App.css'

import Header from './components/Header'
import Navegacao from './components/Navegacao'
import Article from './components/Article'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'

//import viagems from '..assets/blog_d_viagem.jpeg'

function App(){

  const post ={
    titulo:'Conhecendo as melhores praia do pais',
    autor:'aluno',
    data:'31 de junho de 2026',
    conteudo:'Conhesa as melhores praias do brasil e esperimente a melhor gastronomia da regiao '

  }

  return(
    <>
      <Header />
        

      <Navegacao />
      <main>
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />

      <Sidebar/>
      </main>
      
      <Footer />
    </>
  )
}
export default App