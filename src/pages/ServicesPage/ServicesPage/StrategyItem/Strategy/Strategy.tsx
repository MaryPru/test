import "./Strategy.css"

interface StrategyProps {
    title: string
    description: string
}

const Strategy = (props: StrategyProps) => {
    const { title, description } = props
    return (
        <div className="strategy">
            <div className="strategyTitle">{title}</div>
            <div className="strategyDescription"> {description}  </div>
        </div>
    )
}

export default Strategy;