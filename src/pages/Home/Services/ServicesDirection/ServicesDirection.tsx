import vector  from "../../../../assets/img/Vector.svg"

interface ServicesDirectionProps {
    name:string
}

const ServicesDirection = (props:ServicesDirectionProps) => {
    return (
        <div className = "ServicesDirection">
            <div className="name">{props.name}</div>
            <img src={vector} alt="vector" />
        </div > 
    )
}

export default ServicesDirection