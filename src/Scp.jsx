import {scpf} from './Scpf';

function Scp(props) {

    const {id} = props;
    const scp = scpf.find(p => p.Id === parseInt(id));

    return (
        <div className="col-md-12 px-1 pt-5">
            <div className="row">
                <div className="col-md-12 pt-5 jumbotron">
                    <h1><b className="text-uppercase">item : </b>{scp.Item}</h1>
                    <h3><b>Object Class: </b>{scp.Class}</h3>
                    <p><img src={`../src/images/${scp.Img}`}  alt={scp.Item}/></p>
                    <h3>{scp.Heading}</h3>
                    <p>{scp.Subject}</p>
                    <h3>Description:</h3>
                    <p>{scp.Description}</p>
                    <p>{scp.Reference}</p>
                    <p>{scp.ChronologicalHistory}</p>
                    <p>{scp.Additional}</p>
                    <p>{scp.Appendix}</p>
                </div> 
            </div>
        </div>
        );
    }
  
export default Scp;