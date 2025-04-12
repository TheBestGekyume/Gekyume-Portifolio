import "./Sobre.scss";
import FotoDePerfil from "../../../Assets/Images/Foto-De-Perfil-Gekyume.png"

export function Sobre() {

    return (
        <section id="sobreMim" className="pb-1 mt-5 text-white">


            <div className="container">
            <h2 className="pt-5 mb-4 text-end fw-bold ">Sobre Mim</h2>

                <div className="row">

                    <div className="col d-flex justify-content-center">
                        {/* <div className="image-about text-center">minha foto</div> */}
                        <img src={FotoDePerfil} alt="" />
                    </div>

                    <div className="col">
                        <p>
                        Sou estudante de Análise e Desenvolvimento de Sistemas, com interesse especial nas áreas
                        de Desenvolvimento Web e Cibersegurança. Gosto de explorar como a tecnologia pode impactar
                        positivamente o dia a dia das pessoas, seja promovendo inclusão digital, otimizando tarefas
                        rotineiras ou oferecendo formas seguras e acessíveis de lidar com informações.
                        Tenho afinidade com temas como Pentest, Segurança da Informação, Redes de Computadores e
                        Desenvolvimento Web, tanto no Front-End quanto no Back-End. Busco constantemente aprender
                        novas ferramentas, entender arquiteturas, padrões e boas práticas, além de experimentar na
                        prática por meio de projetos, estudos e desafios técnicos.
                        A tecnologia, para mim, vai além do código, é uma forma de pensar e resolver problemas.
                        Encaro os estudos e os projetos como oportunidades de aprofundar conhecimentos, construir
                        soluções úteis e entender melhor o mundo digital em que vivemos.
                        </p>
                        <p>
                        No meu tempo livre, gosto de jogar videogame, principalmente jogos de terror, FPS e
                        aqueles com boas histórias que realmente prendem a atenção. Música também é uma parte
                        importante do meu dia a dia — meu gosto pode ser um pouco peculiar, mas ultimamente tenho
                        tentado ser mais eclético e aberto a novos estilos.
                        Além da programação e da segurança, também tenho curiosidade por áreas relacionadas a
                        hardware. Me interesso por peças de computador, gosto de entender como tudo se encaixa e
                        funciona, e já explorei um pouco o universo do Arduino, embora ainda não tenha me
                        arriscado muito em projetos mais práticos.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}