import './App.css'
import Head from './components/Head'
import HeadersTitles from './components/HeadersTitles'
import LinkItem from './components/LinkItem'
import SocialNetworks from './components/SocialNetworks'

function App() {
  return (
    <div className='bg-gray-400 h-full w-full m-auto py-8 text-center'>

      <div className='backdrop-blur-xl bg-white/30 max-w-72 sm:max-w-xl md:max-w-xl mx-auto pb-8 px-4 mb-8 rounded-xl
                      
      '>
        <Head
          ProfilePic={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-y-fFn8KjGMJWwHyFA32_Xvysu-c0c3pHIw&s"}
        />

        {/* Redes */}
        <SocialNetworks
          igLink={"https://www.instagram.com/mamuel_n/"}
          gitLink={"https://github.com/Minmgf"}
          linkedinLink={"https://github.com/Minmgf"}
        />

        {/* Items */}
        <h1 className='text-white text-3xl font-thin mt-8'>Links</h1>
        <LinkItem
          className=""
          Link={"https://www.google.com"}
          image={"https://www.amitai.com/es/wp-content/uploads/2020/06/board-361516_1920.jpg"}
          mainHeader={"qwe"}
          description={"asdasdasd asdas das a dasd asd as das dasd"}
        />
        <LinkItem
          className=""
          Link={"https://www.google.com"}
          image={"https://www.amitai.com/es/wp-content/uploads/2020/06/board-361516_1920.jpg"}
          mainHeader={"qwe"}
          description={"asdasdasd asdas das a dasd asd as das dasd"}
        />
        <LinkItem
          className=""
          Link={"https://www.google.com"}
          image={"https://www.amitai.com/es/wp-content/uploads/2020/06/board-361516_1920.jpg"}
          mainHeader={"qwe"}
          description={"asdasdasd asdas das a dasd asd as das dasd"}
        />
        <LinkItem
          className=""
          Link={"https://www.google.com"}
          image={"https://www.amitai.com/es/wp-content/uploads/2020/06/board-361516_1920.jpg"}
          mainHeader={"qwe"}
          description={"asdasdasd asdas das a dasd asd as das dasd"}
        />

        </div>


    </div>
  )
}

export default App
