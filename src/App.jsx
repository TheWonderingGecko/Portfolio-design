import profile_pic from './assets/images/image-profile-mobile.webp'
import github from './assets/images/icon-github.svg'
import linkedin from './assets/images/icon-linkedin.svg'
import frontend_mentor from './assets/images/icon-frontend-mentor.svg'
import twitter from './assets/images/icon-twitter.svg'
import rings from './assets/images/pattern-rings.svg'
import circle from './assets/images/pattern-circle.svg'

function App() {
  return (
    <div className="h-full w-screen bg-base font-portfolio_text relative ">
      <img
        src={rings}
        alt=""
        className="absolute top-36 -left-72 transform scale-150 landscape:-left-1/2"
      />

      <img src={circle} alt="" className="absolute top-44 -right-12 " />

      <article className="flex flex-col gap-10 justify-center items-center text-top text-text_color">
        <section className=" w-5/6 flex  relative flex-col text-center gap-5 justify-center h-full pb-20 border-b-2">
          <div className="h-full w-full  flex justify-center  items-center flex-col relative ">
            <h1 className="text-m font-bold leading-m absolute top-5">
              adamkeyes
            </h1>
            <div className="absolute top-16 w-3/5 p-2 landscape:top-4 landscape:w-full ">
              <ul className=" flex justify-between">
                <li>
                  <a href="#">
                    <img src={github} alt="" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img src={frontend_mentor} alt="" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img src={linkedin} alt="" />
                  </a>
                </li>

                <li>
                  <a href="#">
                    <img src={twitter} alt="" />
                  </a>
                </li>
              </ul>
            </div>
            <img
              src={profile_pic}
              alt=""
              className=" w-3/5  h-80  opacity-3  landscape:w-1/4"
            />
          </div>
          <h2 className=" mobile-header font-bold">
            Nice to meet you! I'm{' '}
            <span className=" border-b-4 border-underlined ">Adam Keyes.</span>
          </h2>
          <p className=" text-m_sm font-semibold leading-m_sm text-sub_text_color">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <h2 className="  ">
            <span className=" border-b-2 border-underlined pb-2 uppercase font-bold leading-m_sm tracking-m_sm text-m_sm">
              <a href="#">Contact me</a>
            </span>
          </h2>
        </section>

        <section className="w-5/6 flex  relative flex-col text-center gap-3 justify-center h-full pb-20 border-b-2">
          <img
            src={rings}
            alt=""
            className="absolute -bottom-11 -right-3/4  transform scale-150 landscape:-left-1/2"
          />

          <div>
            <h3 className="font-bold text-m_m">HTML</h3>{' '}
            <span className=" text-sub_text_color">4 Years Experience</span>
          </div>
          <div>
            <h3 className="font-bold text-m_m">CSS</h3>{' '}
            <span className=" text-sub_text_color">4 Years Experience</span>
          </div>
          <div>
            <h3 className="font-bold text-m_m">Javascript</h3>{' '}
            <span className=" text-sub_text_color">4 Years Experience</span>
          </div>
          <div>
            <h3 className="font-bold text-m_m">Accessibility</h3>{' '}
            <span className=" text-sub_text_color">4 Years Experience</span>
          </div>
          <div>
            <h3 className="font-bold text-m_m">React</h3>{' '}
            <span className=" text-sub_text_color">3 Years Experience</span>
          </div>

          <div>
            <h3 className="font-bold text-m_m">Sass</h3>{' '}
            <span className=" text-sub_text_color">3 Years Experience</span>
          </div>
        </section>

        <section className="w-3/4">
          Projects Contact me Design portfolio HTML CSS View project View code
          E-learning landing page HTML CSS View project View code Todo web app
          HTML CSS JavaScript View project View code Entertainment web app HTML
          CSS JavaScript View project View code Memory Game HTML CSS JavaScript
          View project View code Art gallery showcase HTML CSS JavaScript View
          project View code
        </section>
        <section className="w-3/4">
          Contact I would love to hear about your project and how I could help.
          Please fill in the form, and I’ll get back to you as soon as possible.
          Name Email Message Send message adamkeyes
        </section>
      </article>
    </div>
  )
}

export default App
