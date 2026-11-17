import { useEffect, useState } from "react";

const texts = ["Hi, I'm here", "Hi, I'm here", "Hi, I'm here"];

const TextChange = () => {
    const [animation, setAnimation] = useState({
        endValue: 0,
        index: 0,
        isForward: true,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimation((previous) => {
                const currentText = texts[previous.index];

                if (previous.isForward) {
                    return {
                        ...previous,
                        endValue: previous.endValue + 1,
                        isForward: previous.endValue <= currentText.length + 10,
                    };
                }

                if (previous.endValue < 2) {
                    return {
                        endValue: previous.endValue - 1,
                        index: (previous.index + 1) % texts.length,
                        isForward: true,
                    };
                }

                return {
                    ...previous,
                    endValue: previous.endValue - 1,
                };
            });
        }, 100);
        return () => clearInterval(intervalId);
    }, []); 

    return (
        <div className="transition ease duration-300">
            {texts[animation.index].substring(0, animation.endValue)}
        </div>
    );
};

export default TextChange;