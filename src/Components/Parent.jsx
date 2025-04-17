import { useState } from 'react';
import Child from './Child.jsx';
import "./Parent.css";

export default function Parent() {
    const [name, setName] = useState("n1");
    const [salary, setSalary] = useState(0);
    const [location, setLocation] = useState("l1");

    const changeUser = (n, s, l) => {
        setName(n);
        setSalary(s);
        setLocation(l);
    };

    return (
        <div>
            <div>
                <h3>User Information</h3>
                <table border="2">
                    <tr>
                        <td >  Name:</td>
                        <td> {name}</td>
                    </tr>
            
                
                <tr>
                    <td>Salary:  </td>
                    <td> <i className="fa fa-rupee"></i> {salary}</td>
                </tr>
               
                <tr>
                    <td colSpan={1}>  Location</td>
                    <td colSpan={2}> {location}  </td>
                </tr>
                
                </table>
            </div>
            <br /><br /><br />
            <Child changeUser={changeUser} a={10} b={20} />
        </div>
    );
}