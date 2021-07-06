import {PhotoSignatureProps} from "./App";
import Logo from "./assets/wlogo.png";

const Signature = (props: PhotoSignatureProps) => {
    return (
        <div id="signatureId">

            <table  cellPadding={0} cellSpacing={0} className={"signature"} style={{
                height: 170,
                maxWidth: '100%',
                whiteSpace: 'nowrap',
                background: '#FFFFFF',
            }}>
            <tbody>
                <tr>
                    <td>
                        <img
                            style={{width: 150}}
                            src={props.photo === "no-photo" ? Logo : props.photo}
                            alt={""}
                            />
                    </td>
                    <td>
                    <div
                        style={{
                            width: 0,
                            height: '100%',
                            borderRight: '1px solid #ff7d81',
                            marginRight: 9,
                            marginLeft: 10,
                        }}
                        />
                    </td>
                    <td>
                        <table>
                        <tr>
                                <td>
                                    <span style={{fontWeight: 900, color: '#ff7d81'}}>
                                        <span>{props.fullName}</span> 
                                        <br /> 
                                        <span style={{fontWeight: 400, color: '#ff7d81', lineHeight: '30px'}}>{props.position}</span>
                                    </span>
                                </td>
                            </tr>
                            <tr><td><span style={{fontWeight: 'bolder', color: '#ff7d81', lineHeight: '20px'}}>a:</span><span style={{ fontSize: 14 }}> {props.address}</span></td></tr>
                            <tr><td><span style={{fontWeight: 'bolder', color: '#ff7d81', lineHeight: '20px'}}>e:</span><span style={{ fontSize: 14 }}> {props.email}</span></td></tr>
                            <tr><td><span style={{fontWeight: 'bolder', color: '#ff7d81', lineHeight: '20px'}}>w:</span><span style={{ fontSize: 14 }}> {props.site}</span></td></tr>
                            <tr><td><span style={{fontWeight: 'bolder', color: '#ff7d81', lineHeight: '20px'}}>m:</span><span style={{ fontSize: 14 }}> {props.phone}</span></td></tr>
                            <tr>
                            <td colSpan={3}>
                                <div style={{marginTop: 10}}>
                                    <a style={{marginRight: 10}} href={props.fbUrl}>
                                        <img style={{height: 32, cursor: 'pointer'}} src="https://storage.googleapis.com/proflyt-template-assets/facebook.png" alt={""}/>
                                    </a>
                                    <a href={props.inUrl}>
                                        <img style={{height: 32, cursor: 'pointer'}} src="https://storage.googleapis.com/proflyt-template-assets/linkedin.png" alt={""}/>
                                    </a>
                                </div>
                            </td>
                        </tr>
                        </table>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
    );
};

export default Signature;
