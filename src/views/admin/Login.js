import React from 'react'
import { Link,  Navigate, useNavigate  } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from 'src/app/actions/auth'
import { LOGIN_ENDPOINT } from 'src/app/constants'

const Login = () => {
  let navigate = useNavigate();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);



  const dispatch = useDispatch();

  const onChangeEmail = (e) => {
    const username = e.target.value;
    setEmail(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin =async()=>{
    setLoading(true);
    dispatch(login(email, password,'admin'))
        .then(() => {
          navigate("/admin/dashboard");
          window.location.reload();
          // window.location.href= "/admin/dashboard";
        })
        .catch((error) => {
          setLoading(false);
        });
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center" >
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                <h1>Admin Login</h1>
                  <CForm onSubmit={handleLogin}>
                    
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username"
                      type='email' value={email}
                      onChange={onChangeEmail} />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        value={password}
                        onChange={onChangePassword}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton type="submit" color="primary" className="px-4" disabled={loading}>
                        {loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <span>Login</span>
                        </CButton>
                      </CCol>
                   
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
           
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
