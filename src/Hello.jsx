import './Hello.css';
export default function Hello({fname,lname,age=25}){

    return (<><h1> Hello {fname} {lname} {age}</h1><hr/></>);

} 