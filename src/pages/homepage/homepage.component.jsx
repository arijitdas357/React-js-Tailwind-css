import React from 'react';
import LeftPanel from '../../components/leftsidepanel/leftsidepanel.component'
import AssetsItems from '../../components/assetsitems/assetsitems.component';

const HomePage = () => (
<div className="container mx-auto  ">
<LeftPanel/>
<AssetsItems/>
</div>   
);

export default HomePage;