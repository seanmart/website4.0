import Main from './main.js'

export default class extends Main{
  constructor(){
    super()
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  // -----------------------------------------------------------------------------------------------
  // CHECK
  // -----------------------------------------------------------------------------------------------

  checkTransform(e, props){
    if (e.mobile){
      super.checkTransform(e, props)
    }
  }


  // -----------------------------------------------------------------------------------------------
  // UPDATE
  // -----------------------------------------------------------------------------------------------

  update(){
    console.log('update')
    if (this.window.width == window.innerWidth) return
    super.update()
  }

}
