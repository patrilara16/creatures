import { useState } from 'react';
import Creature from './Creature.jsx';

function CreatureField() {
    const [creatures, setCreatures] = useState([
        {
            id: 1, name: "Mr. Fresh", age: 3,
            sleepImageUrl: "/images/first_sleep.png",
            awakeImageUrl: "/images/first_awake.png",
            x: 120, y: 140, isAwake: false
        },
        {
            id: 2, name: "Meimei", age: 5,
            sleepImageUrl: "/images/second_sleep.png",
            awakeImageUrl: "/images/second_awake.png",
            x: 300, y: 260, isAwake: false
        },
        {
            id: 3, name: "Bingus", age: 2,
            sleepImageUrl: "/images/third_sleep.png",
            awakeImageUrl: "/images/third_awake.png",
            x: 550, y: 40, isAwake: false
        },
        {
            id: 4, name: "Leipä", age: 4,
            sleepImageUrl: "/images/fourth_sleep.png",
            awakeImageUrl: "/images/fourth_awake.png",
            x: 150, y: 420, isAwake: false
        },
        {
            id: 5, name: "Mista", age: 4,
            sleepImageUrl: "/images/fifth_sleep.png",
            awakeImageUrl: "/images/fifth_awake.png",
            x: 550, y: 590, isAwake: false
        }
    ]);

    function handleWake(id) {
        setCreatures(creatures.map(creature => {
            if (creature.id !== id) {
                return creature;
            }

            const nextIsAwake = !creature.isAwake;
            return {
                ...creature,
                isAwake: nextIsAwake,
                x: nextIsAwake ? Math.random() * 680 : creature.x,
                y: nextIsAwake ? Math.random() * 600 : creature.y
            };
        }));
    }

    const awakeCount = creatures.filter(c => c.isAwake).length;

    const fieldStyle = {
        position: 'relative',
        width: '800px',
        height: '800px',
        border: '2px solid #ccc',
        margin: '20px auto',
        backgroundColor: '#6b8c66'
    };

    return (
        <div>
            <h2 style={{ textAlign: 'center' }}>
                {awakeCount} of {creatures.length} creatures awake
            </h2>

            <div style={fieldStyle}>
                {creatures.map(creature => (
                    <Creature
                        key={creature.id}
                        id={creature.id}
                        name={creature.name}
                        age={creature.age}
                        sleepImageUrl={creature.sleepImageUrl}
                        awakeImageUrl={creature.awakeImageUrl}
                        x={creature.x}
                        y={creature.y}
                        isAwake={creature.isAwake}
                        onWake={handleWake}
                    />
                ))}
            </div>
        </div>
    );
}

export default CreatureField;