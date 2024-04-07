import React from 'react'
import HrNav from '../../Layout/Navbar/HrNav'
import { Routes, Route } from 'react-router-dom';
import HrMaster from './HrMaster';
import HrNotif from './HrNotif';
import { BubbleChat } from '../../../FlowiseEmbedReact/src/BubbleChat'


export default function HrLanding() {
  return (
    <>
<BubbleChat chatflowid="b89c5c33-ae91-4ab4-9091-8f116c0acd99" apiHost="http://localhost:3000" />
    
    <HrNav/>
    <Routes>  
        <Route path="/" element={< HrMaster/>} /> 
        <Route path="/notif" element={<HrNotif/>} /> 

      </Routes>
    </>
 )
}