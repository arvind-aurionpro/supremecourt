const SocialMedia = () =>{

    return(
        <div className="social_media">
        <a href="https://www.facebook.com/SupremeCourtOfIndia/" target={'_blank'}>
          <img
            src="/img/social_media/facebook.svg"
            style={{ width: "100%" }}
            alt='facebook'
          />
        </a>
        <br />
        <a href="#">
          <img
            src="/img/social_media/linkedin.svg"
            style={{ width: "100%" }}
            alt='linkdin'
          />
        </a>
        <br />
        <a href="https://twitter.com/indsupremecourt?lang=en" target={'_blank'}>
          <img
            src="/img/social_media/twitter.svg"
            style={{ width: "100%" }}
            alt='twitter'
          />
        </a>
        <br />
        <a href="#">
          <img
            src="/img/social_media/whatsapp.svg"
            style={{ width: "100%" }}
            alt='whatsapp'
          />
        </a>
        <br />
        <a href="https://www.youtube.com/@supremecourtofindia5950 " target={'_blank'}>
          <img
            src="/img/social_media/youtube.svg"
            style={{ width: "100%" }}
            alt='youtube'
          />
        </a>
      </div>

    )
}

export default SocialMedia