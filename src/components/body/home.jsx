export default function Home() {
    let a='https://wallpapercave.com/wp/wp3819534.jpg'
    return (
        <div className="home_conteiner">
            <div>
                <img style={{zIndex:2,minWidth:'1000px'}} src={a} alt="" width='100%' height='700px' />
            </div>
        </div>
    )
}