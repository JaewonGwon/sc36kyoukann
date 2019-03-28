import React from 'react';
import ReactDOM from 'react-dom';

const MyBookshelf = ({props}) => {
        return(
            <table class="table table-dark">
                <tbody>
                    <tr>
                        <td><img src="https://bookthumb-phinf.pstatic.net/cover/135/131/13513128.jpg?udate=20190214"/></td>
                        <td><img src="https://bookthumb-phinf.pstatic.net/cover/144/574/14457455.jpg?udate=20190313"/></td>
                        <td><img src="https://bookthumb-phinf.pstatic.net/cover/145/317/14531783.jpg?udate=20190320"/></td>
                    </tr>
                    <tr>
                        <td><img src="https://bookthumb-phinf.pstatic.net/cover/146/410/14641020.jpg?udate=20190323"/></td>
                        <td><img src="https://bookthumb-phinf.pstatic.net/cover/144/565/14456588.jpg?udate=20190309"/></td>
                        <td><img src="https://bookthumb-phinf.pstatic.net/cover/113/466/11346623.jpg?udate=20190212"/></td>
                    </tr>
                    <tr>
                        <td><img src="https://bookthumb-phinf.pstatic.net/cover/146/181/14618135.jpg?udate=20190314"/></td>
                        <td><img src="https://bookthumb-phinf.pstatic.net/cover/121/089/12108943.jpg?udate=20190316"/></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        )
}

export default MyBookshelf;