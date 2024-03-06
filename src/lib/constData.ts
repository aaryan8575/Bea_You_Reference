import Facebook from "@/public/icons/facebook.svg"
import Instagram from "@/public/icons/instagram.svg"
import Watsapp from "@/public/icons/watsapp.svg"
import Location from "@/public/icons/location.svg"
import Email from "@/public/icons/email.svg"
import Phone from "@/public/icons/phone.svg"
import { Heading } from "@medusajs/ui"
import { title } from "process"

//----------------------------NAVBAR----------------------------------//
export const navbarData = {
  heading1: "Bea You",
  heading2: ".",
  navLinks: [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Shop",
      url: "/products",
    },
    {
      id: 3,
      title: "About us",
      url: "/about-us",
    },
    {
      id: 4,
      title: "Contact us",
      url: "/contact-us",
    },
  ],
}

//-------------------------------HOME PAGE ------------------------------//
export const homePageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "Nourish the glow",
  description:
    "Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through.",
  actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const BannerCarouselData = {
  backgroundBannerImage: [
    { id: 1, url: "/images/bannerImage.png" },
    { id: 2, url: "/images/bannerImage2.png" },
  ],
}

export const whyChooseUs = {
  image: "/images/whyChooseUsImg.jpg",
  heading: "We take skincare seriously",
  description: `As said "Glowing skin is always in". So we believe in empowering individuals to embrace their authentic selves through skincare that goes beyond the surface.
    We strive to create products that cater to individual needs, embracing the beauty of differences. Join us in the journey to discover, enhance, and truly 'Bea You'.`,
  services: [
    {
      id: 1,
      icon: "/icons/shippingtruck.svg",
      heading: "Premium Quality Ingredients",
      serviceDescription:
        "At Bea You, we prioritize the use of premium and carefully curated ingredients in our beauty products. Our formulations are crafted with the finest botanical extracts, antioxidants, and cutting-edge skincare technologies to ensure optimal effectiveness and results you can see and feel.",
    },
    {
      id: 2,
      icon: "/icons/bag.svg",
      heading: "For Every Skin Type",
      serviceDescription:
        "We understand that each person's skin is unique. That's why our product range is designed to cater to various skin types, tones, and concerns. Whether you have sensitive skin, oily complexion, or specific skincare needs, our solutions is to address your individual beauty requirements.",
    },
    {
      id: 3,
      icon: "/icons/support.svg",
      heading: "Cruelty-Free and Environmentally Conscious",
      serviceDescription:
        "We are committed to ethical beauty practices. All our products are cruelty-free, meaning they are not tested on animals. Additionally, we prioritize environmentally conscious packaging and sustainable practices to minimize our impact on the planet. Choosing Bea You means making a responsible and compassionate choice for your beauty routine.",
    },
    {
      id: 4,
      icon: "/icons/return.svg",
      heading: "Visible and Lasting Results",
      serviceDescription:
        "Our products are formulated with a focus on delivering visible and long-lasting results. Whether you're seeking radiant skin, reduced signs of aging, or a flawless complexion, our beauty products are designed to meet your expectations. Experience the transformative power of our formulations and witness the positive changes in your skin.",
    },
    {
      id: 5,
      icon: "/icons/return.svg",
      heading: "Expertly Crafted by Skincare Specialists",
      serviceDescription:
        "Behind every Bea You product is a team of dedicated skincare specialists and beauty experts. Our professionals work tirelessly to stay at the forefront of beauty trends, ensuring that our products reflect the latest innovations in the industry. Trust in the expertise of our team to bring you skincare and beauty solutions that are both effective and on-trend.",
    },
    {
      id: 6,
      icon: "/icons/return.svg",
      heading: "Community and Empowerment",
      serviceDescription:
        "Behind every Bea You product is a team of dedicated skincare specialists and beauty experts. Our professionals work tirelessly to stay at the forefront of beauty trends, ensuring that our products reflect the latest innovations in the industry. Trust in the expertise of our team to bring you skincare and beauty solutions that are both effective and on-trend.",
    },
  ],
}

export const testimonialData = {
  heading: "Testimonials",
  testimonialCards: [
    {
      id: 1,
      description: `"Bea You products transformed my skincare routine! The results are incredible, and I feel more confident than ever. The luxurious textures and natural ingredients make every application a pampering experience. 
      Thank you, Bea You, for bringing out the best in my beauty routine!"`,
      image: "/images/profileGirl1.png",
      name: "Nishita",
      designation: "Customer",
    },
    {
      id: 2,
      description: `"Absolutely obsessed with Bea You cosmetics! The attention to detail and quality is unmatched. My skin has never looked and felt better. 
      The packaging is not only stunning but also eco-friendly. Bea You has truly elevated my beauty regimen. Highly recommended!"`,
      image: "/images/profileMale.png",
      name: "Ritesh Newal",
      designation: "Customer",
    },
    {
      id: 3,
      description: `"Bea You's range is a game-changer! The vibrant colors and long-lasting formulas exceeded my expectations. My makeup routine has never been this fun and flawless. 
                    Bea You understands beauty in every shade. A must-have for anyone who wants to express their true self through makeup!"`,
      image: "/images/profileGirl2.png",
      name: "Sakshi Sharma",
      designation: "Executive Manager",
    },
  ],
}

