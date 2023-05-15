import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Model from 'src/assets/images/model.jpg'
import { cilArrowThickToLeft } from '@coreui/icons'

function State(props) {
  const location = useLocation()
  const navigate = useNavigate()
  const rowData = location.state
  useEffect(() => {
    randomlyActivateCheckbox()
  }, [])

  function randomlyActivateCheckbox() {
    const checkboxes = document.querySelectorAll('.form-check-input')
    const randomIndex = Math.floor(Math.random() * checkboxes.length)

    checkboxes.forEach((checkbox, index) => {
      if (index === randomIndex) {
        checkbox.checked = true
      } else {
        checkbox.checked = false
      }
    })
  }
  return (
    <>
      <div
        style={{
          display: 'flex',
          position: 'absolute',
          left: '20%',
          top: '157px',
        }}
      >
        <div style={{ marginLeft: '10px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch1" />
          </div>
        </div>
        <div style={{ marginLeft: '-25px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch2" />
          </div>
        </div>
        <div style={{ marginLeft: '-25px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch3" />
          </div>
        </div>
        <div style={{ marginLeft: '-40px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch4" />
          </div>
        </div>
        <div style={{ marginLeft: '-45px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch5" />
          </div>
        </div>
        <div style={{ marginLeft: '-35px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch6" />
          </div>
        </div>
        <div style={{ marginLeft: '-60px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch7" />
          </div>
        </div>
        <div style={{ marginLeft: '-50px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch8" />
          </div>
        </div>
        <div style={{ marginLeft: '-25px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" id="switch9" />
          </div>
        </div>
      </div>
      <div>
        <img
          src={Model}
          alt="Model"
          style={{ marginLeft: '10px', marginTop: '70px', width: '1200px', height: 'auto' }}
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <Link to="/products/productList">
          <CButton color="info">
            <CIcon icon={cilArrowThickToLeft} className="me-2" />
            Back
          </CButton>
        </Link>
      </div>
    </>
  )
}

export default State
