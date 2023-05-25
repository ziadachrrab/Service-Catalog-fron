import { cilArrowThickToBottom, cilCheck, cilCheckAlt, cilCog, cilRecycle } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardGroup, CCardHeader, CCol, CProgress, CRow, CWidgetStatsC } from '@coreui/react'
import React, { useEffect, useState } from 'react'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const [installedCount, setInstalledCount] = useState(0)
  const [inUseCount, setInUseCount] = useState(0)
  const [maintenanceCount, setMaintenanceCount] = useState(0)
  const [recycledCount, setRecycledCount] = useState(0)
  const progressGroupExample1 = [
    { title: 'Monday', value1: 34, value2: 78 },
    { title: 'Tuesday', value1: 56, value2: 94 },
    { title: 'Wednesday', value1: 12, value2: 67 },
    { title: 'Thursday', value1: 43, value2: 91 },
    { title: 'Friday', value1: 22, value2: 73 },
    { title: 'Saturday', value1: 53, value2: 82 },
    { title: 'Sunday', value1: 9, value2: 69 },
  ]

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/all')
        const data = await response.json()

        // Count the rows where condition === 'Installed'
        const count = data.filter((row) => row.condition === 'Installation').length

        setInstalledCount(count)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/all')
        const data = await response.json()

        // Count the rows where condition === 'Installed'
        const count = data.filter((row) => row.condition === 'In Use').length

        setInUseCount(count)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/all')
        const data = await response.json()

        // Count the rows where condition === 'Installed'
        const count = data.filter((row) => row.condition === 'Maintenance').length

        setMaintenanceCount(count)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/products/all')
        const data = await response.json()

        // Count the rows where condition === 'Installed'
        const count = data.filter((row) => row.condition === 'Recycled').length

        setRecycledCount(count)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  return (
    <>
      <WidgetsDropdown />

      <WidgetsBrand withCharts />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader className="text-medium-emphasis">Productes States</CCardHeader>
            <CCardGroup className="mb-4">
              <CWidgetStatsC
                icon={<CIcon icon={cilArrowThickToBottom} height={42} width={35} />}
                value={installedCount.toLocaleString()}
                title="Being Installed"
                progress={{ color: 'info', value: 100 }}
              />
              <CWidgetStatsC
                icon={<CIcon icon={cilCheck} height={42} width={35} />}
                value={inUseCount.toLocaleString()}
                title="In Use"
                progress={{ color: 'danger', value: 100 }}
              />
              <CWidgetStatsC
                icon={<CIcon icon={cilCog} height={42} width={35} />}
                value={maintenanceCount.toLocaleString()}
                title="In Maintennce"
                progress={{ color: 'success', value: 100 }}
              />
              <CWidgetStatsC
                icon={<CIcon icon={cilRecycle} height={42} width={35} />}
                value={recycledCount.toLocaleString()}
                title="Recyceled"
                progress={{ color: 'warning', value: 100 }}
              />
            </CCardGroup>
            <CRow className="d-flex justify-content-center">
              <CCol xs={12} md={6} xl={6}>
                <hr className="mt-0" />
                {progressGroupExample1.map((item, index) => (
                  <div className="progress-group mb-4" key={index}>
                    <div className="progress-group-prepend">
                      <span className="text-medium-emphasis small">{item.title}</span>
                    </div>
                    <div className="progress-group-bars">
                      <CProgress thin color="info" value={item.value1} />
                      <CProgress thin color="danger" value={item.value2} />
                    </div>
                  </div>
                ))}
              </CCol>
            </CRow>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
