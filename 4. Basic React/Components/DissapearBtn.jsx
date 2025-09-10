import { useState } from "react";

export const DissapearBtn = () => {

    const [visibility, setVisibility] = useState(true)

    return (
        <>
            <button onClick={() => {setVisibility(visibility == true ? false : true)}}>
                Alter Visibility
            </button>
            
            { visibility && 
            <div>
                <h1>Secret Content</h1>
            </div>
            }
        </>
    )
};
