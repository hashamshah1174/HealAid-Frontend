import React from 'react'
import CIcon from '@coreui/icons-react'
import { cilDrop, cilSpeedometer } from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'
import _adminnav from './views/admin/_nav'
import _hospitalnav from './views/hospital/_nav'

const _nav = [..._adminnav,..._hospitalnav]

export default _nav
