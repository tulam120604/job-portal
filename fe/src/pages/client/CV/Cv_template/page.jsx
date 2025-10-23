import CvTemplateMenu from './cv.menu'
import { CvTemplateList } from './cv.listTemplate'
import CvGuide from './cv.guide'

const TemplateCv_page = () => {
  return (
    <div className="my-5">
      <CvTemplateMenu/>
      <CvTemplateList/>
      <CvGuide/>
    </div>
  )
}

export default TemplateCv_page