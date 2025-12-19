import React, {useState} from 'react';
export function NameInput() {
    const [name, setName] = useState('');
    return(
        <div>
            <input 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
            />
            <p>Your name is: {name}</p>
        </div>
    )
    
}