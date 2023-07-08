import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl,link,git }) => {
  return (
    <Col size={12} sm={6} md={4} id="projects">
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          
        </div>
       
      </div>
      <div className="link">
     <span className="git"> <a href={git}>
  <button>Github</button>
</a></span>
      <a href={link}>
  <button>Live Link</button>
</a>
      </div>
      
    </Col>
  )
}
