import React from 'react'
import { TabBar } from 'antd-mobile'
import { NavList } from '../constants/home'

class TabBars extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 0
        };
    }

    clickTab(tab) {
        return () => {
            this.setState({
                selectedTab: tab
            })
        }
    }

    render() {
        const { selectedTab } = this.state
        return (
            <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                <TabBar
                    unselectedTintColor="#bbb"
                    tintColor="rgb(255, 193, 28)"
                    barTintColor="white"
                    tabBarPosition="bottom"
                    prerenderingSiblingsNumber={0}
                >
                    {
                        NavList.map((item, index) => {
                            return <TabBar.Item
                                title={item.title}
                                key={index}
                                icon={<div style={item.style}></div>}
                                selectedIcon={<div style={item.selectStyle}></div>}
                                selected={selectedTab === index}
                                onPress={this.clickTab(index)}
                            >
                                {<item.children/>}
                            </TabBar.Item>
                        })
                    }
                </TabBar>
            </div>
        );
    }
}

const Home = () => {
    return <>
        <TabBars/>
    </>
}

export default Home