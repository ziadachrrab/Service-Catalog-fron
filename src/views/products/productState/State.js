import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { CButton } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import Model from 'src/assets/images/model.jpg'
import { cilArrowThickToLeft } from '@coreui/icons'

function State() {
  const location = useLocation()
  const condition = location.state && location.state.condition
  const id = location.state && location.state.id
  const name = location.state && location.state.name
  const brand = location.state && location.state.brand
  const price = location.state && location.state.price
  const code = location.state && location.state.code
  const inStock = location.state && location.state.inStock
  const warranty = location.state && location.state.warranty
  useEffect(() => {
    function activateCheckbox() {
      const radios = document.querySelectorAll('.form-check-input')
      radios.forEach((checkbox) => {
        const checkboxName = checkbox.name
        if (checkboxName === condition) {
          checkbox.checked = true
        } else {
          checkbox.checked = false
        }
        checkbox.disabled = true
      })
    }
    activateCheckbox()
  }, [condition])
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
        <div style={{ marginLeft: '25px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="switch1" />
          </div>
        </div>
        <div style={{ marginLeft: '-18px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="In Stock" />
          </div>
        </div>
        <div style={{ marginLeft: '-10px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="switch3" />
          </div>
        </div>
        <div style={{ marginLeft: '-46px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="Installation" />
          </div>
        </div>
        <div style={{ marginLeft: '-35px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="In Use" />
          </div>
        </div>
        <div style={{ marginLeft: '-26px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="Maintenance" />
          </div>
        </div>
        <div style={{ marginLeft: '-55px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="switch7" />
          </div>
        </div>
        <div style={{ marginLeft: '-33px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="Recycled" />
          </div>
        </div>
        <div style={{ marginLeft: '-22px' }}>
          <div className="form-check form-switch form-switch-lg">
            <input className="form-check-input" type="checkbox" name="switch9" />
          </div>
        </div>
      </div>
      <div>
        <img
          src={Model}
          alt="Model"
          style={{ marginLeft: '10px', marginTop: '70px', wnameth: '1200px', height: 'auto' }}
        />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <div
          style={{
            background: '#f8f8f8',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <h3 style={{ marginBottom: '20px', textAlign: 'center' }}>Product Details</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ marginRight: '10px', width: '120px' }}>ID:</strong>
              <span>{id}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ marginRight: '10px', width: '120px' }}>Name:</strong>
              <span>{name}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ marginRight: '10px', width: '120px' }}>Code:</strong>
              <span>{code}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ marginRight: '10px', width: '120px' }}>Brand:</strong>
              <span>{brand}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ marginRight: '10px', width: '120px' }}>Price:</strong>
              <span>{price}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ marginRight: '10px', width: '120px' }}>In Stock:</strong>
              <span>{inStock}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ marginRight: '10px', width: '120px' }}>Condition:</strong>
              <span>{condition}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <strong style={{ marginRight: '10px', width: '120px' }}>Warranty:</strong>
              <span>{warranty}</span>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: '10px' }}>
        <Link to="/products/productList">
          <CButton color="info" style={{ color: 'white' }}>
            <CIcon icon={cilArrowThickToLeft} className="me-2" style={{ color: 'white' }} />
            Back
          </CButton>
        </Link>
      </div>
    </>
  )
}

export default State
