import './App.css';
import React from 'react';

function MyComponent() {
  return (
    <div>
        <h1>Pythagoras Calculator</h1>
        <img src="https://i0.wp.com/pythagoras.nu/wp-content/uploads/2019/03/pythagoras-theorem.png?fit=480%2C352&ssl=1"/>
        <p>This is a Pythagoras Calculator. Place in 3 coordinates and find out if those coordinates make a right-angle triangle.</p>
        <table>
            <tr>
                <td><input type='number' id='x1' placeholder='x1'></input></td><td><input type='number' id='y1' placeholder='y1'></input></td>
            </tr>
            <tr>
                <td><input type='number' id='x2' placeholder='x2'></input></td><td><input type='number' id='y2' placeholder='y2'></input></td>
            </tr>
            <tr>
                <td><input type='number' id='x3' placeholder='x3'></input></td><td><input type='number' id='y3' placeholder='y3'></input></td>
            </tr>
        </table>
        <button type='button' id='Calculate' onClick={() => {
            var x1 = document.getElementById('x1').value;
            var x2 = document.getElementById('x2').value;
            var x3 = document.getElementById('x3').value;
            var y1 = document.getElementById('y1').value;
            var y2 = document.getElementById('y2').value;
            var y3 = document.getElementById('y3').value;
            let pyt = [0, 0, 0];
            pyt[0] = (Math.abs(x2-x1)**2)+(Math.abs(y2-y1)**2);
            pyt[1] = (Math.abs(x2-x3)**2)+(Math.abs(y2-y3)**2);
            pyt[2] = (Math.abs(x3-x1)**2)+(Math.abs(y3-y1)**2);
            pyt.sort(function(a, b){return a - b});
            if (pyt[0]+pyt[1] == pyt[2]) {
                alert("Yes");
            }
            else {
                alert("No");
            }

        }}>Calculate</button>
        <p>You can also type in the lengths of the sides of the triangle below.</p>
        <table>
            <tr>
                <td><input type='number' id='length1' placeholder='length1'></input></td>
                <td><input type='number' id='length2' placeholder='length2'></input></td>
                <td><input type='number' id='length3' placeholder='length3'></input></td>
            </tr>
        </table>
        <button type='button' id='Calculate' onClick={() => {
            let pyt = [0, 0, 0];
            pyt[0] = (document.getElementById('length1').value**2);
            pyt[1] = (document.getElementById('length2').value**2);
            pyt[2] = (document.getElementById('length3').value**2);
            pyt.sort(function(a, b){return a - b});
            if (pyt[0]+pyt[1] == pyt[2]) {
                alert("Yes");
            }
            else {
                alert("No");
            }

        }}>Calculate</button>
        <p>Type in the length and the width below and the website will return you the hypotunese of the triangle.</p>
        <table>
            <tr>
                <td><input type='number' id='height' placeholder='height'></input></td>
                <td><input type='number' id='width' placeholder='width'></input></td>
            </tr>
            
        </table>
        <button type='button' id='Calculate' onClick={() => {
            let height = document.getElementById('height').value**2;
            let width = document.getElementById('width').value**2;
            alert(Math.sqrt(height+width))
        }}>Calculate</button>
    </div>
  );
}

export default MyComponent;