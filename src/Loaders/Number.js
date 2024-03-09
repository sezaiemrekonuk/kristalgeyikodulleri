import {useSpring, animated} from "react-spring";

export default function Number({value, ...props}) {
    const {number} = useSpring({
        number: value,
        from: {number: 0},
        delay: 500,
        config: {
            mass: 1,
            tension: 10,
            friction: 7
        }
    });

    return (
        <div {...props}>
            <animated.span className={"text-rose-800"}>
                {number.to(n => n.toFixed(0))}
            </animated.span>
            +
        </div>
    )
}