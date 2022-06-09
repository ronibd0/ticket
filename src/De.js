import React from 'react'
import { withTranslation } from 'react-i18next'

const De = ({t}) => {
  return (
    <div>
      {t('De.label')}

      <div className="body">
                
      </div>
    </div>



  )
}

export default withTranslation()(De)