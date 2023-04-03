const Project_Card = (props) => {
  return (
    <div className="flex flex-col justify-center gap-5 my-10">
      <img src={props.image} alt={props.title} />
      <h3 className="font-bold uppercase text-m leading-m ">{props.title}</h3>
      <div className="flex gap-4 -mt-4 font-semibold uppercase text-blg leading-blg text-sub_text_color">
        {props.skills.map((skill) => {
          return <span>{skill}</span>
        })}
      </div>
      <div className="flex gap-5 font-bold uppercase text-m_sm leading-m_sm tracking-m_sm ">
        <span className="pb-4 border-b-2 border-underlined hover:text-underlined">
          <a href="#">View project</a>
        </span>
        <span className="pb-4 border-b-2 border-underlined hover:text-underlined">
          <a href="#">View code</a>
        </span>
      </div>
    </div>
  )
}
export default Project_Card
