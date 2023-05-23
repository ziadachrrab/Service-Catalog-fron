import {
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cifBr,
  cifCn,
  cifEs,
  cifFr,
  cifGb,
  cifHr,
  cifIn,
  cifMa,
  cifPl,
  cifUs,
  cilPeople,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import {
  CAvatar,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
import Prf from 'src/assets/images/prf.png'

const Purchases = () => {
  const getRandomPeriod = () => {
    const startDate = new Date(Date.now() - Math.random() * 1000 * 60 * 60 * 24 * 365)
    const endDate = new Date(startDate.getTime() + Math.random() * 1000 * 60 * 60 * 24 * 365)
    const formattedStartDate = startDate.toDateString()
    const formattedEndDate = endDate.toDateString()
    return `${formattedStartDate} - ${formattedEndDate}`
  }
  const tableExample = [
    {
      avatar: { src: Prf, status: 'success' },
      user: {
        name: 'Ziad Achrrab ',
        new: true,
      },
      country: { name: 'Morocco', flag: cifMa },
      usage: {
        value: 50,
        period: getRandomPeriod(),
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
    },
    {
      avatar: { src: Prf, status: 'danger' },
      user: {
        name: 'Avram Tarasios',
        new: false,
      },
      country: { name: 'Brazil', flag: cifBr },
      usage: {
        value: 22,
        period: getRandomPeriod(),
        color: 'info',
      },
      payment: { name: 'Visa', icon: cibCcVisa },
      activity: '5 minutes ago',
    },
    {
      avatar: { src: Prf, status: 'warning' },
      user: { name: 'Quintin Ed' },
      country: { name: 'India', flag: cifIn },
      usage: {
        value: 74,
        period: getRandomPeriod(),
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibCcStripe },
      activity: '1 hour ago',
    },
    {
      avatar: { src: Prf, status: 'secondary' },
      user: { name: 'Enéas Kwadwo' },
      country: { name: 'USA', flag: cifUs },
      usage: {
        value: 98,
        period: getRandomPeriod(),
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibCcPaypal },
      activity: 'Last month',
    },
    {
      avatar: { src: Prf, status: 'success' },
      user: {
        name: 'Agapetus Tadeáš',
        new: true,
      },
      country: { name: 'Spain', flag: cifEs },
      usage: {
        value: 22,
        period: getRandomPeriod(),
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cibCcApplePay },
      activity: 'Last week',
    },
    {
      avatar: { src: Prf, status: 'danger' },
      user: {
        name: 'Friderik Dávid',
        new: true,
      },
      country: { name: 'Poland', flag: cifPl },
      usage: {
        value: 43,
        period: getRandomPeriod(),
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibCcMastercard },
      activity: 'Last week',
    },
    {
      avatar: { src: Prf, status: 'success' },
      user: {
        name: 'Ahmed Achrrab',
        new: true,
      },
      country: { name: 'Morocco', flag: cifMa },
      usage: {
        value: 75,
        period: getRandomPeriod(),
        color: 'info',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
    },
    {
      avatar: { src: Prf, status: 'success' },
      user: {
        name: 'Emily Johnson',
        new: true,
      },
      country: { name: 'Croatia', flag: cifHr },
      usage: {
        value: 40,
        period: getRandomPeriod(),
        color: 'warning',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
    },
    {
      avatar: { src: Prf, status: 'success' },
      user: {
        name: 'Daniel Rodriguez',
        new: true,
      },
      country: { name: 'France', flag: cifFr },
      usage: {
        value: 90,
        period: getRandomPeriod(),
        color: 'danger',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
    },
    {
      avatar: { src: Prf, status: 'success' },
      user: {
        name: 'Ethan Davis',
        new: true,
      },
      country: { name: 'United Kingdom', flag: cifGb },
      usage: {
        value: 60,
        period: getRandomPeriod(),
        color: 'primary',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
    },
    {
      avatar: { src: Prf, status: 'success' },
      user: {
        name: 'Wáng Wěi',
        new: true,
      },
      country: { name: 'China', flag: cifCn },
      usage: {
        value: 85,
        period: getRandomPeriod(),
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibCcMastercard },
    },
  ]
  return (
    <>
      <CRow>
        <CCol xs>
          <CTable align="middle" className="mb-0 border" hover responsive>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell className="text-center">
                  <CIcon icon={cilPeople} />
                </CTableHeaderCell>
                <CTableHeaderCell>Client</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Country</CTableHeaderCell>
                <CTableHeaderCell>Purchases</CTableHeaderCell>
                <CTableHeaderCell className="text-center">Payment Method</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {tableExample.map((item, index) => (
                <CTableRow v-for="item in tableItems" key={index}>
                  <CTableDataCell className="text-center">
                    <CAvatar size="md" src={item.avatar.src} status={item.avatar.status} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div>{item.user.name}</div>
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CIcon size="xl" icon={item.country.flag} title={item.country.name} />
                  </CTableDataCell>
                  <CTableDataCell>
                    <div className="clearfix">
                      <div className="float-start">
                        <strong>{item.usage.value}%</strong>
                      </div>
                      <div className="float-end">
                        <small className="text-medium-emphasis">{item.usage.period}</small>
                      </div>
                    </div>
                    <CProgress thin color={item.usage.color} value={item.usage.value} />
                  </CTableDataCell>
                  <CTableDataCell className="text-center">
                    <CIcon size="xl" icon={item.payment.icon} />
                  </CTableDataCell>
                </CTableRow>
              ))}
            </CTableBody>
          </CTable>
        </CCol>
      </CRow>
    </>
  )
}

export default Purchases
