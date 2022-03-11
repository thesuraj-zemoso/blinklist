import { TabContext, TabPanel } from "@mui/lab";
import { Tab, Tabs } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import React, { useState } from "react";
import useStyle, { theme } from "../../../Theme";
import MainFinished from "../../template/finished-books/MainFinished";
import MainReading from "../../template/reading-books/MainReading";



interface Books{
  currentReading : {
    image : string;
    name : string;
    author : string;
    time : string;
    finished : boolean;
  }[],
  finishedReading:{
    image : string;
    name : string;
    author : string;
    time : string;
    finished : boolean;
  }[],
  handleFinish : (item:string)=>void;
  handleReadAgain : (item:string)=>void;
}


const ReadingTabs = (props : Books) => {
  const [value, setValue] = useState("0");
  const [bool, setBool] = useState(false);

  const handleTabs = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue);
    setValue(newValue);
    setBool(!bool);
  };
  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleTabs}
          sx={useStyle.tabs}
          TabIndicatorProps={{ style: { backgroundColor: "#22C870" } }}
        >
          <Tab
            label="Currently reading"
            value="0"
            sx={bool === false ? useStyle.activeTab : useStyle.tabStyle}
          />
          <Tab
            label="Finished"
            value="1"
            sx={bool === true ? useStyle.activeTab : useStyle.tabStyle}
          />
        </Tabs>
        <TabPanel value="0" sx={useStyle.tabPanel}>
            <MainReading 
            handleReadAgain = {props.handleReadAgain}
            handleFinish = {props.handleFinish}
            currentReading={props.currentReading}/>
        </TabPanel>
        <TabPanel value="1" sx={useStyle.tabPanel}>
            <MainFinished
              handleReadAgain = {props.handleReadAgain}
              handleFinish = {props.handleFinish}
              finishedReading={props.finishedReading}
            />
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
};

export default ReadingTabs;
