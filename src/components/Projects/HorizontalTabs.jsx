"use client"
import React from "react";
import {Tabs, Tab, Card, CardBody, Switch} from "@nextui-org/react";
import { projects } from "@/utils/data";
import Card5 from "./Card5";

const HorizontalTabs = () => {
    const [isVertical, setIsVertical] = React.useState(false);
    return (
      <div className="flex flex-col ">
        <div className="flex w-full flex-col">
          <Tabs isVertical={isVertical}
           arial-label='Options'
           variant='light' 
           classNames={{
              base:"flex flex-row md:flex-col ",
              panel:"w-full p-0",
              tabList: "w-full flex flex-wrap",
              cursor: "flex justify-center items-center bg-transparent border text-white border-white rounded-3xl",
              tab: "flex justify-center items-center",
              tabContent: ""
           }}
           >
            <Tab key="ui" title={
              <div className="w-full text-white py-5 px-5 text-[16px]">
                  UI/UX Design
              </div>
            }
            >
              <Card className='w-full rounded-none'>
                <CardBody className='w-full gap-15 justify-between bg-[#1F2937] items-center rounded-none text-white'>
                  <div className="w-full flex flex-wrap justify-around gap-10">
                    {projects['ui/ux'].map((key)=>(
                      <Card5 name={key.name} src={key.src} link={key.link}/>
                    ))}
                  </div>
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="web" title={
              <div className="w-full text-white py-5 px-5 text-[16px]">
                  Websites
              </div>
            }>
              <Card className='w-full rounded-none'>
                <CardBody className='w-full gap-15 justify-between bg-[#1F2937] items-center rounded-none text-white'>
                  <div className="w-full flex flex-wrap justify-around gap-10">
                    {projects['web'].map((key)=>(
                      <Card5 name={key.name} src={key.src} link={key.link}/>
                    ))}
                  </div>
                </CardBody>
              </Card>  
            </Tab>
            <Tab key="app" title={
              <div className="bg-blue text-white py-5 px-5 text-[16px]">
                  Applications
              </div>
            }>
              <Card className='w-full rounded-none'>
                <CardBody className='w-full gap-15 justify-between bg-[#1F2937] items-center rounded-none text-white'>
                  <div className="w-full flex flex-wrap justify-around gap-10">
                    {projects['app'].map((key)=>(
                      <Card5 key={key} name={key.name} src={key.src} link={key.link}/>
                    ))}
                  </div>
                </CardBody>
              </Card> 
            </Tab>
          </Tabs>
        </div>
      </div>
    );
  }

export default HorizontalTabs