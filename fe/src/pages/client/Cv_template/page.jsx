import CvTemplateMenu from './cv.menu'
import { CvTemplateList } from './cv.listTemplate'
import CvGuide from './cv.guide'

const TemplateCv_page = () => {
  return (
    <div className="max-w-6xl mx-auto my-5">
      <CvTemplateMenu/>
      <CvTemplateList/>
      <CvGuide/>
    </div>
  )
}

export default TemplateCv_page