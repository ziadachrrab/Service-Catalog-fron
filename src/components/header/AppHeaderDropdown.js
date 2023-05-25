import React, { useEffect } from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilUser, cilArrowThickFromRight } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import profile from 'src/assets/images/prf.png'
import { useNavigate } from 'react-router-dom'

const AppHeaderDropdown = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('loggedIn')
    navigate('/login')
  }
  useEffect(() => {
    const loggedIn = localStorage.getItem('loggedIn')
    if (!loggedIn) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={profile} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <CDropdownItem>
          <CIcon icon={cilUser} className="me-2" />
          HH188206
        </CDropdownItem>
        <CDropdownHeader className="bg-light fw-semibold py-0">ADMIN</CDropdownHeader>
        <CDropdownDivider />
        <CDropdownItem onClick={handleLogout} href="#">
          <CIcon icon={cilArrowThickFromRight} className="me-2" />
          Log Out
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
