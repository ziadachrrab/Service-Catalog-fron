import React, { useEffect, useState } from 'react'
import { CRow, CCol, CCard, CCardBody } from '@coreui/react'

const WidgetsDropdown = () => {
  const [brandCount, setBrandCount] = useState(0)
  useEffect(() => {
    fetch('http://localhost:8080/brands/all')
      .then((response) => response.json())
      .then((data) => {
        const rowCount = data.length
        setBrandCount(rowCount)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])
  const [productCount, setProductCount] = useState(0)
  useEffect(() => {
    fetch('http://localhost:8080/products/all')
      .then((response) => response.json())
      .then((data) => {
        const inStockCount = data.reduce((total, item) => total + item.inStock, 0)
        setProductCount(inStockCount)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])
  const [priceCount, setPriceCount] = useState(0)
  useEffect(() => {
    fetch('http://localhost:8080/products/all')
      .then((response) => response.json())
      .then((data) => {
        const priceCount = data.reduce((total, item) => total + item.price, 0)
        setPriceCount(priceCount)
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }, [])
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardBody>
            <CRow>
              <CCol xs={12} md={6} xl={6}>
                <CRow>
                  <CCol sm={6}>
                    <div className="border-start border-start-2 border-start-info py-2 px-3 mb-3">
                      <div className="text-medium-emphasis small">Brands</div>
                      <div className="fs-5 fw-semibold">{brandCount}</div>
                    </div>
                  </CCol>
                  <CCol sm={6}>
                    <div className="border-start border-start-2 border-start-success py-2 px-3 mb-3">
                      <div className="text-medium-emphasis small">Products In Stock</div>
                      <div className="fs-5 fw-semibold">{productCount}</div>
                    </div>
                  </CCol>
                </CRow>
              </CCol>

              <CCol xs={12} md={6} xl={6}>
                <CRow>
                  <CCol sm={6}>
                    <div className="border-start border-start-2 border-start-danger py-2 px-3 mb-3">
                      <div className="text-medium-emphasis small">To Be Delivered</div>
                      <div className="fs-5 fw-semibold">504</div>
                    </div>
                  </CCol>
                  <CCol sm={6}>
                    <div className="border-start border-start-2 border-start-warning py-2 px-3 mb-3">
                      <div className="text-medium-emphasis small">Total Money Spent (DH)</div>
                      <div className="fs-5 fw-semibold">{priceCount}</div>
                    </div>
                  </CCol>
                </CRow>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default WidgetsDropdown
