import { useState } from "react";
const ChatBot = ()=>{

  const [isChatVisible,setIsChatVisible] = useState(false)
    return(
      <>
      {
        isChatVisible?(
      <section >
       
       <div className="chatbot">
         <div className="card" id="chat1" style={{borderRadius: '15px'}}>
           <div className="card-header d-flex justify-content-between align-items-center p-3 bg-success text-white border-bottom-0" style={{borderTopLeftRadius: '15px', borderTopRightRadius: '15px'}}>
             <i className="fas fa-angle-left" />
             <p className="mb-0 fw-bold">Live chat</p>
             <i className="fas fa-times" style={{cursor:"pointer"}} onClick={()=>setIsChatVisible(false)}/>
           </div>
           <div className="card-body">
             <div className="d-flex flex-row justify-content-start mb-4">
               <img src="/img/chat_bot_icon/judge-chat-icon.svg" alt="avatar 1" style={{width: '30px', height: '100%'}} />
               <div className="p-3 ms-3" style={{borderRadius: '15px', backgroundColor: 'rgba(57, 192, 237,.2)'}}>
                 <p className="small mb-0">Hello and thank you for visiting Supreme Court chat bot.
                   </p>
               </div>
             </div>
             <div className="d-flex flex-row justify-content-end mb-4">
               <div className="p-3 me-3 border" style={{borderRadius: '15px', backgroundColor: '#fbfbfb'}}>
                 <p className="small mb-0">Thank you, I really like your product.</p>
               </div>
               <img src="/img/chat_bot_icon/chat-user-icon.svg" alt="avatar 1" style={{width: '45px', height: '100%'}} />
             </div>
             <div className="d-flex flex-row justify-content-start mb-4">
               <img src="/img/chat_bot_icon/judge-chat-icon.svg" alt="avatar 1" style={{width: '45px', height: '100%'}} />
               <div className="ms-3" style={{borderRadius: '15px'}}>
                 <div className="bg-image">
                   <img src="" style={{borderRadius: '15px'}} alt="video" />
                   <a href="#!">
                     <div className="mask" />
                   </a>
                 </div>
               </div>
             </div>
             <div className="d-flex flex-row justify-content-start mb-4">
               <img src="/img/chat_bot_icon/judge-chat-icon.svg" alt="avatar 1" style={{width: '45px', height: '100%'}} />
               <div className="p-3 ms-3" style={{borderRadius: '15px', backgroundColor: 'rgba(57, 192, 237,.2)'}}>
                 <p className="small mb-0">...</p>
               </div>
             </div>
             <div className="form-outline">
               <textarea className="form-control" id="textAreaExample" rows={4} defaultValue={""} />
               <label className="form-label" htmlFor="textAreaExample">Type your message</label>
             </div>
           </div>
         </div>
       </div>
   
 </section>

        ):(
          <>
          <div className="chatbot_icon">
            <img src="/img/chat.svg" style={{width:"100%"}} onClick={()=>setIsChatVisible(true)}/>
          </div>
          </>
        )
      }
      
      </>
        
    )
}

export default ChatBot;