import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <b>&nbsp; &nbsp;Ziad ACHRRAB</b>
        <span className="ms-1">&nbsp;©2023 All rights reserved.</span>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
