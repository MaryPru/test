import Strategy from "./Strategy/Strategy";
import "./StrategyItem.css";
import {useSelector} from "react-redux";

interface StrategyProps {
    title: string
    description: string
}

const StrategyItem = () => {

    const StrategyData = useSelector((state: any) => state.servicesReducers);

    return (
        <div className="strategyItem">
            <div className={"contentWrapper strategyWrapper"}>
                {StrategyData.StrategyInfo.map((strategyItem: StrategyProps) => (
                        <Strategy
                            key={`${strategyItem.title}`}
                            title={strategyItem.title}
                            description={strategyItem.description}
                        />
                    ),
                )}
            </div>
        </div>
    );
};
export default StrategyItem;
