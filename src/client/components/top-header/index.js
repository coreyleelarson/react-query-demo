import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

function TopHeader() {
  const history = useHistory();
  const [selectedTab, setSelectedTab] = useState('');

  const handleTabChange = (e, newTab) => {
    setSelectedTab(newTab);
    history.push(newTab);
  };

  useEffect(() => {}, [selectedTab]);

  return (
    <AppBar position="static">
      <Container>
        <Tabs onChange={handleTabChange} value={selectedTab}>
          <Tab label="Home" value="/" />
          <Tab label="Redux" value="/redux" />
          <Tab label="React Query" value="/react-query" />
        </Tabs>
      </Container>
    </AppBar>
  );
}

export default TopHeader;
