import profile_pic from './assets/images/image-profile-mobile.webp'
import github from './assets/images/icon-github.svg'
import linkedin from './assets/images/icon-linkedin.svg'
import frontend_mentor from './assets/images/icon-frontend-mentor.svg'
import twitter from './assets/images/icon-twitter.svg'
import rings from './assets/images/pattern-rings.svg'
import circle from './assets/images/pattern-circle.svg'
import project_1 from './assets/images/thumbnail-project-1-small.webp'
import project_2 from './assets/images/thumbnail-project-2-small.webp'
import project_3 from './assets/images/thumbnail-project-3-small.webp'
import project_4 from './assets/images/thumbnail-project-4-small.webp'
import project_5 from './assets/images/thumbnail-project-5-small.webp'
import project_6 from './assets/images/thumbnail-project-6-small.webp'
import Project_Card from './components/Project_Card'

function App() {
  return (
    <div className="relative w-screen h-full bg-base font-portfolio_text ">
      <img
        src={rings}
        alt=""
        className="absolute transform scale-150 top-36 -left-72 landscape:-left-1/2"
      />

      <img src={circle} alt="" className="absolute top-44 -right-12 " />

      <article className="flex flex-col items-center justify-center gap-10 text-top text-text_color">
        <section className="relative flex flex-col justify-center w-5/6 h-full gap-5 pb-20 text-center border-b-2 ">
          <div className="relative flex flex-col items-center justify-center w-full h-full ">
            <h1 className="absolute font-bold text-m leading-m top-5">
              adamkeyes
            </h1>
            <div className="absolute w-3/5 p-2 top-16 landscape:top-4 landscape:w-full ">
              <ul className="flex justify-between ">
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
              className="w-3/5 h-80 opacity-3 landscape:w-1/4"
            />
          </div>
          <h2 className="font-bold mobile-header">
            Nice to meet you! I'm{' '}
            <span className="border-b-4 border-underlined">Adam Keyes.</span>
          </h2>
          <p className="font-semibold text-m_sm leading-m_sm text-sub_text_color">
            Based in the UK, I'm a front-end developer passionate about building
            accessible web apps that users love.
          </p>
          <h3 className="">
            <span className="pb-2 font-bold uppercase border-b-2 border-underlined leading-m_sm tracking-m_sm text-m_sm ">
              <a href="#" className="hover:text-underlined">
                Contact me
              </a>
            </span>
          </h3>
        </section>

        <section className="relative flex flex-col justify-center w-5/6 h-full gap-3 pb-20 text-center border-b-2">
          <img
            src={rings}
            alt=""
            className="absolute transform scale-150 -bottom-11 -right-3/4 landscape:-left-1/2"
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

        <section className="w-5/6 ">
          <div className="flex items-center justify-between mt-10">
            <h2 className="font-bold mobile-header">Projects</h2>{' '}
            <h3 className="flex">
              <span className="items-start pb-2 font-bold uppercase border-b-2 border-underlined leading-m_sm tracking-m_sm text-m_sm">
                <a href="#" className="hover:text-underlined">
                  Contact me
                </a>
              </span>
            </h3>
          </div>
          <Project_Card
            title="Design portfolio"
            image={project_1}
            skills={['html', 'css']}
          />
          <Project_Card
            title="E-learning landing page"
            image={project_2}
            skills={['html', 'css']}
          />
          <Project_Card
            title="Todo web app"
            image={project_3}
            skills={['html', 'css', 'javascript']}
          />

          <Project_Card
            title="Entertainment web app"
            image={project_4}
            skills={['html', 'css', 'javascript']}
          />
          <Project_Card
            title="Memory Game"
            image={project_5}
            skills={['html', 'css', 'javascript']}
          />
          <Project_Card
            title="Art gallery showcase"
            image={project_6}
            skills={['html', 'css', 'javascript']}
          />
        </section>
        <section className="flex flex-col items-center justify-center gap-5">
          <h2 className="font-bold text-[40px] leading-[40px] -tracking-[1.14px]">
            Contact
          </h2>{' '}
          <p className="w-5/6 text-center text-sub_text_color text-m_sm leading-m_sm">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <form className="uppercase text-sub_text_color">
            <div>
              <label for="name">Name:</label>
              <input type="text" id="name" name="name" className="bg-base" />
            </div>
            <div>
              <label for="email">Email:</label>
              <input type="email" id="email" name="email" className="bg-base" />
            </div>
            <div>
              <label for="message">Message:</label>
              <textarea
                id="message"
                name="message"
                className="bg-base"
              ></textarea>
            </div>
            <div>
              <span>Send message</span>
            </div>
          </form>
          adamkeyes
        </section>
      </article>
    </div>
  )
}

export default App
