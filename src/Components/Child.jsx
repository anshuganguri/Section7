import { useState } from 'react';


export default function Child({ changeUser, a, b }) {
    const [inputName, setInputName] = useState("");
    const [inputSalary, setInputSalary] = useState("");
    const [inputLocation, setInputLocation] = useState("");

    const changeFun = () => {
        changeUser(inputName, inputSalary, inputLocation);
    };

    return (
        <div>
            <h3>Update User Information</h3>
            <table>
            <tr>
                <td> Name </td>
                <td> <input type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} required  /></td>
            </tr>
             
            <tr>
                <td> Salary:</td>
                <td><input type="number" value={inputSalary} onChange={(e) => setInputSalary(e.target.value)} /></td>

            </tr>
            <tr>
                <td>Location</td>
                <td><input type="text" value={inputLocation} onChange={(e) => setInputLocation(e.target.value)} /></td>
            </tr>
                                  
            </table>
            <br />
            <button onClick={changeFun}>Update User</button>
            <br />
            <p>
                Props Received: {b} - {a} = {b-a}
            </p>
        </div>
    );
}