//-------------------------------Deals-------------------------------//

export const DealsData = {
  heading: "Crazy Deals",
  DealCards: [
    {
      id: 1,
      image: "/images/10-off.avif",
      title: "FLAT 10% OFF",
      code: "FLAT10",
    },
    {
      id: 2,
      image: "/images/20-off.webp",
      title: "FLAT 20% OFF",
      code: "FLAT20",
    },
    // {
    //   id: 3,
    //   image: "/images/deal2.jpg",
    //   title: "New Arrivals",
    //   code: "NEWYEAR24",
    // },
  ],
}

//-------------------------------FOOTER-------------------------------//

export const footerData = {
  footerImage: "/icons/logo.svg",
  newsLetter: {
    heading: "Subscribe to Newsletter",
  },
  heading: "Bea You.",
  description:
    "Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through.",
  socialMedia: [
    {
      id: 1,
      name: "facebook",
      icon: Facebook,
      link: "https://www.facebook.com/profile.php?id=61554158007837&mibextid=LQQJ4d",
    },
    {
      id: 2,
      name: "Instagram",
      icon: Instagram,
      link: "https://www.instagram.com/beayou_skincare?igsh=MTk1cmF1eGNjbWF4MA%3D%3D",
    },
    {
      id: 3,
      name: "Watsapp",
      icon: Watsapp,
      link: "https://api.whatsapp.com/send/?phone=%2B918769142896&text&type=phone_number&text=I%20want%20to%20understand%20about",
    },
  ],
  footerLinks: [
    [
      {
        id: 1,
        title: "Shop",
        url: "/products",
      },
      {
        id: 2,
        title: "About us",
        url: "/about-us",
      },

      {
        id: 3,
        title: "Contact us",
        url: "/contact-us",
      },
    ],
    [
      {
        id: 1,
        title: "Support",
        url: "/contact-us",
      },
      {
        id: 2,
        title: "Privacy Policy",
        url: "/privacy-policy",
      },
      {
        id: 3,
        title: "Terms & Condition",
        url: "/terms-and-conditions",
      },
    ],
    // [
    //   {
    //     id: 1,
    //     title: "Cleanser",
    //     url: `/products/cleanser`,
    //   },
    //   {
    //     id: 2,
    //     title: "Gluta Radiance",
    //     url: "/products/gluta-radiance",
    //   },
    // ],
  ],
  copyright: {
    description: "Copyright ©2023. All Rights Reserved.",
    title: "thespecialcharacter.com",
    url: "https://www.thespecialcharacter.com/",
  },
}

//-----------------------------SHOP SECTION---------------------------------------------//

export const shopPageBanner = {
  heading: "Shop",
  backgroundBannerImage: "",
  description:
    "Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through.",
}

export const topProduct = {
  heading: "It's a SKIN-VESTMENT",
  description: `At 'Bea You,' our mission transcends conventional beauty standards. Our goal is to foster a community where every skin journey is celebrated, recognizing that beauty is diverse and personal.
    'Bea You' is not just a skincare brand, it's a commitment to authenticity, self-love, and the belief that everyone deserves to feel confident in their unique skin.`,
  actionBtn: "Explore",
}

//-------------------------------------ABOUT US -------------------------------------------//

export const aboutUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "About Us",
  description:
    "Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through.",
  // actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const aboutusDescription = {
  title: "Welcome to Bea You!",
  description: `Bea You, where beauty meets innovation!Our passion is to enhance your natural radiance and empower you to embrace your unique beauty. As a leading name in the beauty industry, we take pride in offering a curated selection of premium skincare and beauty products that cater to your individual needs.  

  We meticulously source ingredients from around the globe, selecting only the finest botanicals, antioxidants, and cutting-edge formulations to create products that deliver visible results. Our products are cruelty-free, environmentally conscious, and free from harmful additives, ensuring that you can indulge in self-care with a clear conscience.  
  
  We are dedicated to promoting confidence and self-love, inspiring you to embrace your unique features and express your individual style. Join us on a journey of beauty discovery, where each product is designed to enhance your natural glow and bring out the best version of you.  
    
  Thank you for choosing Bea You as your trusted partner in beauty - where every product tells a story of radiance, confidence, and self-love.`,
}

//-----------------------------CONTACT-US--------------------------//

export const contactUsPageBanner = {
  backgroundBannerImage: "/images/bannerImage.png",
  heading: "Contact Us",
  description:
    "Discover the beauty within with Bea You, Be Beautiful You. It means you can wear the less makeup and let skin shine through.",
  // actionBtn1: "Shop Now",
  actionBtn2: "Explore",
}

export const contactDetails = [
  {
    id: 1,
    name: "Address",
    icon: Location,
    description: "B/605 Ganesh Glory 11, Jagatpur Road, Gota, Ahmedabad",
  },
  {
    id: 2,
    name: "Email",
    icon: Email,
    description: "contact@beayouskincare.com",
  },
  {
    id: 3,
    name: "Phone-number",
    icon: Phone,
    description: "+91 8769142896",
  },
]

