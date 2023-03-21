

export const accessibility = (val)=>{



    //const style = window.getComputedStyle(document.body, null); 
    const  originalFontSize = 14


    const fixedLow = originalFontSize - 2
    const fixedHigh = Number(originalFontSize) + 2
    const fixedValue = 1
    let bodyFontSize = Number(localStorage.getItem('bodyFontSize'))

    if(bodyFontSize && bodyFontSize != undefined){        
      document.body.style.fontSize = bodyFontSize+'px'
    }else{
      localStorage.setItem('bodyFontSize',originalFontSize)
      bodyFontSize = originalFontSize
    }
    
        if(val == 0 && bodyFontSize > fixedLow){
            let minusOne = bodyFontSize - fixedValue
            document.body.style.fontSize = minusOne+'px'
            localStorage.setItem('bodyFontSize',minusOne)

        }else  if(val == 1){
            document.body.style.fontSize = originalFontSize+'px'
            localStorage.setItem('bodyFontSize',originalFontSize)

        }else if(val == 2 && bodyFontSize < fixedHigh){
            let plueOne = Number(bodyFontSize) + fixedValue
            document.body.style.fontSize = plueOne+'px'
            localStorage.setItem('bodyFontSize',plueOne)
    
        }


}


export const darkMode = (specificTag)=>{

  let anchorTag = document.querySelectorAll('a')
  let heading_h3 = document.querySelectorAll('h3')
  let heading_h4 = document.querySelectorAll('h4')
  let heading_h5 = document.querySelectorAll('h5')

  let darkBackground = document.querySelectorAll('.darkmode')

  anchorTag.forEach(element => {
    element.classList.add('darkmode_color')
   
  });

  heading_h3.forEach(element => {
    element.classList.add('darkmode_color')
  });

  heading_h4.forEach(element => {
    element.classList.add('darkmode_color')
  });

  heading_h5.forEach(element => {
    element.classList.add('darkmode_color')
  });

  darkBackground.forEach(element => {
    element.classList.add('darkmode_color_bacground')
  });
}

export const lightMode = (specificTag)=>{

  let anchorTag = document.querySelectorAll('a')
  let heading_h3 = document.querySelectorAll('h3')
  let heading_h4 = document.querySelectorAll('h4')
  let heading_h5 = document.querySelectorAll('h5')

  let darkBackground = document.querySelectorAll('.darkmode')

  anchorTag.forEach(element => {
    element.classList.remove('darkmode_color')
   
  });

  heading_h3.forEach(element => {
    element.classList.remove('darkmode_color')
  });

  heading_h4.forEach(element => {
    element.classList.remove('darkmode_color')
  });

  heading_h5.forEach(element => {
    element.classList.remove('darkmode_color')
  });

  darkBackground.forEach(element => {
    element.classList.remove('darkmode_color_bacground')
  });
}
