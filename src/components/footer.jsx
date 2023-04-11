import styles from "../style";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";

const footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`w-full flex justify-around md:flex-row flex-col sm:mb-10 mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="CEA"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px] my-8`}>
          <strong className="ml-[70px]">NIT Warangal</strong>
          <br />
          National Institute of Technology, Warangal
          <br />
          Hanamkonda, Telangana 506004
        </p>
      </div>

      {/* <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div> */}
      <div className={`${styles.flexCenter} flex flex-row my-auto`}>
        {socialMedia.map((social, index) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`w-[51px] h-[51px] object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-10" : "mr-50"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>

    <div className="w-full flex justify-around md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">    <div>
       <h1 className="font-poppins font-medium text-[18px] leading-[27px] " style={{textAlign: "center", color: "white", margin: "20px", paddingTop: "20px"}}>
         Ⓒ Developed by Webops Team | CEA | NIT Warangal. <br className="sm:block hidden"/> All Rights Reserved.
      </h1>
    </div>
    <div style={{display: "flex", flexDirection: "column"}}>
     <div className="font-poppins font-medium text-[18px] leading-[27px] " style={{textAlign: "center",  color: "white", marginTop:" 20px", marginBottom: "0px", paddingTop: "20px"}}>
       For issues related to the website, contact:
     </div>
      <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around"}}> 
        <div className="font-poppins font-medium text-[18px] leading-[27px]" style={{textAlign: "center",  color: "white", margin: "10px" }}>Manish <br/> +91 6202078003 </div>
        <div className="font-poppins font-medium text-[18px] leading-[27px] " style={{textAlign: "center",  color: "white", margin: "10px"}}>Piyush Yadav <br/> +91 7726800198 </div>
      </div>
     <div className="font-poppins font-medium text-[18px] leading-[27px] " style={{textAlign: "center",  color: "white", margin: "10px"}}>
       Cores | CEA webops
     </div>      
    </div>
    </div>
  </section>
);

export default footer;