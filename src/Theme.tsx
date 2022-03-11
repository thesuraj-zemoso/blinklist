import { createTheme } from "@mui/material";

const useStyle = {
  addToLibBtn: {
    color: "#0365F2",
    width: "100%",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "20px",
    fontSize: "16px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#F5F5F5",
    },
  },
  authorNameTypography: {
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: "500",
    color: "#6D787E",
  },
  bannerOne: {
    width: "319px",
    fontSize: "36px",
    fontWeight: "700",
    color: "#03314B",
  },
  bannerTwo: {
    width: "461px",
    fontWeight: "400",
    color: "#6D787E",
    fontSize: "18",
  },
  bookTitle: {
    fontSize: "36px",
    fontWeight: 700,
    color: "#03314B",
  },
  bookNote: {
    fontSize: "20px",
    fontWeight: 400,
    color: "#03314B",
  },
  finishReading: {
    fontWeight: 500,
    fontSize: "16px",
    color: "#03314B",
    backgroundColor: "#2CE080",
    textTransform: "none",
    borderColor: "none",

    "&:hover": {
      backgroundColor: "#2CE080",
    },
  },
  sendToKindle: {
    fontSize: "16px",
    fontWeight: 400,
    color: "#6D787E",
    textTransform: "none",
  },
  readNow: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#22C870",
    borderColor: "#111",
    textTransform: "none",
  },
  bookTitleOne: {
    fontStyle: "normal",
    fontSize: "18px",
    fontWeight: 700,
    marginLeft: "16px",
    marginTop: "23px",
  },
  currentBar: {
    width: "295px",
    height: "15px",
    position: "relative",
    background: "#F1F6F4",
    border: "1px solid #E1ECFC",
    // boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
  },
  exploreBtn: {
    marginTop: "-8px",
    fontSize: "16px",
    padding: "none",
    textTransform: "none",
    fontWeight: 500,
    color: "#03314B",
    "&:hover": {
      borderBottom: "3px solid #2CE080",
      borderRadius: "0px",
      background: "none",
    },
  },
  buttons: {
    textTransform: "none",
    color: "#6D787E",
    fontWeight: "400",
    fontStyle: "Normal",
    fontSize: "16px",
    "&:hover": {
      color: "#0365F2",
    },
  },
  finishedBar: {
    width: "295px",
    height: "15px",
    position: "relative",
    background: "#DFE8F6",
    boxSizing: "border-box",
    borderRadius: "0px 0px 8px 8px",
  },
  footerCopyRight: {
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    margin: " 16px 0px 0px 60px",
    color: "#6D787E",
  },
  footerHighlight: {
    fontStyle: "normal",
    fontSize: "24px",
    fontWeight: 500,
    color: "#0365F2",
    wdith: "378px",
  },
  navHead: {
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 700,
    color: "#03314B",
  },
  navItem: {
    width: "214px",
    marginTop: "16px",
    fontStyle: "normal",
    fontSize: "16px",
    fontWeight: 400,
    color: "#6D787E",
  },
  head: {
    marginTop: "59px",
    marginLeft: "245px",
    fontSize: "24px",
    fontWeight: 700,
    color: "#03314B",
  },
  keyIdeas: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#03314B",
    marginTop: "60px",
    marginLeft: "265px",
  },
  myLibraryHead: {
    marginTop: "59px",
    marginLeft: "240px",
    fontSize: "36px",
    fontWeight: 700,
    color: "#03314B",
  },
  myLibrary: {
    fontSize: "16px",
    fontWeight: 500,
    color: "#03314B",
  },
  readAgain: {
    color: "#0365F2",
    width: "100%",
    textTransform: "none",
    paddingTop: "14px",
    paddingBottom: "10px",
    fontSize: "16px",
    fontWeight: "500",
    "&:hover": {
      backgroundColor: "#F5F5F5",
      borderRadius: "0px",
    },
  },
  avatarDrop: {
    marginBottom: "23px",
    marginTop: "29px",
    marginLeft: "292px",
  },
  avatarNavDown: {
    marginTop: "7px",
  },
  mainBanner: {
    backgroundColor: "#F1F6F4",
    marginLeft: "235px",
    width: "940px",
    marginTop: "32px",
  },
  mainBannerItem: {
    margin: "45px",
  },
  readTimeTopography: {
    alignItems: "center",
    fontStyle: "normal",
    fontSize: "14px",
    fontWeight: 400,
    color: "#6D787E",
  },
  bookDetalisTabsOne: {
    marginLeft: "243px",
    marginTop: "40px",
  },
  bookDetalisTabsTwo: {
    padding: "0px",
    marginTop: "20px",
    marginLeft: "243px",
  },
  bookDetalisTabsTypo: {
    fontSize: "16px",
    fontWeight: "400",
    color: "#03314B",
    width: "600px",
  },
  activeTab: {
    textTransform: "none",
    fontSize: 18,
    fontWeight: 700,
    textAlign: "left",
    paddingRight: "150px",
  },
  tabStyle: {
    textTransform: "none",
    textAlign: "left",
    fontSize: 18,
    fontWeight: 400,
    paddingRight: "100px",
    position: "relative",
  },
  cardGridOne: {
    margin: " 16px 0px 0px 16px",
  },
  cardGridTwo: {
    marginLeft: "17.67px",
    marginTop: "17.67px",
  },
  exploreBoxOne: {
    position: "absolute",
    height: "100%",
    width: "100%",
  },
  exploreBoxTwo: {
    paddingLeft: "285px",
    backgroundColor: "#F1F6F4",
    paddingBottom: "15px",
  },
  exploreBoxThree: {
    backgroundColor: "#111",
    height: "100%",
    width: "100%",
    opacity: "0.4",
  },
  exploreDiv: {
    marginRight: "170px",
  },
  exploreGrid: {
    paddingTop: "10px",
  },
  exploreHeadTypoOne: {
    fontWeight: "700",
    fontSize: "16px",
    color: "#116BE9",
  },
  exploreHeadTypoTwo: {
    fontWeight: "500",
    fontSize: "16px",
    color: " #6D787E",
  },
  blinkHighlightGridOne: {
    width: "378px",
    height: "128px",
  },
  blinkHighlightGridTwo: {
    height: "26px",
    width: "124px",
  },
  blinkHighlightGridThree: {
    marginTop: "32px",
  },
  footerMainGridOne: {
    backgroundColor: "#F1F6F4",
    marginTop: "111px",
  },
  footerMainGridFour: {
    marginLeft: "390px",
    marginTop: "48px",
    marginBottom: "38px",
  },
  footerMainGridTwo: {
    marginTop: "38px",
  },
  footerMainGridThree: {
    marginLeft: "102px",
  },
  bookDetailsGrid: {
    marginTop: "83px",
  },
  bookDetailsbox: {
    marginTop: "40px",
  },
  cardStyle: {
    maxWidth: "284px",
    maxHeight: "490px",
    borderRadius: "8px",
  },
  cardAddGridOne: {
    marginTop: "25px",
    marginLeft: "225px",
    width: "1000px",
  },
  cardAddGridTwo: {
    marginTop: "10px",
  },
  cardMuiGrid: {
    width: "1000px",
  },
  cardMuiCard: {
    borderRadius: "8px",
  },
  headerLeftGridMain: {
    columnGap: "42px",
    marginTop: "30px",
    marginBottom: "30px",
  },
  headerLeftGrid: {
    marginTop: "6px",
  },
  textField: {
    width: "658px",
    marginBottom: "0px",
    marginTop: "58px",
    color: "#6D787E",
    padding: "16px",
    fontWeight: "700",
    fontSize: "24px",
    marginLeft: "225px",
  },
  tabPanel: {
    marginLeft: "210px",
    marginRight: "259px",
  },
  tabs: {
    marginLeft: "230px",
    marginTop: "60px",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: "#22C870",
    },
  },
});
export default useStyle;
