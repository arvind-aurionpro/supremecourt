import BasePage from "../../components/basepage/BasePage";
import TableWithActions from "../../components/table_with_actions/TableWithActions";
import { Link } from "react-router-dom";
import Pagination from "../../components/pagination/Pagination";
import LeftLinkPanel from "../../components/left_link_panel/LeftLinkPanel";
import { useEffect } from "react";
import { setwebTitle } from "../../utils/functions";
const Constitution = () => {
  useEffect(()=>{
    setwebTitle('Constitution')
  },[])

  const leftLinkData = {
    header: "Other Links",
    data: [
      {
        url: "/Constitution",
        text: "Constitution",
        active:true
      },
      {
        url: "/History",
        text: "History",
      },
      {
        url: "/FormerChiefJustices",
        text: "Former chief Justices",
      },
      {
        url: "/FormerJustices",
        text: "Former Justices",
        
      },
      {
        url: "",
        text: "Sitemap",
      },
    ]
  }

  return (
    <>
      <BasePage active_nav={''}>
        <main className="my-3">
          <div className="container-fluid">
            <div className="row">
              <div className="col-3">
              <LeftLinkPanel data={leftLinkData} />
              </div>
              <div className="col-9">
                <div className="right-panel">
                  <h3 className="common_text_color">Constitution</h3>
                  <p>
                    <span>
                      <Link to="/">Home</Link>
                    </span>{" "}
                    {">"} Constitution
                  </p>
               

                  <section>
                    <h6>LAW, COURTS AND THE CONSTITUTION</h6>
                    <p>
                    India has one of the oldest legal systems in the world. Its law and jurisprudence stretches back into the centuries, forming a living tradition which has grown and evolved with the lives of its diverse people. India's commitment to law is created in the Constitution which constituted India into a Sovereign Democratic Republic, containing a federal system with a Parliamentary form of Government in the Union and the States, an independent judiciary, guaranteed Fundamental Rights and Directive Principles of State Policy containing objectives which though not enforceable in law are fundamental to the governance of the nation.
                    </p>

                    <h6>SOURCES OF LAW</h6>
                    <p>
                    The fountain source of law in India is the Constitution which, in turn, gives due recognition to statutes, case law and customary law consistent with its dispensations. Statutes are enacted by Parliament, State Legislatures and Union Territory Legislatures. There is also a vast body of laws known as subordinate legislation in the form of rules, regulations as well as by-laws made by Central and State Governments and local authorities like Municipal Corporations, Municipalities, Gram Panchayats and other local bodies. This subordinate legislation is made under the authority conferred or delegated either by Parliament or State or Union Territory Legislature concerned. The decisions of the Supreme Court are binding on all Courts within the territory of India. As India is a land of diversities, local customs and conventions which are not against statute, morality, etc. are to a limited extent also recognised and taken into account by Courts while administering justice in certain spheres.
                    </p>

                    <h6>ENACTMENT OF LAWS</h6>
                    <p>
                    The Indian Parliament is competent to make laws on matters enumerated in the Union List. State Legislatures are competent to make laws on matters enumerated in the State List. While both the Union and the States have power to legislate on matters enumerated in the Concurrent List, only Parliament has power to make laws on matters not included in the State List or the Concurrent List. In the event of repugnancy, laws made by Parliament shall prevail over laws made by State Legislatures, to the extent of the repugnancy. The State law shall be void unless it has received the assent of the President, and in such case, shall prevail in that State.
                    </p>

                    <h6>APPLICABILITY OF LAWS</h6>
                    <p>
                    Laws made by Parliament may extend throughout or in any part of the territory of India and those made by State Legislatures may generally apply only within the territory of the State concerned. Hence, variations are likely to exist from State to State in provisions of law relating to matters falling in the State and Concurrent Lists.
                    </p>

                    <h6>JUDICIARY</h6>
                    <p>
                    One of the unique features of the Indian Constitution is that, notwithstanding the adoption of a federal system and existence of Central Acts and State Acts in their respective spheres, it has generally provided for a single integrated system of Courts to administer both Union and State laws. At the apex of the entire judicial system, exists the Supreme Court of India below which are the High Courts in each State or group of States. Below the High Courts lies a hierarchy of Subordinate Courts. Panchayat Courts also function in some States under various names like Nyaya Panchayat, Panchayat Adalat, Gram Kachheri, etc. to decide civil and criminal disputes of petty and local nature. Different State laws provide for different kinds of jurisdiction of courts. Each State is divided into judicial districts presided over by a District and Sessions Judge, which is the principal civil court of original jurisdiction and can try all offences including those punishable with death. The Sessions Judge is the highest judicial authority in a district. Below him, there are Courts of civil jurisdiction, known in different States as Munsifs, Sub-Judges, Civil Judges and the like. Similarly, the criminal judiciary comprises the Chief Judicial Magistrates and Judicial Magistrates of First and Second Class.
                    </p>

                    <h6>SUPREME COURT REGISTRY</h6>
                    <p>
                    The Registry of the Supreme Court is headed by the Secretary General who is assisted in his work by eleven Registrars, and twenty five Additional Registrars etc. Article 146 of the Constitution deals with the appointments of officers and servants of the Supreme Court Registry.
                    </p>

           
                  </section>

               
                
                  


                </div>
              </div>
            </div>
          </div>
        </main>
      </BasePage>
    </>
  );
};
export default Constitution;
