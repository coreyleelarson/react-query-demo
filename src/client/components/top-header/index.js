import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

function TopHeader() {
  const history = useHistory();
  const location = useLocation();
  const [selectedTab, setSelectedTab] = useState(
    location.pathname.split('/')[1] || 'redux'
  );

  const handleTabChange = (e, newTab) => {
    setSelectedTab(newTab);
    history.push(newTab);
  };

  useEffect(() => {
    setSelectedTab(location.pathname.split('/')[1]);
  }, [location]);
  useEffect(() => {}, [selectedTab]);

  return (
    <AppBar position="static">
      <Container>
        <Tabs onChange={handleTabChange} value={selectedTab}>
          <Tab label="Redux" value="redux" />
          <Tab label="React Query" value="react-query" />
        </Tabs>
      </Container>
    </AppBar>
  );
}

export default TopHeader;
