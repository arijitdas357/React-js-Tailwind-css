import React from 'react';
import LeftsideNationTheoryOptions from '../leftside-nationtheory-options/leftsidenationtheoryoptions.component';
import LeftPanelMenu from '../left-panel-menu/leftpanelmenu.component';


const LeftPanel = () => (
<div className="float-left   box-border w-1/6 h-ml bg-gray-700 border-gray-500 border-r-2 border-l-2 ">
<LeftsideNationTheoryOptions />
<LeftPanelMenu/>
</div>
)

export default LeftPanel;