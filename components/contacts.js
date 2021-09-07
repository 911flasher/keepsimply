import offlineContact from "../db/offlineData/contact"
import { FaInstagram } from "react-icons/fa";

export default function Contacts() {
  return (
    <div className="numabers">
      <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}><FaInstagram size={40}/><a href={offlineContact.number[0]} style={{textDecoration:"none",color: "#666666"}}  target="_blank">@kupibest</a></div>
      <div style={{display:"flex", justifyContent:"center",alignItems:"center", marginLeft:"20px"}}><a href={"tel:"+offlineContact.number[1]} style={{textDecoration:"none",color: "#666666"}}>{offlineContact.number[1]}</a></div>
      <style jsx>{`
          .numabers {
            display: flex;
            align-iten:center;
            justify-content: space-between;
            
          }
          .numabers>a{
            
            
            margin-left:10px;
            text-decoration: none;
            color: #666666;
          }
        `}</style>
    </div>
  )
}
