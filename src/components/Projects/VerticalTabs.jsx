"use client"
import React from "react";
import {Tabs, Tab, Card, CardBody, Switch} from "@nextui-org/react";
import { TRUE } from "sass";

export default function VerticalTabs() {
  const [isVertical, setIsVertical] = React.useState(true);
  return (
    <div className="flex flex-col px-4">
      <div className="flex w-full flex-col">
        <Tabs isVertical={isVertical}
         arial-label='Options'
         colour='primary'
         variant='light' 
         classNames={{
            tabList: "flex flex-col justify-start items-center",
            cursor: "flex justify-center items-center bg-transparent border text-white border-white rounded-3xl p-5",
            tab: "flex justify-center items-center",
            tabContent: ""
         }}
         >
          <Tab key="ui" title={
            <div className="bg-blue text-white data-selected:border data-selected:border-orange-500 ">
                UI/UX Design
            </div>
          }
          >
            <Card className='rounded-none'>
              <CardBody className='bg-black rounded-none text-white'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="web" title="Websites">
            <Card>
              <CardBody>
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </CardBody>
            </Card>  
          </Tab>
          <Tab key="app" title="Applications">
            <Card>
              <CardBody>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </CardBody>
            </Card>  
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
