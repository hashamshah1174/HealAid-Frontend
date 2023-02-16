import React, { useState } from 'react'
import {
  CAvatar,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import { cilAccountLogout, cilLockUnlocked, cilUser } from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { logout } from 'src/app/actions/auth'
import { authDetail } from 'src/app/services/auth'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'

const AppHeaderDropdown = () => {
  
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const role = authDetail()?.role;
  const handleLogout=(e)=>{
    dispatch(logout()).then(() => {
      navigate("/"+role+"/login");
      window.location.reload();
    })
    .catch((error) => {
      setLoading(false);
    });
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Settings</CDropdownHeader>
        <CDropdownItem href="#">
          <CIcon icon={cilUser} className="me-2" />
          Profile
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilLockUnlocked} className="me-2" />
          Change Password
        </CDropdownItem>
        <CDropdownDivider />
        <CDropdownItem type='button'  onClick={handleLogout}>
          <CIcon icon={cilAccountLogout} className="me-2" />
          {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        < span> Logout</span>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
