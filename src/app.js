import './app.css';
import profileImage from './assets/userProfile.jpeg';
import github from './assets/github.png';
import I4G from './assets/I4G.png';
import zuri from './assets/Zuri-internship.png';
import slack from './assets/slack.png';
/* */
function App() {
  const contact = '/contact.html';
  const twitter = 'https://twitter.com/@psalmwell';
  const zuriBtn = 'https://training.zuri.team/';
  const zuriBooks = 'http://books.zuri.team/';
  const pitch = 'https://background.zuri.team/';
  const zuriDesign = 'https://books.zuri.team/design-rules';

  return (
    <>
      <header>
        <div className='profile'>
          <img src={profileImage} alt='profile' id='profile_img' />
          <a href={twitter} id='twitter'>
            @psalmwell
          </a>
          <h1 className='hidden' id='slack'>
            stephen samuel
          </h1>
        </div>
      </header>
      <main className='container'>
        <div className='buttons'>
          
          <a href="{contact}"> contact</a>

          <a href={twitter} id='twitter'>
            Twitter Link
          </a>
          <a href={zuriBtn} id='btn__zuri'>
            Zuri Team
          </a>
          <a href={zuriBooks} id='books'>
            Zuri Books
          </a>
          <a href={zuriBooks} id='book__python'>
            Python Books
          </a>
          <a href={pitch} id='pitch'>
            Background Check for Coders
          </a>
          <a href={zuriDesign} id='book__design'>
            Design Books
          </a>
        </div>
        <div className='icons'>
          <img src={slack} alt='slack' />
          <img src={github} alt='github' />
        </div>
      </main>
      <footer>
      </footer>

      <footer className='footer2'>
          <img src={zuri} alt='zuri-logo' />
          <img src={I4G} alt='i4g' />
      </footer>
    </>
  );
}

export default App;