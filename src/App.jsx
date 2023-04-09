import profile_pic from './assets/images/image-profile-mobile.webp'
import github from './assets/images/icon-github.svg'
import linkedin from './assets/images/icon-linkedin.svg'
import frontend_mentor from './assets/images/icon-frontend-mentor.svg'
import twitter from './assets/images/icon-twitter.svg'
import rings from './assets/images/pattern-rings.svg'
import circle from './assets/images/pattern-circle.svg'
import Project_Card from './components/Project_Card'
import { projects } from './data'
import { useState } from 'react'

function App() {
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [messageError, setMessageError] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleNameChange = (e) => {
    setName(e.target.value)
    if (e.target.value.length < 3 && e.target.value.length !== 0) {
      setNameError(true)
      console.log(nameError)
    } else {
      setNameError(false)
      console.log(nameError)
    }
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    if (!e.target.value.includes('@')) {
      setEmailError(true)
    } else {
      setEmailError(false)
    }
  }

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  return (
    <div className="relative w-screen h-full bg-base font-portfolio_text ">
      <img
        src={rings}
        alt=""
        className="absolute transform scale-150 top-36 -left-72 landscape:-left-1/2"
      />

      <img src={circle} alt="" className="absolute top-44 -right-12 " />

      <article className="flex flex-col items-center justify-center gap-10 text-top text-text_color">
        {/* header section */}
        <section className="relative flex flex-col justify-center w-5/6 h-full gap-5 pb-20 text-center border-b-2 ">
          <div className="relative flex flex-col items-center justify-center w-full h-full ">
            <h1 className="absolute font-bold text-m leading-m top-5">
              adamkeyes
            </h1>
            <div className="absolute w-3/5 p-2 top-16 landscape:top-4 landscape:w-full ">
              <ul className="flex justify-between ">
                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      className="fill-current text-logo_color hover:text-underlined"
                    >
                      <path d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="26"
                      height="23"
                      className="fill-current text-logo_color hover:text-underlined"
                    >
                      <path d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="25"
                      height="24"
                      className="fill-current text-logo_color hover:text-underlined"
                    >
                      <path d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z" />
                    </svg>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="20"
                      className="fill-current text-logo_color hover:text-underlined"
                    >
                      <path d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z" />
                    </svg>
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
        {/* skills section */}
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
        {/* projects section */}
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

          {projects.map((project) => {
            return (
              <Project_Card
                title={project.title}
                image={project.image}
                skills={project.skills}
              />
            )
          })}
        </section>
        {/* contact section */}
        <section className="relative flex flex-col items-center justify-center w-5/6 gap-5 pb-20 border-b-2">
          <img
            src={rings}
            alt=""
            className="absolute transform scale-150 pointer-events-none top-[350px] -left-[350px] landscape:-left-1/2"
          />
          <h2 className="font-bold text-[40px] leading-[40px] -tracking-[1.14px]">
            Contact
          </h2>{' '}
          <p className="w-full text-center text-sub_text_color text-m_sm leading-m_sm">
            I would love to hear about your project and how I could help. Please
            fill in the form, and I’ll get back to you as soon as possible.
          </p>
          <form className="flex flex-col w-full gap-8 text-sub_text_color ">
            <div
              className={
                'pb-4 border-b-2  relative ' +
                (name.length !== 0 &&
                  (nameError ? ' border-red-500' : ' border-underlined'))
              }
            >
              <span
                class={
                  'material-symbols-outlined text-red-500 absolute bottom-3 right-4 ' +
                  (nameError ? ' block' : ' hidden')
                }
              >
                error
              </span>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={handleNameChange}
                className={'w-full pl-10 border-none outline-none bg-base '}
                placeholder="NAME"
                required
              />
            </div>
            <div
              className={
                'pb-4 border-b-2 relative ' +
                (email.length !== 0 &&
                  (emailError ? ' border-red-500' : 'border-underlined'))
              }
            >
              <span
                class={
                  'material-symbols-outlined text-red-500 absolute bottom-3 right-4 ' +
                  (emailError ? ' block' : ' hidden')
                }
              >
                error
              </span>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                className={'w-full pl-10 border-none outline-none bg-base '}
                placeholder="EMAIL"
                required
              />
              <span
                className={
                  'absolute right-0 text-red-500 lowercase -bottom-6  ' +
                  (emailError ? ' block' : ' hidden')
                }
              >
                Sorry invalid format here
              </span>
            </div>
            <div
              className={
                'flex flex-col pb-4 border-b-2' +
                (message.length !== 0 ? ' border-underlined' : '')
              }
            >
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleMessageChange}
                className="w-full h-20 pl-10 border-none outline-none bg-base"
                placeholder="MESSAGE"
              ></textarea>
            </div>
            <h3 className="mt-5">
              <span className="flex items-end justify-end pb-2 font-bold uppercase leading-m_sm tracking-m_sm text-m_sm">
                <span className="border-b-2 cursor-pointer hover:text-underlined border-underlined">
                  Send Message
                </span>
              </span>
            </h3>
          </form>
        </section>
        <footer className="flex flex-col items-center justify-center gap-4 pb-10">
          <h1 className="font-bold text-m leading-m">adamkeyes</h1>

          <ul className="flex gap-x-5 ">
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  className="fill-current text-logo_color hover:text-underlined"
                >
                  <path d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="26"
                  height="23"
                  className="fill-current text-logo_color hover:text-underlined"
                >
                  <path d="M13.084.23a.751.751 0 0 0-.736.75v14.267a.75.75 0 1 0 1.5 0V.98a.75.75 0 0 0-.763-.75ZM24.44 4.504a.752.752 0 0 0-.284.064l-6.44 2.875a.752.752 0 0 0 0 1.37l6.44 2.884a.75.75 0 0 0 .612-1.369L19.861 8.13l4.907-2.191a.753.753 0 0 0 .38-.99.752.752 0 0 0-.708-.444ZM1.371 9.663a.752.752 0 0 0-.74.938C2.41 17.447 8.603 22.23 15.685 22.23a.75.75 0 1 0 0-1.501A14.053 14.053 0 0 1 2.083 10.225a.75.75 0 0 0-.712-.561v-.001Z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="24"
                  className="fill-current text-logo_color hover:text-underlined"
                >
                  <path d="M5.551 3.304c-1.14 0-2.067.926-2.067 2.064 0 1.14.928 2.066 2.067 2.066a2.066 2.066 0 0 0 0-4.13ZM3.767 8.998v11.453h3.562L7.33 8.998H3.767Zm5.798 0V20.45l3.554.002.002-5.668c0-1.454.253-2.941 2.132-2.941 1.851 0 1.851 1.755 1.851 3.036v5.571l3.559-.001v-6.28c0-2.834-.517-5.457-4.27-5.457-1.763 0-2.916.997-3.368 1.85h-.05V8.997h-3.41ZM22.435 24H1.982c-.976 0-1.77-.777-1.77-1.732V1.731C.212.776 1.006 0 1.982 0h20.453c.98 0 1.777.776 1.777 1.73v20.538c0 .955-.797 1.732-1.777 1.732Z" />
                </svg>
              </a>
            </li>

            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="20"
                  className="fill-current text-logo_color hover:text-underlined"
                >
                  <path d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z" />
                </svg>
              </a>
            </li>
          </ul>
        </footer>
      </article>
    </div>
  )
}

export default App