//-----------------------------CART-------------------------------------//

export const cartPageBanner = {
  heading: "Cart",
}

//-----------------------------TERMS AND CONDITION--------------------------//
export const termsPageBanner = {
  backgroundBannerImage: "",
  heading: "Terms & Condition",
}

export const termsandcondition = {
  terms: [
    {
      id: 1,
      title: "Introduction",
      description: `Welcome to Beayou! These terms and conditions outline the rules and regulations for the use of Beayou's Website, located at **https://www.beayou.thespecialcharacter.com** By accessing this website we assume you accept these terms and conditions. Do not continue to use Beayou.com if you do not agree to take all of the terms and conditions stated on this page. The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: “Client”, “You” and “Your” refers to you, the person log on this website and compliant to the Company's terms and conditions. “The Company”, “Ourselves”, “We”, “Our” and “Us”, refers to our Company. “Party”, “Parties”, or “Us”, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company,s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.`,
    },
    {
      id: 2,
      title: "Cookies",
      description: `We employ the use of cookies. By accessing Beayou.com, you agreed to use cookies in agreement with the Beayou.s Privacy Policy. Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.`,
    },
    {
      id: 3,
      title: "License",
      description: `Unless otherwise stated, Beayou and/or its licensors own the intellectual property rights for all material on Beayou.com. All intellectual property rights are reserved. You may access this from Beayou.com for your own personal use subjected to restrictions set in these terms and conditions. You must not: 
      
Republish material from Beayou.com 
Sell, rent or sub-license material from Beayou.com 
Reproduce, duplicate or copy material from Beayou.com 
Redistribute content from Beayou.com 

This Agreement shall begin on the date hereof. Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Beayou does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Beayou, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Beayou shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website. Beayou reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions. You warrant and represent that: 

You are entitled to post the Comments on our website and have all necessary licenses and consents to do so. 
The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party. 
The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy. 
The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity. 
    
You hereby grant Beayou a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media. `,
    },
    {
      id: 4,
      title: "Content Liability",
      description: `We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.`,
    },
    {
      id: 5,
      title: "Your Privacy",
      description: `Please read Privacy Policy.`,
    },
    {
      id: 6,
      title: "Removal of links from our website",
      description: `If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly. We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.`,
    },
    {
      id: 7,
      title: "Disclaimer",
      description: `To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will: 

limit or exclude our or your liability for death or personal injury.
limit or exclude our or your liability for fraud or fraudulent misrepresentation.
limit any of our or your liabilities in any way that is not permitted under applicable law.
exclude any of our or your liabilities that may not be excluded under applicable law.

The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty. As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.`,
    },
  ],
}

//-----------------------------PRIVACY AND POLICY--------------------------//
export const privacyPolicyBanner = {
  backgroundBannerImage: "",
  heading: "Privacy Policy",
}

export const privacyPolicy = {
  policy: [
    {
      id: 1,
      title: "Introduction",
      description: `At Bea you, accessible from **https://www.beayou.thespecialcharacter.com**, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by https://beayou.thespecialcharacter.com and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us. This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in https://beayou.thespecialcharacter.com. This policy is not applicable to any information collected offline or via channels other than this website.`,
    },
    {
      id: 2,
      title: "Consent",
      description: `By using our website, you hereby consent to our Privacy Policy and agree to its terms.`,
    },
    {
      id: 3,
      title: "Information we collect ",
      description: `The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information. If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.

When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone number.`,
    },
    {
      id: 4,
      title: "How we use your information",
      description: `We use the information we collect in various ways, including to: 

Provide, operate, and maintain our website.
      
Improve, personalize, and expand our website.
      
Understand and analyze how you use our website.
      
Develop new products, services, features, and functionality.
      
Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposesCommunicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes.
      
Send you emails. 
      
Find and prevent fraud.`,
    },
    {
      id: 5,
      title: "Log Files",
      description: `**https://www.beayou.thespecialcharacter.com** follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.`,
    },
    {
      id: 6,
      title: "Cookies and Web Beacons",
      description: `Like any other website, https://beayou.thespecialcharacter.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors, browser type and/or other information. For more general information on cookies, please read “What Are Cookies”.`,
    },
    {
      id: 7,
      title: "Our Advertising Partners",
      description: `Some of advertisers on our site may use cookies and web beacons. Each of our advertising partners has their own Privacy Policy for their policies on user data.`,
    },
    {
      id: 8,
      title: "Third Party Privacy Policies",
      description: `**https://beayou.thespecialcharacter.com's** Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. `,
    },
    {
      id: 9,
      title: "GDPR Data Protection Rights",
      description: `We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following: 

The right to access - You have the right to request copies of your personal data. We may charge you a small fee for this service.

The right to rectification - You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete. 

The right to erasure - You have the right to request that we erase your personal data, under certain conditions. 

The right to restrict processing - You have the right to request that we restrict the processing of your personal data, under certain conditions. 

The right to object to processing - You have the right to object to our processing of your personal data, under certain conditions. 

The right to data portability - You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions. If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.`,
    },
  ],
}
