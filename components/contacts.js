import offlineContact from "../db/offlineData/contact"

export default function Contacts() {
  return (
    <div className="numabers">
      <a href={"tel:"+offlineContact.number[0]}>{offlineContact.number[0]}</a>
      <a href={"tel:"+offlineContact.number[1]}>{offlineContact.number[1]}</a>
      <style jsx>{`
          .numabers {
            display: flex;
            
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
