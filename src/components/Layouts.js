import React from 'react'
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import { useSelector } from "react-redux";

const Layouts = ({ children }) => {
    const { isCollapsed } = useSelector((state) => state.Collapse)
    return (

        <Grid
            h="100vh"
            templateColumns={`${isCollapsed ? "70px" : "250px"} 1fr`}
            templateRows="auto 1fr"
            position={"relative"}
        >
            <GridItem
                colSpan={1}
                bg="gray.200"
                position="sticky"
                height="100%"
                width="25%"
            >
                <Sidebar isCollapsed={isCollapsed} />
            </GridItem>
            <GridItem
                colSpan={1}
                w="auto"
                position="relative"
                height="100%"
                overflow="auto"
            >
                <Header />
                <MainContent />
            </GridItem>
        </Grid>

    );
}

export default Layouts;
