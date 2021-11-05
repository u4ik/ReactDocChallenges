import { useState } from 'react'
import { sculptureList } from './data'


/*
When you press “Next” on the last sculpture, the code crashes. Fix the logic to prevent the crash. You may do this by adding extra logic to event handler or by disabling the button when the action is not possible.

After fixing the crash, add a “Previous” button that shows the previous sculpture. It shouldn’t crash on the first sculpture.
*/

const Challenge1 = () => {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);

    // Solution
    let prev = index > 0
    let next = index < sculptureList.length - 1

    function handlePrevClick() {
        setIndex(i => i + -1);
    }

    function handleNextClick() {
        if (next) setIndex(i => i + 1);
    }

    function handleMoreClick() {
        setShowMore(!showMore);
    }

    let sculpture = sculptureList[index];
    return (

        <>
            {prev &&
                <button onClick={handlePrevClick}>
                    Prev
                </button>
            }

            {next &&
                <button onClick={handleNextClick}>
                    Next
                </button>
            }
            <h2>
                <i>{sculpture.name} </i>
                by {sculpture.artist}
            </h2>
            <h3>
                ({index + 1} of {sculptureList.length})
            </h3>
            <button onClick={handleMoreClick}>
                {showMore ? 'Hide' : 'Show'} details
            </button>
            {showMore && <p>{sculpture.description}</p>}
            <img
                src={sculpture.url}
                alt={sculpture.alt}
            />
        </>
    )
}

export default Challenge1