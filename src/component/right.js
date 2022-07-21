import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

import Today from './into-right/today';
import Week from './into-right/week';
import Hour from './into-right/hour';

function Right(){

    return(
        <div className="right">
            <Tabs>
                <TabList>
                    <Tab>Today</Tab>
                    <Tab>Week</Tab>
                    <Tab>Hour</Tab>
                </TabList>
                <TabPanel>
                    <Today />
                </TabPanel>
                <TabPanel>
                    <Week />
                </TabPanel>
                <TabPanel>
                    <Hour />
                </TabPanel>
            </Tabs>
        </div>
    )
}

export default Right;